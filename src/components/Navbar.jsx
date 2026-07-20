import mattie from "../assets/mattie.jpg";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 px-4 py-4 shadow-md backdrop-blur-md transition-colors duration-500 md:px-6 xl:px-10 ${
        darkMode
          ? "bg-gray-900/90 text-white"
          : "bg-amber-50/90 text-black"
      }`}
    >
      {/* Top Navbar */}
      <div className="flex items-center justify-between w-full gap-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            src={mattie}
            alt="Mattie's Coffee Logo"
            className="h-20 w-20 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full shadow-lg"
          />

          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-amber-700 leading-none">
            Mattie's Coffee
          </h1>
          </div>
        </button>
        

        {/* Large Desktop Navigation */}
        <div className="hidden items-center p-4 gap-5 font-semibold xl:flex">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="whitespace-nowrap transition hover:text-amber-700"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="whitespace-nowrap transition hover:text-amber-700"
          >
            Menu
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("store")}
            className="whitespace-nowrap transition hover:text-amber-700"
          >
            Our Store
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("shop")}
            className="whitespace-nowrap transition hover:text-amber-700"
          >
            Shop
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="whitespace-nowrap transition hover:text-amber-700"
          >
            Contact
          </button>
        </div>

        {/* Large Desktop Controls */}
        <div className="hidden shrink-0 pl-3 items-center gap-2 xl:flex">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-amber-700 p-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="whitespace-nowrap rounded-full bg-amber-700 px-4 py-2 text-white transition-all duration-300 hover:bg-amber-600 active:scale-95"
          >
            Order Now
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-full border border-amber-700 px-4 py-2 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            Dine In
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-full border border-amber-700 px-4 py-2 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            Take Away
          </button>
        </div>

        {/* Tablet and Mobile Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-amber-700 p-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-amber-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Tablet and Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${
          menuOpen
            ? "mt-4 max-h-[750px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-5 rounded-2xl p-6 shadow-lg ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-amber-100 text-black"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="font-semibold hover:text-amber-700"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="font-semibold hover:text-amber-700"
          >
            Menu
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("store")}
            className="font-semibold hover:text-amber-700"
          >
            Our Store
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("shop")}
            className="font-semibold hover:text-amber-700"
          >
            Shop
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="font-semibold hover:text-amber-700"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="w-full rounded-full bg-amber-700 py-3 text-white transition-all duration-300 hover:bg-amber-600 active:scale-95"
          >
            Order Now
          </button>

          <button
            type="button"
            className="w-full rounded-full border border-amber-700 py-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            Dine In
          </button>

          <button
            type="button"
            className="w-full rounded-full border border-amber-700 py-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            Take Away
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;