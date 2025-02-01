import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import AddProductForm from "../form/addproductform";
import Modal from "../components/popup-model";
import ScrollToTopButton from "../components/scrolltotop";

const Products = () => {
  const [data, setData] = useState([]);
  const [validData, setValidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");

      if (response.ok) {
        const res = await response.json();
        setData(res);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const checkImages = async () => {
      const validItems = await Promise.all(
        data.map(async (item) => {
          if (item.images && item.images.length > 0) {
            try {
              const img = new Image();
              img.src = item.images[0];
              await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
              });
              return item;
            } catch {
              return null;
            }
          }
          return null;
        })
      );
      setValidData(validItems.filter((item) => item !== null));
    };
    checkImages();
  }, [data]);

  const deleteItem = (id) => {
    setValidData(validData.filter((item) => item.id !== id));
  };

  const addNewProduct = (product) => {
    setValidData((prev) => [...prev, product]);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal ? (
        <Modal>
          <div className="bg-white w-[30rem] rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setOpenModal(false)}
                className="text-primary text-xl cursor-pointer "
              />
            </div>
            <AddProductForm onAddProduct={addNewProduct} />
          </div>
        </Modal>
      ) : null}

      <h1 className=" bg-[url('/public/images/artwork.png')]  text-accent  px-[6rem] bg-no-repeat bg-cover">
        <div className="flex flex-col items-center justify-center h-[25rem]">
          <div className=" flex justify-center items-center">
            <NavLink to={"/"} className={"hover:text-primary text-gray-300"}>
              Home
            </NavLink>
            &nbsp;
            <span className="text-accent"> • </span> &nbsp;
            <NavLink className={"cursor-auto"}> Products</NavLink>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className=" rounded text-white font-bold border bg-accent opacity-50 p-2 mt-10 active:text-primary"
          >
            Add Product
          </button>
        </div>
      </h1>

      <div className="lg:px-18">
        <div className="flex  justify-center underline gap-8 px-6 mt-8 items-center">
          <p className="font-bold text-2xl">Product List</p>
        </div>

        <div className="grid  m-4 ">
          {validData.map((item) => (
            <div
              key={item.id}
              className="border-1 rounded border-gray-300 gap-5 m-2  flex p-2"
            >
              <img
                src={item.image || item.images[0]}
                alt={item.title}
                className="relative h-[10rem] rounded object-cover"
              />

              <RxCrossCircled
                onClick={() => deleteItem(item.id)}
                className="absolute ml-[0.3rem] mt-[0.3rem] text-white"
              />
              <div className=" text-textcolor w-full">
                <h1 className="text-2xl line-clamp-1 font-bold">
                  {item.title}
                </h1>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between w-full mt-9">
                  <p className="text-xl text-primary font-bold">
                    ${item.price}
                  </p>
                  <button className="  p-2 text-accent hover:bg-primary hover:border-0 hover:text-white border border-accent rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton/>
      <Footer />
    </>
  );
};

export default Products;
