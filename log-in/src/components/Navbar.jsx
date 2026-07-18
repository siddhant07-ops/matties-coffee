import mattie from "../assets/mattie.jpg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-yellow-100 px-8 py-3">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={mattie}
          alt="Mattie's Coffee Logo"
          className="w-20 h-20 rounded-full shadow-md"
        />

        <h1 className="text-4xl font-bold text-amber-700 cursor-pointer">
          Mattie's Coffee
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 font-bold text-lg">

        <p className="cursor-pointer hover:text-amber-700 transition duration-300">
          Home
        </p>

        <p className="cursor-pointer hover:text-amber-700 transition duration-300">
          Menu
        </p>

        <p className="cursor-pointer hover:text-amber-700 transition duration-300">
          Our Store
        </p>

        <p className="cursor-pointer hover:text-amber-700 transition duration-300">
          Shop
        </p>

        <p className="cursor-pointer hover:text-amber-700 transition duration-300">
          Contact
        </p>

      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <button className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-400 transition duration-300 cursor-pointer">
          Order Now
        </button>

        <button className="bg-white border border-amber-700 text-amber-700 px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition duration-300 cursor-pointer">
          Dine In
        </button>

        <button className="bg-white border border-amber-700 text-amber-700 px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition duration-300 cursor-pointer">
          Take Away
        </button>

      </div>

    </nav>
  );
}

export default Navbar;