import { useSnapCarousel } from "react-snap-carousel";

const AdvancedCarousel = () => {
  const {
    scrollRef,
    snapPointIndexes,
    next,
    prev,
    pages,
    goTo
  } = useSnapCarousel();
  return (
    <>
      <ul
        className="flex overflow-x-auto snap-x snap-mandatory"
        ref={scrollRef}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <li
            key={i}
            className="flex-shrink-0"
            style={{
              scrollSnapAlign: snapPointIndexes.has(i) ? "start" : ""
            }}
          >
            <img
              src={`https://picsum.photos/500?${i}`}
              width="250"
              height="250"
              alt={`Item ${i}`}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center space-x mt-2" aria-hidden>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={() => prev()}
        >
          Previous
        </button>
        {pages.map((_, i) => (
          <button
            key={i}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-2"
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AdvancedCarousel;
