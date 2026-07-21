import mattie from "../assets/mattie.jpg";

function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t px-6 py-10 transition-colors duration-500 md:px-12 lg:px-20 ${
        darkMode
          ? "border-gray-800 bg-gray-950 text-white"
          : "border-amber-200 bg-amber-100 text-gray-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src={mattie}
            alt="Mattie's Coffee Logo"
            className="h-14 w-14 rounded-full shadow-md"
          />

          <div>
            <h2
              className={`text-xl font-bold ${
                darkMode ? "text-amber-400" : "text-amber-700"
              }`}
            >
              Mattie's Coffee
            </h2>

            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Fresh coffee. Warm moments.
            </p>
          </div>
        </div>

        <p className="text-2xl font-bold text-amber-600">
          THANKS FOR VISITING!
        </p>



        <p
          className={`text-center text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © 2026 Mattie's Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;