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
    <section className="px-10 py-10 justify-between items-center bg-amber-200 rounded-3xl shadow-lg  hover:scale-100 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
      {/* Small Heading */}
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
      <div className="flex justify-center items-center gap-4 mt-10">
        <input
          type="email"
          placeholder="Enter Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-80 px-5 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-amber-600"
        />

        <button
          onClick={handleSubscribe}
          className="bg-amber-700 text-white px-6 py-3 rounded-full hover:bg-amber-800 hover:scale-105 transition-all duration-300"
        >
          Subscribe
        </button>
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