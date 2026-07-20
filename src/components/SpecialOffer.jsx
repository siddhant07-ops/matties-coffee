import offerlatte from "../assets/offerlatte.jpg";

function SpecialOffer() {
  return (
    <section className="bg-amber-50 py-20 px-14">
<div className="flex flex-col-reverse md:flex-row  items-center justify-between gap-10 hover:scale-105 hover:shadow-amber-600 shadow-2xl transition-all duration-500 bg-orange-100 rounded-3xl px-8 md:px-12 py-12">
        {/* Left Side */}
<div className="flex-1 text-center md:text-left">
          {/* Small Heading */}
          <h2 className="text-2xl md:text-xl font-extrabold text-amber-700">     
         LIMITED TIME OFFER!!
          </h2>

          {/* Big Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-red-950 leading-tight mt-3">           
             Buy 2 Get 2 Free At ₹469
            <br />
            On First Order
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-xl text-amber-900 mt-5 leading-relaxed">          
              Our best-selling coffees are now at the lowest price.
            <br />
            Grab yours before the offer ends.
            <br />
            Don't miss this opportunity!
          </p>

          {/* Button */}
          <button className="w-fit px-8 py-3 hover:-translate-y-1 mt-4 bg-red-500 rounded-full text-2xl text-white font-bold hover:bg-orange-500 hover:scale-110 transition duration-500 shadow-orange-300 hover:shadow-xl">
            Grab Now
          </button>

            </div>

        {/* Right Side */}
        <img
         src={offerlatte}
         alt="Offer latte"
        className="w-auto h-110  hover:scale-105 transition duration-500 hover:-translate-y-1 hover:shadow-xl shadow-amber-900 object-cover rounded-full"
        />

      </div>
    </section>
  );
}

export default SpecialOffer;