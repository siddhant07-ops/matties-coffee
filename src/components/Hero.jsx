import latte from "../assets/latte.jpg";

function Hero() {
  return (
    <section id="home" className="px-10 py-10">

      {/* Main Hero Container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">

        {/* Left Side */}
        <div className="flex-1">

          {/* Welcome */}
          <h3 className="text-amber-400 font-bold text-xl mb-4">
            WELCOME TO MATTIE'S COFFEE
          </h3>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Freshly Brewed Coffee
            <br />
            <span className="text-amber-700 underline decoration-amber-700 decoration-4 underline-offset-8">
              Made With Love!
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-base md:text-xl leading-8 mb-8">
            Enjoy handcrafted coffee made from the finest beans.
            <br />
            Every cup is brewed with love
            <br />
            and served fresh every day.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button className="bg-amber-700 text-white w-full max-w-xs px-6 py-3 rounded-3xl shadow-xl hover:scale-105 hover:bg-amber-400 transition duration-300">
              Order Now
            </button>

            <button className="border border-amber-700 text-amber-700 w-full max-w-xs px-6 py-3 rounded-3xl hover:scale-105 hover:bg-amber-700 hover:text-white transition duration-300">
              View Menu
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className=" flex-1 flex items-center hover:scale-105 transition-all duration-500 hover:shadow-amber-700 justify-center">

          <img
            src={latte}
            alt="Hot Latte"
className="w-full max-w-[550px] h-auto rounded-[40px] object-contain shadow-xl hover:shadow-amber-950 hover:scale-105 transition-all duration-500 cursor-pointer"           />
        </div>

      </div>

    </section>
  );
}

export default Hero;