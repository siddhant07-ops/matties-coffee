import mattie from "../assets/mattie.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-amber-50 px-6 mb-4 md:px-12 lg:px-18 py-16"
    >
      <div className="bg-amber-950 text-white rounded-3xl shadow-2xl p-8 hover:scale-[1.01] hover:shadow-amber-800 transition duration-500">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1 */}
          <div>
            <img
              src={mattie}
              alt="Mattie's logo"
              className="w-24 h-24 rounded-full mb-4"
            />

            <h1 className="text-2xl font-bold mb-3">
              Mattie's Coffee
            </h1>

            <p className="leading-8">
              Brewing happiness one cup at a time with premium beans
              <br />
              and unforgettable flavors.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Quick Links
            </h1>

            <div className="flex flex-col gap-3">
              <a href="#home" className="hover:text-amber-300 transition">
                Home
              </a>

              <a href="#menu" className="hover:text-amber-300 transition">
                Menu
              </a>

              <a href="#gallery" className="hover:text-amber-300 transition">
                Gallery
              </a>

              <a href="#contact" className="hover:text-amber-300 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="text-xl font-semibold mb-4">
              Contact
            </h1>

            <div className="space-y-3">
              <p>📍 Mumbai, India</p>
              <p>📱 +91 6359107838</p>
              <p>📧 mattiescoffee@gmail.com</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h1 className="text-xl font-semibold mb-4">
              FOLLOW US
            </h1>

            <div className="flex gap-5 text-3xl">
              <FaInstagram className="cursor-pointer hover:text-amber-300 transition" />
              <FaFacebook className="cursor-pointer hover:text-amber-300 transition" />
              <FaTwitter className="cursor-pointer hover:text-amber-300 transition" />
              <FaLinkedin className="cursor-pointer hover:text-amber-300 transition" />
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col justify-end lg:text-right">
            <p>
              © 2026 Mattie's Coffee.
            </p>

            <p>
              All Rights Reserved.
            </p>

            <p className="mt-2">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;