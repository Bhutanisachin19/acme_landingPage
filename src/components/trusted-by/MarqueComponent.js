const MarqueComponent = () => {
  const marqueDataArr = [
    "https://s3no.cashify.in/estore/dc841f6d633d49059eaf532610365370.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/21b181db0bd44f539f6fb12d7734d2ae.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/e148f87dee934d308576090c81bc807e.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/66ae540902d94f02997f11389c1cf63e.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/a2e34a6d8a9e4b679db292da08fb1848.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/a1947f645ab3466c9b315b70892968ca.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/21b181db0bd44f539f6fb12d7734d2ae.webp?p=default&s=lg",
  ];

  return (
    <div class=" w-3/4 relative flex overflow-x-hidden">
      <div class="flex py-12 animate-marquee whitespace-nowrap">
        {marqueDataArr.map((data) => (
          <span class="text-4xl mx-4">
            <img src={data} alt="brand-img" />
          </span>
        ))}
        {/* <span class="text-4xl mx-4">Marquee Item 1</span>
        <span class="text-4xl mx-4">Marquee Item 2</span>
        <span class="text-4xl mx-4">Marquee Item 3</span>
        <span class="text-4xl mx-4">Marquee Item 4</span>
        <span class="text-4xl mx-4">Marquee Item 5</span> */}
      </div>

      <div class="flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {marqueDataArr.map((data) => (
          <span class="text-4xl mx-4">
            <img src={data} alt="brand-img" />
          </span>
        ))}
        {/* <span class="text-4xl mx-4">Marquee Item 1</span>
        <span class="text-4xl mx-4">Marquee Item 2</span>
        <span class="text-4xl mx-4">Marquee Item 3</span>
        <span class="text-4xl mx-4">Marquee Item 4</span>
        <span class="text-4xl mx-4">Marquee Item 5</span> */}
      </div>
    </div>
  );
};

export default MarqueComponent;
