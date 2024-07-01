import { ReactTyped } from "react-typed";

const AboutProduct = () => {
  return (
    <>
      <section>
        <div className="p-12 flex justify-center mt-4">
          <h1 className="text-2xl font-bold text-white md:text-5xl">
            Capture what’s on your mind with{" "}
            <span className="font-bold text-[#00df9a]">
              <ReactTyped strings={["Acme Notes"]} typeSpeed={90} loop />
            </span>
          </h1>
        </div>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold sm:text-3xl text-[#00df9a]">
                    Acme Notes
                  </h2>
                  <p class="mt-4 text-gray-500">
                    <ReactTyped
                      strings={[
                        " The smart, intuitive way to capture and organize your ideas. Sync across devices, stay productive, and make note-taking effortless. Try Acme Notes today! ",
                      ]}
                      typeSpeed={50}
                      loop
                    />
                  </p>
                </header>

                <a
                  href="#"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Start Free Trail
                </a>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://evernote.com/_next/image?url=%2Fimages%2Faccordions%2Fcalendar-right-note-right-now.webp&w=1080&q=75"
                      alt="note-app"
                      class="aspect-square w-full rounded object-cover"
                    />
                  </a>
                </li>

                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://evernote.com/_next/image?url=%2Fimages%2Fsplit%2Feasy-search.webp&w=640&q=75"
                      alt="note-app-2"
                      class="aspect-square w-full rounded object-cover"
                    />

                    {/* <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProduct;
