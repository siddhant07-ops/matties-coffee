function Loading() {
  return (
    <div className="fixed inset-0 bg-amber-50 flex flex-col justify-center items-center z-50">

      {/* Coffee Icon */}
      <div className="text-7xl animate-bounce">
        ☕
      </div>

      {/* Logo */}
      <h1 className="text-5xl font-extrabold text-amber-700 mt-6">
        Mattie's Coffee
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 mt-4">
        Brewing Happiness...
      </p>

    </div>
  );
}

export default Loading;