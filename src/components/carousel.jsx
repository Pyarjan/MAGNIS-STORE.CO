import { useEffect, useState, useRef } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Carousel = ({ children: slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = slides.length;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slidesCount - 1 ? 0 : prevIndex + 1
        ),
      interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, slidesCount, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesCount - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesCount - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden lg:rounded-2xl">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-primary p-2"
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-primary p-2"
      >
        <MdOutlineArrowForwardIos />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center  p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-1 rounded-full mx-1 ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
