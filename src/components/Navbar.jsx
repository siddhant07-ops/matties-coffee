import mattie from "../assets/mattie.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaShoppingCart,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../features/cart/cartSlice";
import { useAuth } from "../context/AuthContext";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoggedIn, logout } = useAuth();

  const cartItems = useSelector((state) => state.cart.items);

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const handleOpenCart = () => {
    dispatch(openCart());
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  const handleLogin = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  const handleRegister = () => {
    setMenuOpen(false);
    navigate("/register");
  };

  const handleMyOrders = () => {
    setMenuOpen(false);
    navigate("/my-orders");
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
      <div className="flex w-full items-center justify-between gap-2">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <img
            src={mattie}
            alt="Mattie's Coffee Logo"
            className="h-16 w-16 shrink-0 rounded-full shadow-lg lg:h-20 lg:w-20"
          />

          <h1 className="truncate text-xl font-bold leading-none text-amber-700 sm:text-2xl lg:text-3xl">
            Mattie's Coffee
          </h1>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 font-semibold xl:flex">
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

        {/* Desktop Controls */}
        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          {/* Authentication */}
          {!isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={handleLogin}
                className="whitespace-nowrap rounded-full border border-amber-700 px-4 py-2 font-semibold text-amber-700 transition hover:bg-amber-700 hover:text-white"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleRegister}
                className="whitespace-nowrap rounded-full bg-amber-700 px-4 py-2 font-semibold text-white transition hover:bg-amber-600"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <span className="whitespace-nowrap font-semibold text-amber-700">
                Hi, {user?.name || "Customer"}
              </span>

              <button
                type="button"
                onClick={handleMyOrders}
                className="whitespace-nowrap rounded-full border border-amber-700 px-4 py-2 font-semibold text-amber-700 transition hover:bg-amber-700 hover:text-white"
              >
                My Orders
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="whitespace-nowrap rounded-full bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          {/* Dark Mode */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-amber-700 p-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={handleOpenCart}
            aria-label="Open shopping cart"
            className="relative rounded-full border border-amber-700 p-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            <FaShoppingCart />

            {totalCartItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Order Button */}
          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="whitespace-nowrap rounded-full bg-amber-700 px-5 py-3 text-white transition-all duration-300 hover:bg-amber-600 active:scale-95"
          >
            Order Now
          </button>
        </div>

        {/* Mobile and Tablet Controls */}
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          {/* Dark Mode */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-amber-700 p-3 text-amber-700 transition-all duration-300 active:scale-95"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={handleOpenCart}
            aria-label="Open shopping cart"
            className="relative rounded-full border border-amber-700 p-3 text-amber-700 transition-all duration-300 active:scale-95"
          >
            <FaShoppingCart />

            {totalCartItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-amber-700 transition active:scale-95"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${
          menuOpen
            ? "mt-4 max-h-[900px] opacity-100"
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
            className="font-semibold transition hover:text-amber-700"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="font-semibold transition hover:text-amber-700"
          >
            Menu
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("store")}
            className="font-semibold transition hover:text-amber-700"
          >
            Our Store
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("shop")}
            className="font-semibold transition hover:text-amber-700"
          >
            Shop
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="font-semibold transition hover:text-amber-700"
          >
            Contact
          </button>

          {/* Mobile Authentication */}
          {!isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full rounded-full border border-amber-700 py-3 font-semibold text-amber-700 transition hover:bg-amber-700 hover:text-white"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleRegister}
                className="w-full rounded-full bg-amber-700 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <p className="font-semibold text-amber-700">
                Hi, {user?.name || "Customer"}
              </p>

              <button
                type="button"
                onClick={handleMyOrders}
                className="w-full rounded-full border border-amber-700 py-3 font-semibold text-amber-700 transition hover:bg-amber-700 hover:text-white"
              >
                My Orders
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-full bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => scrollToSection("menu")}
            className="w-full rounded-full bg-amber-700 py-3 text-white transition-all duration-300 hover:bg-amber-600 active:scale-95"
          >
            Order Now
          </button>

          <button
            type="button"
            onClick={handleOpenCart}
            className="flex w-full items-center justify-center gap-3 rounded-full border border-amber-700 py-3 text-amber-700 transition-all duration-300 hover:bg-amber-700 hover:text-white active:scale-95"
          >
            <FaShoppingCart />

            View Cart

            {totalCartItems > 0 && (
              <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;