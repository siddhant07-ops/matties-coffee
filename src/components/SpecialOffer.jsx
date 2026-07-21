import offerlatte from "../assets/offerlatte.jpg";

function SpecialOffer({ darkMode }) {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="special-offer"
      className={`px-5 py-16 transition-colors duration-500 sm:px-8 md:px-12 lg:px-20 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-amber-50 text-gray-900"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-10 overflow-hidden rounded-3xl border p-6 shadow-xl transition-colors duration-500 sm:p-8 lg:flex-row lg:p-12 ${
          darkMode
            ? "border-gray-700 bg-gray-900 shadow-black/40"
            : "border-amber-200 bg-orange-100 shadow-amber-900/20"
        }`}
      >
        {/* Offer Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <p
            className={`mb-3 text-sm font-bold uppercase tracking-[0.2em] ${
              darkMode ? "text-amber-400" : "text-amber-700"
            }`}
          >
            Limited Time Offer!
          </p>

          <h2
            className={`mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${
              darkMode ? "text-white" : "text-red-950"
            }`}
          >
            Buy 2 Get 2 Free at ₹469
          </h2>

          <p
            className={`mx-auto mb-7 max-w-xl text-base leading-7 sm:text-lg lg:mx-0 ${
              darkMode ? "text-gray-300" : "text-amber-950"
            }`}
          >
            Our best-selling coffees are now available at the lowest
            price. Grab yours before the offer ends. Don&apos;t miss this
            opportunity!
          </p>

          <button
            type="button"
            onClick={scrollToMenu}
            className="rounded-full bg-red-600 px-7 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-500 hover:shadow-xl active:scale-95"
          >
            Grab Now
          </button>
        </div>

        {/* Offer Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={offerlatte}
            alt="offerlatte"
            className={`h-[260px] w-full rounded-3xl object-cover shadow-xl transition-all duration-500 hover:scale-[1.02] sm:h-[340px] lg:h-[420px] ${
              darkMode
                ? "shadow-black/60"
                : "shadow-amber-950/30"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;