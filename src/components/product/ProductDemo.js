const ProductDemo = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <video controls>
                  <source
                    src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
                    type="video/mp4"
                  />
                  <source
                    src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
                    type="video/ogg"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Made for people.
                  <span className=" text-[#00df9a]">
                    Built for productivity.
                  </span>
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                  Our notes app offers a range of features to enhance your
                  productivity and organization. Enjoy rich text editing with
                  options for bold, italics, and bullet points, allowing you to
                  format your notes just the way you like. Plus, seamless cloud
                  sync ensures your notes are available on all your devices.
                </p>

                <button
                  // href="#"
                  className="mt-4 text-xl inline-block rounded bg-emerald-600 px-8 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Book a free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDemo;
