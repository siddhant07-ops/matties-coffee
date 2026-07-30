import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import caramel from "../assets/caramel latte.jpg";

import { FaStar, FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

function BestSellers({ darkMode }) {
  const dispatch = useDispatch();

  const coffees = [
    {
      id: 1,
      name: "Espresso",
      description:
        "A rich and bold espresso made from freshly roasted premium coffee beans.",
      price: 199,
      image: espresso,
    },
    {
      id: 2,
      name: "Cappuccino",
      description:
        "A smooth and creamy cappuccino topped with rich milk foam.",
      price: 249,
      image: cappuccino,
    },
    {
      id: 3,
      name: "Caramel Latte",
      description:
        "A velvety blend of espresso, steamed milk and sweet caramel.",
      price: 299,
      image: caramel,
    },
  ];

  const handleAddToCart = (coffee) => {
    dispatch(addToCart(coffee));
  };

  return (
    <section
      id="menu"
      className={`px-6 py-20 transition-colors duration-500 md:px-12 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-amber-50 text-black"
      }`}
    >
      <h2 className="mb-4 text-center text-2xl font-extrabold text-amber-700 md:text-3xl">
        OUR BEST SELLERS
      </h2>

      <h1 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
        Our Most Loved Coffee
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffee) => (
          <article
            key={coffee.id}
            className={`flex flex-col rounded-3xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="h-60 w-full rounded-2xl object-cover"
            />

            <h2 className="mt-5 text-2xl font-bold">
              {coffee.name}
            </h2>

            <p
              className={`mt-2 flex-1 ${
                darkMode ? "text-gray-300" : "text-amber-700"
              }`}
            >
              {coffee.description}
            </p>

            <div className="mt-4 flex gap-2 text-xl text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>

            <p className="mt-3 text-xl font-extrabold">
              ₹{coffee.price}
            </p>

            <button
              type="button"
              onClick={() => handleAddToCart(coffee)}
              className="mt-5 w-full rounded-full bg-amber-700 py-3 text-white transition-all duration-300 hover:bg-amber-800 active:scale-95"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;