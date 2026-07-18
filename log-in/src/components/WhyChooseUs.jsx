import { FaCoffee, FaMugHot, FaTruck, FaHeart } from "react-icons/fa";
function WhyChooseUs() {
    return(
<section className="px-10 py-20 bg-amber-50">

    {/*Small Heading*/}
    <h1 className="text-center text-4xl mb-4 font-extrabold text-amber-700">
        WHY CHOOSE US?
    </h1>

    {/*Big Heading */}
    <h1 className="text-center font-extrabold text-4xl mb-12">
    Why People love Mattie's Coffee
    </h1>

    {/*Cards Container*/}
    <div className=" grid grid-cols-4 gap-9">

        <div className="justify-center mb- bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
            <FaCoffee className="text-6xl text-amber-700 mx-auto" />

        <div className="text-black font-bold">
            Premium Coffee Beans
        </div>

        <p className="text-amber-700 mt-7">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>

        </div>

        {/*Card-2*/}
        {/*Cards Container*/}

        <div className="justify-center bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
            <FaMugHot className="text-6xl text-amber-700 mx-auto" />

        <div className="text-black font-bold mb-6">
            Expert Baristas
        </div>

        <p className="text-amber-700">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>

        </div>

        {/*Card-3*/}
        {/*Cards Container*/}

        <div className="justify-center bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
            <FaTruck className="text-6xl text-amber-700 mx-auto"/>

        <div className="text-black font-bold mb-6">
            Fast Delivery
        </div>

        <p className="text-amber-700">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>

        </div>

        {/*Card-4*/}

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-110 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">
            <FaHeart className="text-6xl text-amber-700 mx-auto" />

        <div className="text-black font-bold mb-6">
           Made With Love
        </div>

        <p className="text-amber-700">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>
        </div>


     </div>
  </section>
    );
}

export default WhyChooseUs;
