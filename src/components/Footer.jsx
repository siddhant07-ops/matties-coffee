import mattie from "../assets/mattie.jpg";
import { FaInstagram, FaFacebook , FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <section id="contact" className=" scroll-smooth px-10 py-10 bg-amber-50">
            <div className="flex flex-col- justify-between items-center gap-16 bg-amber-200 rounded-3xl shadow-lg p-10 hover:scale-100 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
                {/*Coloumn-1*/}
                    <img 
                    src={mattie}
                    alt="Mattie's logo"
                    className="w-24 h-24 rounded-full"
                    />
                    <div>
                    <h1>
                        Mattie's Coffee
                    </h1>
                    <p>
                     Brewing happiness one cup at a time with premium beans
                     <br />
                     and unforgettable flavors.
                    </p>

                </div>

                {/*Coloumn-2*/}
                <div>
                    <h1 className="text-xl font-semibold">
                        Quick Links
                    </h1>

                    <a href="#home">Home</a>

                    <a href="#menu">Menu</a>

                    <a href="#gallery">Gallery</a>

                    <a href="#contact">Contact</a>               

                </div>

                {/*Coloumn-3*/}
                <div>
                    <h1>
                        Contact
                    </h1>
                    <p className="space-y-3">📍Mumbai,India</p>
                    <p className="space-y-3">📱+91 6359107838</p>
                    <p className="space-y-3">📧mattiescoffee@gmail.com</p>

                </div>

                {/*Coloumn-4*/}
                <div >
                    <h1>
                        FOLLOW US:
                    </h1>

                    <ul className="space-y-2 ">

                      <li className="hover:text-amber-700 text-2xl font-bold cursor-pointer transition">
                      <FaInstagram />
                      </li>

                      <li className="hover:text-amber-700  text-2xl font-bold `cursor-pointer transition">
                      <FaFacebook />
                      </li>

                      <li className="hover:text-amber-700  text-2xl font-bold cursor-pointer transition">
                      <FaLinkedin />
                      </li>

                      <li className="hover:text-amber-700 text-2xl font-bold cursor-pointer transition">
                      <FaLinkedin />
                      </li>

                      </ul>

                </div>
                <div className="sapce-y-2">
                    © 2026 Mattie's Coffee.
                    All Rights Reserved.
                    <br />
                    Made with ❤️ using React & Tailwind CSS
                </div>




            </div>

        </section>



    );
}
export default Footer;
