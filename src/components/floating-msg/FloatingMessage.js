import { useState } from "react";
import { elemetIdConst } from "../../App";

const FloatingMessage = () => {
  const [hideMsg, setHidemsg] = useState(false);

  const scrollToView = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {hideMsg ? (
        <></>
      ) : (
        <aside className="cursor-pointer fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white">
          <div
            className="text-sm font-medium hover:opacity-75"
            onClick={() => scrollToView(elemetIdConst.ABOUT)}
          >
            Hey! Sign up to get free trail for our new product{" "}
            <span className="text-[#00df9a]">ACME NOTE</span> 👋
          </div>

          <button
            onClick={() => setHidemsg(!hideMsg)}
            className="rounded bg-white/20 p-1 hover:bg-white/10"
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </aside>
      )}
    </>
  );
};

export default FloatingMessage;
