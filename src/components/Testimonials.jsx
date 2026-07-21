import {
  FaUserCircle,
  FaStar,
} from "react-icons/fa";

function Testimonials({ darkMode }) {
  const testimonials = [
    {
      name: "Emma Johnson",
      role: "Coffee Lover",
      review:
        "Mattie's Coffee has become my favourite place for fresh and delicious coffee. The service is always warm and welcoming.",
    },
    {
      name: "Daniel Smith",
      role: "Regular Customer",
      review:
        "The coffee quality is amazing, and every order arrives fresh. I especially love their cappuccino and espresso.",
    },
    {
      name: "Charlotte Baker",
      role: "Frequent Customer",
      review:
        "Incredible selection and lightning-fast delivery! The website is easy to use, and the coffee arrives perfectly fresh every time.",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`px-5 py-20 transition-colors duration-500 sm:px-8 md:px-12 lg:px-20 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p
            className={`mb-3 font-semibold uppercase tracking-[0.2em] ${
              darkMode ? "text-amber-400" : "text-amber-700"
            }`}
          >
            Customer Reviews
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What Our Customers Say
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl leading-7 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Read what our customers think about their experience with
            Mattie&apos;s Coffee.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={`flex h-full flex-col items-center rounded-3xl border p-7 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-gray-700 bg-gray-800 shadow-black/30"
                  : "border-amber-100 bg-amber-50 shadow-amber-900/10"
              }`}
            >
              <FaUserCircle
                className={`mb-4 text-6xl ${
                  darkMode ? "text-amber-400" : "text-amber-700"
                }`}
              />

              <h3 className="text-lg font-bold">
                {testimonial.name}
              </h3>

              <p
                className={`mt-1 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {testimonial.role}
              </p>

              {/* Five Stars */}
              <div
                className="my-5 flex gap-1 text-xl text-yellow-400"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p
                className={`leading-7 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                “{testimonial.review}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;