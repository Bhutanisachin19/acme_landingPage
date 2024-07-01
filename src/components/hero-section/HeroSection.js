import { ReactTyped } from "react-typed";
import { elemetIdConst } from "../../App";
const HeroSection = () => {
  const scrollToView = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="mb-12 overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-2xl font-bold text-white md:text-5xl">
              Introducing{" "}
              <span className="font-bold text-[#00df9a]">
                <ReactTyped strings={["Acme Notes"]} typeSpeed={50} />
              </span>
            </h1>

            <p className="text-white md:mt-4 md:block md:text-2xl">
              The smart, intuitive way to capture and organize your ideas. Sync
              across devices, stay productive, and make note-taking effortless.
              Try Acme Notes today!
            </p>

            <div className="flex justify-around flex-col md:flex-row mt-4 md:mt-8">
              <button className="text-xl	inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Sign Up
              </button>

              <button
                onClick={() => scrollToView(elemetIdConst.ABOUT)}
                className="mt-2 text-xl inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Know More
              </button>
            </div>

            {/* <div className="mt-2 text-xl text-white">
              Sign up to get <span className="font-bold me-1">FREE</span>30 days
              trail
            </div> */}

            <div className="mt-2 text-xl text-white">
              <ReactTyped
                strings={["Sign up to get FREE 30 days trail"]}
                typeSpeed={50}
              />
            </div>
          </div>
        </div>

        <img
          alt="hero-img"
          src="https://simplenote.com/wp-content/uploads/2020/07/img_simplenote_hero.png"
          //   src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  );
};

export default HeroSection;
