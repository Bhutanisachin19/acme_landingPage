import MarqueComponent from "./MarqueComponent";

const TrustedBy = () => {
  return (
    <div className="hidden md:block">
      <span class="flex items-center">
        <span class="h-px flex-1 bg-white"></span>
        <span class="text-stone-100	font-bold shrink-0 px-6">
          Trusted by startups and Fortune{" "}
          <span className="text-green-300">500</span> companies
        </span>
        <span class="h-px flex-1 bg-white"></span>
      </span>
      <div className="flex justify-center justify-items-center">
        <MarqueComponent />
      </div>
    </div>
  );
};

export default TrustedBy;
