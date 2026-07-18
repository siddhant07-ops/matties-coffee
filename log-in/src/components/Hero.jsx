import latte from "../assets/latte.jpg";

function Hero() {
  return (
    <section className="px-10 py-16">

      {/* Main Hero Container */}
      <div className="flex items-center justify-between gap-16">

        {/* Left Side */}
        <div className="flex-1">

          {/* Welcome */}
          <h3 className="text-amber-400 font-bold text-xl mb-4">
            WELCOME TO MATTIE'S COFFEE
          </h3>

          {/* Heading */}
          <h1 className="text-5xl font-bold mb-6">
            Freshly Brewed Coffee
            <br />
            <span className="text-amber-700 underline decoration-amber-700 decoration-4 underline-offset-8">
              Made With Love!
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-lg leading-8 mb-8">
            Enjoy handcrafted coffee made from the finest beans.
            <br />
            Every cup is brewed with love
            <br />
            and served fresh every day.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="bg-amber-700 text-white px-6 py-3 rounded-3xl shadow-xl hover:scale-120 hover:bg-amber-400 transition duration-300">
              Order Now
            </button>

            <button className="border border-amber-700 text-amber-700 px-6 py-3 rounded-3xl hover:scale-120 hover:bg-amber-700 hover:text-white transition duration-300">
              View Menu
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className=" felx-1 flex px-30 items-center justify-center">

          <img
            src={latte}
            alt="Hot Latte"
            className="w-[500px] rounded-[50px] shadow-xl hover:scale-110 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;