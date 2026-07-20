import { FaCoffee, FaMugHot, FaTruck, FaHeart } from "react-icons/fa";
function WhyChooseUs() {
    return(
<section className="px-6 md:px-12 py-16 bg-amber-50">

    {/*Small Heading*/}
    <h1 className="text-center text-2xl md:text-2xl font-serif text-amber-700">
        WHY CHOOSE US?
    </h1>

    {/*Big Heading */}
    <h1 className="text-center text-3xl md:text-5xl font-extrabold mt-3 mb-12">
    Why People love Mattie's Coffee
    </h1>

    {/*Cards Container*/}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <FaCoffee className="text-5xl md:text-6xl text-amber-700 mx-auto mb-5" />
        <div className="text-2xl font-bold mb-3">
            Premium Coffee Beans
        </div>

        <p className="text-amber-700 leading-relaxed">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>

        </div>

        {/*Card-2*/}
        {/*Cards Container*/}

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <FaMugHot className="text-5xl md:text-6xl text-amber-700 mx-auto mb-5" />

        <div className="text-2xl font-bold mb-3">
            Expert Baristas
        </div>

        <p className="text-amber-700  leading-relaxed">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>

        </div>

        {/*Card-3*/}
        {/*Cards Container*/}

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <FaTruck className="text-5xl md:text-6xl text-amber-700 mx-auto mb-5"/>

        <div className="text-2xl font-bold mb-3">
            Fast Delivery
        </div>

        <p className="text-amber-700  leading-relaxed">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>

        </div>

        {/*Card-4*/}

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <FaHeart className="text-5xl md:text-6xl mb-5 text-amber-700 mx-auto mb-5a" />

        <div className="text-2xl font-bold mb-3">
           Made With Love
        </div>

        <p className="text-amber-700 leading-relaxed">
            We carefully select the finest Arabica beans to ensure every cup delivers rich flavor, fresh aroma, and exceptional quality.
        </p>
        </div>


     </div>
  </section>
    );
}

export default WhyChooseUs;
