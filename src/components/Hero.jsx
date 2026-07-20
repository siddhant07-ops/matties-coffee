import latte from "../assets/latte.jpg";

function Hero({ darkMode }) {
  return (
    <section id="home" className="px-10 py-10">

      {/* Main Hero Container */}
<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
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
           <p
               className={`text-base md:text-xl leading-8 mb-8 transition-colors duration-500 ${
    darkMode ? "text-white" : "text-gray-700"
              }`}
            >
               Enjoy handcrafted coffee made from the finest beans.
                <br />
               Every cup is brewed with love
                <br />
                and served fresh every day.
           </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
<button
  type="button"
  onClick={() =>
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-amber-700 text-white w-52 py-3 rounded-full shadow-lg hover:bg-amber-800 hover:scale-105 active:scale-95 transition-all duration-300"
>
  Order Now
</button>

<button
  type="button"
  onClick={() =>
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="border-2 border-amber-700 text-amber-700 w-52 py-3 rounded-full hover:bg-amber-700 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
>
  View Menu
</button>
</div>

        </div>

        {/* Right Side */}
<div className="w-full flex justify-center items-center mb-8 md:mb-0 md:flex-1">
<img
  src={latte}
  alt="Hot Latte"
  className="
    w-[85%]
    max-w-[320px]
    sm:max-w-[360px]
    md:max-w-[450px]
    lg:max-w-[500px]
    h-auto
    rounded-[40px]
    object-cover
    shadow-xl
    hover:shadow-2xl
    hover:shadow-amber-900/40
    hover:scale-105
    transition-all
    duration-500
    cursor-pointer
  "
/>
</div>

      </div>

    </section>
  );
}

export default Hero;