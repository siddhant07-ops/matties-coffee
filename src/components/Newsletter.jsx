import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setIsError(true);
      setMessage("❌ Please enter your email.");
      return;
    }

    setIsError(false);
    setMessage("✅ Thanks for subscribing to Mattie's Coffee! ☕");
    setEmail("");
  };

  return (
    <section className="px-6 md:px-12 py-16 bg-amber-50">
      {/* Small Heading */}
    <div className="bg-amber-100 rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-amber-300 transition duration-500">
      <h3 className="text-center text-amber-700 rounded-3xl gap-16  font-extrabold text-3xl">
        NEWSLETTER📰
      </h3>

      {/* Main Heading */}
      <h1 className="text-center text-4xl font-extrabold mt-3">
        Stay Updated With Mattie's Coffee
      </h1>

      {/* Paragraph */}
      <p className="text-center text-gray-700 mt-4">
        Subscribe to receive the latest coffee offers, discounts,
        <br />
        and exciting updates directly in your inbox.
      </p>

      {/* Input & Button */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          type="email"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 px-6 py-4 rounded-full border border-amber-700"
        />

        <button
          onClick={handleSubscribe}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-700 text-white"
        >
          Subscribe
        </button>
      </div>
    </div>

      {/* Success / Error Message */}
      {message && (
        <p
          className={`mt-5 text-center font-semibold ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
}

export default Newsletter;