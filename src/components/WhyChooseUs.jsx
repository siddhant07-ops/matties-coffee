import {
  FaCoffee,
  FaMugHot,
  FaTruck,
  FaHeart,
} from "react-icons/fa";

function WhyChooseUs({ darkMode }) {
  const features = [
    {
      icon: <FaCoffee />,
      title: "Premium Beans",
      description:
        "We use carefully selected coffee beans for rich and fresh flavour.",
    },
    {
      icon: <FaMugHot />,
      title: "Freshly Brewed",
      description:
        "Every cup is prepared fresh to give you the best coffee experience.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description:
        "Enjoy your favourite coffee delivered quickly and safely.",
    },
    {
      icon: <FaHeart />,
      title: "Made With Love",
      description:
        "Every drink is prepared with care, passion and attention.",
    },
  ];

  return (
    <section
      id="store"
      className={`px-6 py-20 transition-colors duration-500 md:px-12 lg:px-20 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-amber-50 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p
            className={`mb-3 font-semibold text-2xl uppercase tracking-widest ${
              darkMode ? "text-amber-400" : "text-amber-700"
            }`}
          >
            Why Mattie's Coffee?
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose Us
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Great coffee, friendly service and a warm experience in
            every order.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`rounded-3xl border p-7 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-gray-700 bg-gray-800 shadow-black/30"
                  : "border-amber-100 bg-white shadow-amber-900/10"
              }`}
            >
              <div
                className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
                  darkMode
                    ? "bg-amber-400/10 text-amber-400"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {feature.title}
              </h3>

              <p
                className={`leading-7 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;