import Carousel from "../components/carousel";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/scrolltotop";
import Topcollection from "../components/topcollections";

const Home = () => {
  const slides = [
    "/public/images/img_01.jpg",
    "/public/images/img_02.jpg",
    "/public/images/img_03.jpg",
  ];

  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap justify-around items-center gap-5 lg:py-5 lg:px-20 bg-gray-50  ">
        <div className="lg:w-[42rem] w-full ">
          <Carousel>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`slide ${index}`}
                className="lg:rounded-2xl"
              />
            ))}
          </Carousel>
        </div>
        <div className="lg:w-[40rem] lg:text-left text-center p-5 ">
          <h1 className="font-bold text-3xl my-5">
            New Arrivals: Style That Speaks to You
          </h1>
          <p className="text-gray-500">
            Shop consciously with our eco-friendly collection, crafted with
            sustainable materials and ethical practices. Look good, feel good,
            and make a positive impact with every purchase.
          </p>

          <div className="flex gap-5 my-5">
            <input
              type="text"
              value={"Shop Now and Enjoy Free Shipping!"}
              className="p-2 w-full border border-gray-300 text-primary bg-gray-100 rounded"
            />
            <button className="p-2 border rounded w-[14rem] bg-primary text-white">
              Get the Look
            </button>
          </div>
          <p className="font-semibold text-accent">Download Our App On!</p>
          <div className="flex gap-5 my-5 justify-center lg:justify-normal">
            <button className=" p-2 rounded text-primary border border-primary">Google Play</button>
            <button className=" p-2 rounded text-primary border border-primary">Apple Store</button>
          </div>
        </div>
      </div>
      <Topcollection />
      <ScrollToTopButton/>
      <Footer />
    </>
  );
};

export default Home;
