import mattie from "../assets/mattie.jpg";

function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-amber-50">
      <img
        src={mattie}
        alt="Mattie's Coffee"
        className="h-28 w-28 animate-pulse rounded-full shadow-xl"
      />

      <h1 className="mt-6 text-4xl font-extrabold text-amber-700">
        Mattie's Coffee
      </h1>

      <p className="mt-3 text-lg text-gray-700">
        Brewing happiness...
      </p>

      <div className="mt-6 h-2 w-48 overflow-hidden rounded-full bg-amber-200">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-amber-700" />
      </div>
    </div>
  );
}

export default Loading;