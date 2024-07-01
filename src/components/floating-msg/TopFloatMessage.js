import { useEffect, useState } from "react";
import { elemetIdConst } from "../../App";

const TopFloatMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 3000);
  }, []);

  const scrollToView = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {showMessage ? (
        <div class="z-50 sticky top-0 bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium sm:text-left">
            Love Us ?
            <br class="sm:hidden" />
            <span className="ms-1">
              Check out this new product{" "}
              <span classNameName="text-[#00df9a]">ACME NOTE</span>!
            </span>
          </p>
          <button
            class="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
            onClick={() => scrollToView(elemetIdConst.ABOUT)}
          >
            Learn More
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TopFloatMessage;
