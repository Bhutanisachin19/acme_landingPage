import SpecialCard from "./SpecialCard";
import { ReactTyped } from "react-typed";

const WhatMakesUsSpecial = () => {
  return (
    <>
      <section class=" flex justify-center	justify-items-center bg-slate-800 text-white">
        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="max-w-xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              <ReactTyped
                strings={["What makes us special"]}
                typeSpeed={100}
                loop
              />
            </h2>

            <p class="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolores iure fugit totam iste obcaecati. Consequatur ipsa quod
              ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga
              minima.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <SpecialCard />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatMakesUsSpecial;
