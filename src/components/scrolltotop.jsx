import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollDuration = 200; // Scroll duration in milliseconds (adjust this as needed)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {isVisible && (
        <BsArrowUpSquareFill
          onClick={scrollToTop}
          className="text-primary text-3xl "
        />
      )}
    </div>
  );
}

export default ScrollToTopButton;
