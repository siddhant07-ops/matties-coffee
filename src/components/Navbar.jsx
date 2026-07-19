import mattie from "../assets/mattie.jpg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-md px-6 md:px-10 py-4">

      {/* Top Navbar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={mattie}
            alt="Mattie's Coffee Logo"
            className="w-16 h-16 rounded-full shadow-md"
          />

          <h1 className="text-2xl md:text-3xl font-bold text-amber-700">
            Mattie's Coffee
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-semibold">

          <a href="#home" className="hover:text-amber-700">
            Home
          </a>

          <a href="#menu" className="hover:text-amber-700">
            Menu
          </a>

          <a href="#store" className="hover:text-amber-700">
            Our Store
          </a>

          <a href="#shop" className="hover:text-amber-700">
            Shop
          </a>

          <a href="#contact" className="hover:text-amber-700">
            Contact
          </a>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">

          <button className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-600 transition">
            Order Now
          </button>

          <button className="border border-amber-700 text-amber-700 px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition">
            Dine In
          </button>

          <button className="border border-amber-700 text-amber-700 px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition">
            Take Away
          </button>

        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl text-amber-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-[600px] opacity-100 mt-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-amber-100 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-5">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="font-semibold hover:text-amber-700"
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
            className="font-semibold hover:text-amber-700"
          >
            Menu
          </a>

          <a
            href="#store"
            onClick={() => setMenuOpen(false)}
            className="font-semibold hover:text-amber-700"
          >
            Our Store
          </a>

          <a
            href="#shop"
            onClick={() => setMenuOpen(false)}
            className="font-semibold hover:text-amber-700"
          >
            Shop
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-semibold hover:text-amber-700"
          >
            Contact
          </a>

          <button
            className="w-full bg-amber-700 text-white py-3 rounded-full hover:bg-amber-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </button>

          <button
            className="w-full border border-amber-700 text-amber-700 py-3 rounded-full hover:bg-amber-700 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Dine In
          </button>

          <button
            className="w-full border border-amber-700 text-amber-700 py-3 rounded-full hover:bg-amber-700 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Take Away
          </button>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;