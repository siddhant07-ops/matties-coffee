import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiRequest } from "../api/api";
import API_BASE_URL from "../api/api";
import { useAuth } from "../context/AuthContext";

function MyOrders() {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!isLoggedIn) {
        navigate("/login");
        return;
      }

      try {
        setLoading(true);

        const data = await apiRequest(
          "/api/orders/my-orders"
        );

        setOrders(data.orders);
      } catch (error) {
        setMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isLoggedIn, navigate]);

  const handleDownloadInvoice = async (orderId) => {
    try {
      setMessage("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_BASE_URL}/api/invoices/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to download invoice."
        );
      }

      const blob = await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        `matties-invoice-${orderId}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-amber-50">
        <p className="text-xl font-semibold text-amber-800">
          Loading your orders...
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-amber-50 px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-800 md:text-4xl">
              My Orders
            </h1>

            <p className="mt-2 text-gray-600">
              View your order history, tracking progress,
              totals, and invoices.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Back to Home
          </button>
        </div>

        {message && (
          <p className="mb-6 rounded-xl bg-red-100 p-4 font-medium text-red-700">
            {message}
          </p>
        )}

        {orders.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              No orders yet
            </h2>

            <p className="mt-2 text-gray-600">
              Add your favourite coffee to the cart
              and place your first order.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-6 rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
            >
              Start Ordering
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="rounded-3xl bg-white p-6 shadow-lg"
              >
                <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID
                    </p>

                    <p className="break-all font-semibold text-gray-800">
                      {order._id}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-gray-500">
                      Order Date
                    </p>

                    <p className="font-semibold text-gray-800">
                      {new Date(
                        order.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <h2 className="text-xl font-bold text-amber-800">
                    Items
                  </h2>

                  <div className="mt-3 space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center justify-between rounded-xl bg-amber-50 p-4"
                      >
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.name}
                          </p>

                          <p className="text-sm text-gray-600">
                            ₹{item.price} × {item.quantity}
                          </p>
                        </div>

                        <p className="font-bold text-amber-800">
                          ₹
                          {item.price *
                            item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Delivery Address
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {order.deliveryAddress}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">
                      Estimated Delivery
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {new Date(
                        order.estimatedDelivery
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-semibold text-gray-800">
                      {order.trackingStatus}
                    </p>

                    <p className="font-semibold text-amber-700">
                      {order.trackingProgress}%
                    </p>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-amber-700 transition-all duration-500"
                      style={{
                        width: `${order.trackingProgress}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>
                        Subtotal
                      </span>

                      <span>
                        ₹
                        {order.subtotal ??
                          order.totalAmount}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>
                        Delivery Fee
                      </span>

                      <span>
                        ₹
                        {order.deliveryFee ?? 0}
                      </span>
                    </div>

                    <div className="flex justify-between border-t border-gray-300 pt-3 text-xl font-extrabold text-gray-900">
                      <span>
                        Total
                      </span>

                      <span className="text-amber-800">
                        ₹{order.totalAmount}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      handleDownloadInvoice(
                        order._id
                      )
                    }
                    className="rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
                  >
                    Download Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyOrders;