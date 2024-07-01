const ProductFeature = () => {
  return (
    <>
      <div className="bg-white flex flex-col sm:flex-row w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 h-full">
        <div className="">
          <img
            className=""
            src="https://assets.asana.biz/transform/91811922-184e-4ffa-83ba-5ff166eb15cb/uses-taskmanagement-automation?io=transform:fill,width:960&format=webp"
            alt="info"
          />
        </div>

        <div className="sm:w-2/4 flex flex-col justify-center justify-items-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            The simplest way to keep notes
          </h2>

          <span className="mt-4 text-gray-600 text-lg">
            Our notes app offers a range of features to enhance your
            productivity and organization. Enjoy rich text editing with options
            for bold, italics, and bullet points, allowing you to format your
            notes just the way you like. Plus, seamless cloud sync ensures your
            notes are available on all your devices.
          </span>

          <button
            // href="#"
            className="mt-4 text-xl inline-block rounded bg-emerald-600 px-8 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Try For Free
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFeature;
