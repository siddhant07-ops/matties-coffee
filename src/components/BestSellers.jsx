import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/caramel latte.jpg";

function BestSellers({ darkMode }) {
  const coffees = [
    {
      name: "Espresso",
      image: espresso,
      description: "Strong, rich and full of bold coffee flavour.",
      price: "₹199",
    },
    {
      name: "Cappuccino",
      image: cappuccino,
      description: "Smooth espresso topped with creamy milk foam.",
      price: "₹249",
    },
    {
      name: "Cafe Latte",
      image: latte,
      description: "A soft and creamy coffee for a relaxing moment.",
      price: "₹279",
    },
  ];

  return (
    <section
      id="menu"
      className={`px-6 py-20 transition-colors duration-500 md:px-12 lg:px-20 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-amber-50 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p
            className={`mb-3 font-bold font-sans text-xl uppercase tracking-widest ${
              darkMode ? "text-amber-400" : "text-amber-700"
            }`}
          >
            Customer favourites
          </p>

          <h2 className="text-4xl font-extrabold  sm:text-4xl">
            Our Best Sellers
          </h2>

          <p
            className={`mx-auto mt-4 text-2xl max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover some of the most loved coffee choices from
            Mattie's Coffee.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee) => (
            <article
              key={coffee.name}
              className={`overflow-hidden rounded-3xl border shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-gray-700 bg-gray-800 shadow-black/30"
                  : "border-amber-100 bg-amber-50 shadow-amber-900/10"
              }`}
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">
                   Caramel Latte
                  </h3>

                  <span
                    className={`font-bold ${
                      darkMode ? "text-amber-400" : "text-amber-700"
                    }`}
                  >
                    {coffee.price}
                  </span>
                </div>

                <p
                  className={`mb-6 leading-7 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {coffee.description}
                </p>

                <button
                  type="button"
                  className="w-full rounded-full bg-amber-700 py-3 font-semibold text-white transition hover:bg-amber-600 active:scale-95"
                >
                  Add to Order
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;