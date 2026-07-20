import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import caramel from "../assets/caramel latte.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

function BestSellers() {
  return (
    <section  id="menu"
  className="px-6 md:px-10 py-20 bg-amber-50">

      {/* Title */}
      <h2 className="text-2xl md:text-2xl font-extrabold text-center text-amber-700">
        OUR BEST SELLERS
      </h2>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-2">
        Our Most Loved Coffee
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-200 transition-all duration-300">

          <img
            src={espresso}
            alt="Espresso"
            className="w-full h-60 object-cover rounded-2xl"
          />

          <h2 className="text-2xl font-bold mt-5">
            Espresso
          </h2>

          <p className="text-amber-700 mt-2">
            A rich and bold espresso made from freshly roasted premium coffee beans.
          </p>

          <div className="flex gap-3 mt-4 text-amber-300 text-xl">
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaRegStar />
          </div>

          <p className="font-extrabold mt-2 mb-3 text-xl">
            Price - ₹199
          </p>

<button
  type="button"
  onClick={() => alert("Your coffee has been added to the order! ☕")}
  className="mt-5 w-full bg-amber-700 text-white py-3 rounded-full hover:bg-amber-800 active:scale-95 transition-all duration-300"
>
  Order Now
</button>

        </div>

        {/* Card 2 */}
        <div className="rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-950 transition-all duration-300">

          <img
            src={cappuccino}
            alt="Cappuccino"
            className="w-full h-60 object-cover rounded-2xl"
          />

          <h2 className="text-2xl font-bold mt-5">
            Cappuccino
          </h2>

          <p className="text-amber-700 mt-2">
            A smooth and creamy cappuccino topped with rich milk foam.
          </p>

          <div className="flex gap-3 mt-4 text-amber-300 text-xl">
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaRegStar />
        
          </div>

          <p className="font-extrabold mt-2 mb-3 text-xl">
            Price - ₹249
          </p>

<button
  type="button"
  onClick={() => alert("Your coffee has been added to the order! ☕")}
  className="mt-5 w-full bg-amber-700 text-white py-3 rounded-full hover:bg-amber-800 active:scale-95 transition-all duration-300"
>
  Order Now
</button>

        </div>

        {/* Card 3*/}

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl hover:shadow-amber-200 transitio-all duration-300">
            <img
            src={caramel}
            alt="Caramel Latte"
            className="w-full h-60 object-cover rounded-2xl"
            />
            <h2 className="font-bold text-2xl mt-5">
                Caramel Latte
            </h2>

            <p className="text-amber-700 mt-3">
               A rich, velvety blend of bold espresso, creamy steamed milk, and a sweet, buttery ribbon of caramel. 
            </p>
            
            <div className="flex gap-2 mt-4 text-2xl text-amber-300">
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaRegStar/>

            </div>

            <p className="font-extrabold mt-2 mb-3 text-xl">
                Price - ₹299
            </p>

<button
  type="button"
  onClick={() => alert("Your coffee has been added to the order! ☕")}
  className="mt-5 w-full bg-amber-700 text-white py-3 rounded-full hover:bg-amber-800 active:scale-95 transition-all duration-300"
>
  Order Now
</button>
        

        </div>

      </div>

    </section>
  );
}

export default BestSellers;