import mattie from "../assets/mattie.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t px-6 py-12 transition-colors duration-500 md:px-12 lg:px-20 ${
        darkMode
          ? "border-gray-800 bg-gray-950 text-white"
          : "border-amber-200 bg-amber-100 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={mattie}
                alt="Mattie's Coffee Logo"
                className="h-16 w-16 rounded-full shadow-md"
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
                  className={`mt-1 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Fresh coffee. Warm moments.
                </p>
              </div>
            </div>

            <p
              className={`mt-5 max-w-sm leading-7 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Serving freshly brewed coffee, delicious flavours and warm
              experiences in every cup.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`mb-5 text-xl font-bold ${
                darkMode ? "text-amber-400" : "text-amber-700"
              }`}
            >
              Contact Us
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className={`flex items-center justify-center gap-3 transition hover:text-amber-600 md:justify-start ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FaPhoneAlt className="text-amber-600" />

                <span>+91 6359107838</span>
              </a>

              <a
                href="nallasiddhantp@gmail.com"
                className={`flex items-center justify-center gap-3 transition hover:text-amber-600 md:justify-start ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FaEnvelope className="text-amber-600" />

                <span>mattiescoffee@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className={`mb-5 text-xl font-bold ${
                darkMode ? "text-amber-400" : "text-amber-700"
              }`}
            >
              Follow Us
            </h3>

            <p
              className={`mb-5 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Stay connected with us on social media.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Mattie's Coffee on Instagram"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:text-white ${
                  darkMode
                    ? "border-gray-700 text-amber-400"
                    : "border-amber-700 text-amber-700"
                }`}
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Mattie's Coffee on Facebook"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:text-white ${
                  darkMode
                    ? "border-gray-700 text-amber-400"
                    : "border-amber-700 text-amber-700"
                }`}
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Mattie's Coffee on LinkedIn"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:text-white ${
                  darkMode
                    ? "border-gray-700 text-amber-400"
                    : "border-amber-700 text-amber-700"
                }`}
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Mattie's Coffee on Twitter"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:text-white ${
                  darkMode
                    ? "border-gray-700 text-amber-400"
                    : "border-amber-700 text-amber-700"
                }`}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={`mt-10 border-t pt-7 text-center ${
            darkMode ? "border-gray-800" : "border-amber-300"
          }`}
        >
          <p
            className={`text-xl font-bold sm:text-2xl ${
              darkMode ? "text-amber-400" : "text-amber-700"
            }`}
          >
            Thanks for visiting Mattie's Coffee!
          </p>

          <p
            className={`mt-2 text-base ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Do visit us again for another warm cup and a wonderful coffee
            experience.
          </p>

          <p
            className={`mt-5 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © 2026 Mattie's Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;