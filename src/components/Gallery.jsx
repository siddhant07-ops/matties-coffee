import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Gallery({ darkMode }) {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section
      id="shop"
      className={`px-6 py-20 transition-colors duration-500 md:px-12 lg:px-20 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p
            className={`mb-3 font-semibold uppercase tracking-widest ${
              darkMode ? "text-amber-400" : "text-amber-700"
            }`}
          >
            Coffee moments
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Gallery
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A glimpse of the warmth, flavour and atmosphere inside
            Mattie's Coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl shadow-lg ${
                darkMode
                  ? "shadow-black/40"
                  : "shadow-amber-900/20"
              }`}
            >
              <img
                src={image}
                alt={`Mattie's Coffee gallery ${index + 1}`}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;