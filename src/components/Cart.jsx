import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaTimes,
  FaTrash,
} from "react-icons/fa";

import {
  clearCart,
  closeCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

import { apiRequest } from "../api/api";
import { useAuth } from "../context/AuthContext";

import FakePaymentGateway from "./FakePaymentGateway";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const { items, isCartOpen } = useSelector(
    (state) => state.cart
  );

  const [showPayment, setShowPayment] = useState(false);

  const [orderError, setOrderError] = useState("");

  // Stores a copy of the cart when checkout begins.
  // This prevents the payment amount from becoming ₹0
  // after we clear Redux cart.
  const [checkoutItems, setCheckoutItems] = useState([]);

  const [checkoutTotal, setCheckoutTotal] = useState(0);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 40 : 0;

  const total = subtotal + deliveryFee;

  // ==============================
  // START CHECKOUT
  // ==============================
  const handleCheckout = () => {
    if (items.length === 0) {
      return;
    }

    // User must be logged in before placing an order
    if (!isLoggedIn) {
      dispatch(closeCart());
      navigate("/login");
      return;
    }

    setOrderError("");

    // Save a snapshot of cart before payment
    setCheckoutItems(
      items.map((item) => ({
        ...item,
      }))
    );

    setCheckoutTotal(total);

    dispatch(closeCart());

    setShowPayment(true);
  };

  // ==============================
  // PAYMENT SUCCESS → CREATE ORDER
  // ==============================
  const handlePaymentSuccess = async (
    deliveryAddress
  ) => {
    try {
      setOrderError("");

      // Convert Redux cart items into the structure
      // expected by our Express backend
      const orderItems = checkoutItems.map(
        (item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })
      );

      const data = await apiRequest(
        "/api/orders",
        {
          method: "POST",

          body: JSON.stringify({
            items: orderItems,
            deliveryAddress,
          }),
        }
      );

      console.log(
        "Order created successfully:",
        data
      );

      // Clear cart only AFTER MongoDB successfully saves order
      dispatch(clearCart());

      return true;
    } catch (error) {
      console.error(
        "Order creation failed:",
        error
      );

      setOrderError(error.message);

      return false;
    }
  };

  // ==============================
  // CLOSE PAYMENT
  // ==============================
  const handlePaymentClose = () => {
    setShowPayment(false);
  };

  // ==============================
  // VIEW MY ORDERS
  // ==============================
  const handleViewOrders = () => {
    setShowPayment(false);

    navigate("/my-orders");
  };

  return (
    <>
      {/* Dark overlay */}
      <div
        onClick={() =>
          dispatch(closeCart())
        }
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 ${
          isCartOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Cart drawer */}
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ${
          isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-2xl text-amber-700" />

            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Your Cart
              </h2>

              <p className="text-sm text-gray-500">
                {totalItems} item
                {totalItems !== 1
                  ? "s"
                  : ""}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              dispatch(closeCart())
            }
            aria-label="Close cart"
            className="rounded-full p-3 text-gray-600 hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <FaShoppingCart className="text-7xl text-gray-300" />

              <h3 className="mt-5 text-2xl font-bold text-gray-800">
                Your cart is empty
              </h3>

              <p className="mt-2 text-gray-500">
                Add your favourite coffee to
                begin your order.
              </p>

              <button
                type="button"
                onClick={() =>
                  dispatch(closeCart())
                }
                className="mt-6 rounded-full bg-amber-700 px-8 py-3 text-white active:scale-95"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-gray-200 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {item.name}
                        </h3>

                        <p className="font-semibold text-amber-700">
                          ₹{item.price}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
                            removeFromCart(
                              item.id
                            )
                          )
                        }
                        aria-label={`Remove ${item.name}`}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 rounded-full bg-gray-100 p-1">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(
                                item.id
                              )
                            )
                          }
                          className="rounded-full bg-white p-2 shadow active:scale-90"
                        >
                          <FaMinus className="text-xs" />
                        </button>

                        <span className="min-w-6 text-center font-bold text-gray-900">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              increaseQuantity(
                                item.id
                              )
                            )
                          }
                          className="rounded-full bg-white p-2 shadow active:scale-90"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>

                      <p className="font-extrabold text-gray-900">
                        ₹
                        {item.price *
                          item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Backend Error */}
        {orderError && (
          <p className="mx-5 mb-3 rounded-xl bg-red-50 p-3 font-semibold text-red-600">
            {orderError}
          </p>
        )}

        {/* Cart Summary */}
        {items.length > 0 && (
          <div className="border-t bg-gray-50 p-5">
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>
                  Delivery
                </span>

                <span>
                  ₹{deliveryFee}
                </span>
              </div>

              <div className="flex justify-between border-t pt-3 text-xl font-extrabold text-gray-900">
                <span>
                  Total
                </span>

                <span>
                  ₹{total}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-5 w-full rounded-full bg-amber-700 py-4 font-bold text-white hover:bg-amber-800 active:scale-95"
            >
              Proceed to Payment
            </button>

            <button
              type="button"
              onClick={() =>
                dispatch(clearCart())
              }
              className="mt-3 w-full py-2 font-semibold text-red-600 hover:text-red-800"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>

      {/* Payment Gateway */}
      {showPayment && (
        <FakePaymentGateway
          total={checkoutTotal}
          onPaymentSuccess={
            handlePaymentSuccess
          }
          onClose={
            handlePaymentClose
          }
          onViewOrders={
            handleViewOrders
          }
        />
      )}
    </>
  );
}

export default Cart;