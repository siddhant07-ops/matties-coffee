import { useState } from "react";

function Newsletter({ darkMode }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter your email address!");
      return;
    }

    setMessage("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section
      id="contact"
      className={`px-6 py-20 transition-colors duration-500 md:px-12 lg:px-20 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-amber-50 text-gray-900"
      }`}
    >
      <div
        className={`mx-auto max-w-4xl rounded-3xl border p-8 text-center shadow-xl sm:p-12 ${
          darkMode
            ? "border-gray-700 bg-gray-800 shadow-black/30"
            : "border-amber-100 bg-white shadow-amber-900/10"
        }`}
      >
        <p
          className={`mb-3 font-semibold uppercase tracking-widest ${
            darkMode ? "text-amber-400" : "text-amber-700"
          }`}
        >
          Stay Connected
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Join Our Coffee Community
        </h2>

        <p
          className={`mx-auto mt-4 max-w-2xl leading-7 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Subscribe to receive new menu updates, special offers and coffee
          news. On Time!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setMessage("");
            }}
            placeholder="Enter your email address"
            className={`min-w-0 flex-1 rounded-full border px-6 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/30 ${
              darkMode
                ? "border-gray-600 bg-gray-900 text-white placeholder:text-gray-400"
                : "border-amber-200 bg-amber-50 text-gray-900 placeholder:text-gray-500"
            }`}
          />

          <button
            type="submit"
            className="rounded-full bg-amber-700 px-7 py-3 font-semibold text-white transition hover:bg-amber-600 active:scale-95"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 font-semibold ${
              message.includes("Thank you")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;