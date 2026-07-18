import offerlatte from "../assets/offerlatte.jpg";

function SpecialOffer() {
  return (
    <section className="bg-amber-50 px-10 py-20">
      <div className="flex justify-between items-center gap-16 bg-amber-200 rounded-3xl shadow-lg p-10 hover:scale-100 hover:-translate-y-px hover:shadow-amber-700 transition-all duration-300">

        {/* Left Side */}
        <div className="flex flex-col gap-5">

          {/* Small Heading */}
          <h2 className="text-3xl font-bold text-amber-700">
            LIMITED TIME OFFER!!
          </h2>

          {/* Big Heading */}
          <h1 className="text-5xl font-extrabold text-red-950">
            Buy 2 Get 2 Free At ₹469
            <br />
            On First Order
          </h1>

          {/* Paragraph */}
          <p className="text-xl text-amber-900">
            Our best-selling coffees are now at the lowest price.
            <br />
            Grab yours before the offer ends.
            <br />
            Don't miss this opportunity!
          </p>

          {/* Button */}
          <button className="w-fit px-8 py-3 hover:-translate-y-1  bg-red-500 rounded-full text-2xl text-white font-bold hover:bg-orange-500 hover:scale-110 transition duration-500 shadow-orange-300 hover:shadow-xl">
            Grab Now
          </button>

            </div>

        {/* Right Side */}
        <img
         src={offerlatte}
         alt="Offer latte"
        className="w-120 h-100 hover:scale-105 transition-all duration-500  shadow-orange-300 object-cover rounded-full"
        />

      </div>
    </section>
  );
}

export default SpecialOffer;