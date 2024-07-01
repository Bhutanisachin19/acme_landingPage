const ShareAndColab = () => {
  return (
    <section>
      <div className="flex flex-col  justify-center justify-items-center w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 h-full">
        <div className="flex flex-col justify-center justify-items-center">
          <h1 className="flex justify-center justify-items-center text-4xl text-white font-bold sm:text-3xl">
            Share and collaborate
          </h1>

          <span className="flex justify-center justify-items-center mt-4 text-white text-lg">
            Safely and securely share your notes with friends and co-workers.
            Share notes and collaborate securely with the people you trust—and
            only them.
          </span>

          <div className="flex justify-center justify-items-center">
            <button
              // href="#"
              className="mt-4 text-xl inline-block rounded bg-emerald-600 px-8 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Try For Free
            </button>
          </div>
        </div>

        <div className="flex justify-center justify-items-center">
          <img
            className=""
            src="https://www.zohowebstatic.com/sites/zweb/images/notebook/notebook-share-collaborate.webp"
            alt="info"
          />
        </div>
      </div>
    </section>
  );
};

export default ShareAndColab;
