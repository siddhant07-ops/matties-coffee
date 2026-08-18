import { useState } from "react";

import {
  FaCheckCircle,
  FaCreditCard,
  FaLock,
  FaTimes,
} from "react-icons/fa";

function FakePaymentGateway({
  total,
  onClose,
  onPaymentSuccess,
  onViewOrders,
}) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [error, setError] = useState("");

  const [paymentStatus, setPaymentStatus] =
    useState("idle");

  const formatCardNumber = (value) => {
    const numbersOnly = value
      .replace(/\D/g, "")
      .slice(0, 16);

    return numbersOnly
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpiry = (value) => {
    const numbersOnly = value
      .replace(/\D/g, "")
      .slice(0, 4);

    if (numbersOnly.length >= 3) {
      return `${numbersOnly.slice(
        0,
        2
      )}/${numbersOnly.slice(2)}`;
    }

    return numbersOnly;
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    setError("");

    const cleanCardNumber =
      cardNumber.replace(/\s/g, "");

    if (!deliveryAddress.trim()) {
      setError(
        "Please enter your delivery address."
      );
      return;
    }

    if (!cardName.trim()) {
      setError(
        "Please enter the cardholder name."
      );
      return;
    }

    if (cleanCardNumber.length !== 16) {
      setError(
        "Please enter a valid 16-digit card number."
      );
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError(
        "Please enter expiry in MM/YY format."
      );
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setError(
        "Please enter a valid 3-digit CVV."
      );
      return;
    }

    setPaymentStatus("processing");

    setTimeout(async () => {
      const orderCreated =
        await onPaymentSuccess(
          deliveryAddress.trim()
        );

      if (!orderCreated) {
        setPaymentStatus("idle");

        setError(
          "Payment succeeded, but the order could not be saved. Please try again."
        );

        return;
      }

      setPaymentStatus("success");
    }, 2000);
  };

  if (paymentStatus === "success") {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
          <FaCheckCircle className="mx-auto text-7xl text-green-600" />

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Payment Successful!
          </h2>

          <p className="mt-3 text-gray-600">
            Your Mattie's Coffee order has been saved successfully.
          </p>

          <p className="mt-4 text-xl font-bold text-amber-700">
            Amount paid: ₹{total}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Demo transaction ID:
            {" "}
            MATTIE-{Date.now()}
          </p>

          <button
            type="button"
            onClick={onViewOrders}
            className="mt-8 w-full rounded-full bg-amber-700 py-3 font-semibold text-white hover:bg-amber-800 active:scale-95"
          >
            View My Orders
          </button>

          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-full border border-amber-700 py-3 font-semibold text-amber-700 hover:bg-amber-50 active:scale-95"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-amber-700">
              MATTIE'S SECURE CHECKOUT
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
              Complete Payment
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close payment"
            className="rounded-full p-3 text-gray-600 hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-900 p-6 text-white">
          <div className="flex items-center justify-between">
            <FaCreditCard className="text-3xl" />
            <span className="text-sm">
              DEMO CARD
            </span>
          </div>

          <p className="mt-8 tracking-[0.25em]">
            {cardNumber ||
              "•••• •••• •••• ••••"}
          </p>

          <div className="mt-6 flex justify-between text-sm">
            <span>
              {cardName ||
                "CARDHOLDER NAME"}
            </span>

            <span>
              {expiry || "MM/YY"}
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-bold">
            Demo payment details
          </p>

          <p>
            Card: 4242 4242 4242 4242
          </p>

          <p>
            Expiry: 12/30
          </p>

          <p>
            CVV: 123
          </p>
        </div>

        <form
          onSubmit={handlePayment}
          className="mt-6 space-y-4"
        >
          <div>
            <label
              htmlFor="deliveryAddress"
              className="mb-2 block font-semibold text-gray-700"
            >
              Delivery Address
            </label>

            <textarea
              id="deliveryAddress"
              value={deliveryAddress}
              onChange={(event) =>
                setDeliveryAddress(
                  event.target.value
                )
              }
              placeholder="Enter your complete delivery address"
              rows={3}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label
              htmlFor="cardName"
              className="mb-2 block font-semibold text-gray-700"
            >
              Cardholder name
            </label>

            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={(event) =>
                setCardName(
                  event.target.value
                )
              }
              placeholder="Siddhant Nalla"
              autoComplete="off"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="mb-2 block font-semibold text-gray-700"
            >
              Card number
            </label>

            <input
              id="cardNumber"
              type="text"
              inputMode="numeric"
              value={cardNumber}
              onChange={(event) =>
                setCardNumber(
                  formatCardNumber(
                    event.target.value
                  )
                )
              }
              placeholder="4242 4242 4242 4242"
              autoComplete="off"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiry"
                className="mb-2 block font-semibold text-gray-700"
              >
                Expiry
              </label>

              <input
                id="expiry"
                type="text"
                inputMode="numeric"
                value={expiry}
                onChange={(event) =>
                  setExpiry(
                    formatExpiry(
                      event.target.value
                    )
                  )
                }
                placeholder="MM/YY"
                autoComplete="off"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="mb-2 block font-semibold text-gray-700"
              >
                CVV
              </label>

              <input
                id="cvv"
                type="password"
                inputMode="numeric"
                maxLength={3}
                value={cvv}
                onChange={(event) =>
                  setCvv(
                    event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 3)
                  )
                }
                placeholder="123"
                autoComplete="off"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-200"
              />
            </div>
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 p-3 font-semibold text-red-600">
              {error}
            </p>
          )}

          <div className="rounded-xl bg-gray-100 p-4">
            <div className="flex justify-between text-gray-600">
              <span>
                Order total
              </span>

              <span className="text-xl font-extrabold text-gray-900">
                ₹{total}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={
              paymentStatus ===
              "processing"
            }
            className="flex w-full items-center justify-center gap-3 rounded-full bg-amber-700 py-4 font-bold text-white hover:bg-amber-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FaLock />

            {paymentStatus ===
            "processing"
              ? "Processing payment..."
              : `Pay ₹${total}`}
          </button>

          <p className="text-center text-xs text-gray-500">
            This is a demonstration gateway. No real payment is processed or stored.
          </p>
        </form>
      </div>
    </div>
  );
}

export default FakePaymentGateway;