import Testimonial from "./Testimonial";

const TestimonialWrapper = () => {
  return (
    <>
      <section class="bg-slate-300">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <Testimonial />
            </blockquote>

            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <Testimonial />
            </blockquote>

            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <Testimonial />
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialWrapper;
