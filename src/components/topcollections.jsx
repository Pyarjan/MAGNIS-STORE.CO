import { TbMessageDots } from "react-icons/tb";
import { PiSealCheckLight } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";

const Collectioncard = ({ title, image, items }) => {
  return (
    <>
      <div className=" shadow-lg rounded-2xl  relative group ">
        <img
          src={image}
          alt={title}
          className="h-full p-2 w-auto rounded-2xl relative"
        />
        <div className="absolute inset-0 bg-black   rounded-2xl group hover:opacity-20 opacity-10 transition-opacity duration-300"></div>
        <div className="px-4 absolute mt-[-8rem]  w-full space-y-2 ">
          <h2 className="font-bold text-lg text-white">{title}</h2>
          <p className="text-sm text-white">{items} items</p>
          <div className="text-white w-full border text-center border-white hover:bg-primary hover:opacity-80 hover:border-0 rounded p-2 text-sm font-semibold">
            Explore Collection
          </div>
        </div>
      </div>
    </>
  );
};

const Topcollection = () => {
  const collections = [
    {
      id: 1,
      title: "Crop-Tops",
      image: "./images/crop tops.jpg",
      items: 24,
    },
    {
      id: 2,
      title: "T-shirts",
      image: "./images/T-shirts.jpg",
      items: 18,
    },
    {
      id: 3,
      title: "Blazers",
      image: "./images/Blazers.jpg",
      items: 36,
    },
    {
      id: 4,
      title: "Coats",
      image: "./images/coat.jpg",
      items: 22,
    },
    {
      id: 5,
      title: "Sweaters",
      image: "./images/Sweater.jpg",
      items: 30,
    },
    {
      id: 6,
      title: "Hoodies",
      image: "./images/Hoodies.jpg",
      items: 28,
    },
  ];

  return (
    <>
      <div className="lg:px-20 px-2">
        <div>
          <h1 className="font-bold text-4xl p-2 text-textcolor">
            Top Collections
          </h1>
          <div className="flex justify-between flex-wrap content-center items-center text-gray-500 p-2">
            <p>
              Express your style with our standout collection—fashion meets
              sophistication.
            </p>
            <p className="hover:bg-gray-50 text-textcolor rounded-md p-2">
              View All Collections →
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-3 rounded-2xl  gap-5  lg:px-9 mt-9">
          {collections.map((collection) => (
            <div key={collection.id}>
              <Collectioncard
                title={collection.title}
                image={collection.image}
                items={collection.items}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-around p-12 items-center text-textcolor text-center lg:flex-nowrap flex-wrap  space-y-5">
        <div className="flex justify-center items-center flex-col">
          <LiaShippingFastSolid className="text-4xl" />
          <h1 className="text-lg font-semibold text-textcolor">
            Free Shipping
          </h1>
          <p>
            Enjoy free worldwide shipping and returns, with customs and duties
            taxes included.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <PiSealCheckLight className="text-4xl" />
          <h1 className="text-lg font-semibold text-textcolor">Free Returns</h1>
          <p>
            Free returns within 15 days, please make sure the items are in
            undamaged condition.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <TbMessageDots className="text-4xl" />
          <h1 className="text-lg font-semibold text-textcolor">
            Support Online
          </h1>
          <p>
            We support customers 24/7, send questions we will solve for you
            immediately.
          </p>
        </div>
      </div>
    </>
  );
};

export default Topcollection;
