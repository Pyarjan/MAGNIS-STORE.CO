import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline, IoReorderThreeOutline } from "react-icons/io5";
import { CiUser, CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "./popup-model";
import Loginform from "../form/loginform";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(!cart);
  };

  //open popup model
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
            <Loginform />
          </div>
        </Modal>
      ) : null}

      <header className="flex items-center justify-between px-5 bg-background lg:px-24 pt-1">
        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="lg:hidden">
          <IoReorderThreeOutline className="text-3xl text-textcolor" />
        </button>

        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-5">
          <img
            src="/public/logos/logo02.png"
            alt="magnis-logo"
            className="h-12 p-2"
          />
        </NavLink>

        {/* Desktop Navbar */}
        <nav className="navbar lg:flex space-x-8 justify-center  lg:px-24 hidden text-md font-semibold bg-3rd text-textcolor   p-5">
          <NavLink to="/" className={"hover:text-primary"}>
            Home
          </NavLink>
          <NavLink className={"hover:text-primary "}>Shop</NavLink>
          <NavLink to={"/products"} className={"hover:text-primary "}>
            Products
          </NavLink>
          <NavLink
            className={"flex items-center gap-2 hover:text-primary relative"}
          >
            <img
              src="/public/images/HOT-02.png"
              alt="img"
              className="absolute h-5 mt-[-2rem] ml-5 "
            />
            Sales
          </NavLink>
          <NavLink to={"/blog"} className={"hover:text-primary"}>
            Blog
          </NavLink>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-textcolor">
          <IoSearchOutline
            onClick={toggleSearch}
            className="text-2xl hover:text-primary"
          />
          <FaRegUser
            onClick={() => setOpenModal(true)}
            className="text-xl lg:block hidden hover:text-primary"
          />
          <FaRegHeart className="text-xl  lg:block hidden hover:text-primary" />
          <HiOutlineShoppingBag
            onClick={toggleCart}
            className="text-2xl hover:text-primary"
          />
        </div>
      </header>

      {/* {Mobile Nav/Sidebar} */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] lg:hidden bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="">
          <div className="flex items-center justify-between px-5 bg-background">
            <h2 className="text-xl font-bold  py-4  text-textcolor ">Menu</h2>
            <IoCloseSharp
              onClick={toggleMenu}
              className="text-textcolor text-2xl ml-auto"
            />
          </div>
          <div className="space-y-4 w-full flex flex-col p-5">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className="text-textcolor hover:text-primary border-background text-md font-semibold py-3 border-b-1"
            >
              Home
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              className="text-textcolor hover:text-primary border-background text-md font-semibold py-3 border-b-1"
            >
              Shop
            </NavLink>

            <NavLink
              to={"/products"}
              onClick={toggleMenu}
              className="text-textcolor hover:text-primary border-background text-md font-semibold py-3 border-b-1"
            >
              Products
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              className="text-textcolor hover:text-primary flex gap-2 border-background text-md font-semibold py-3 border-b-1"
            >
              <span>Sales </span>
              <img
                src="/public/images/HOT-03.png"
                alt="img"
                className="h-5 absolute mt-0.5 ml-10"
              />
            </NavLink>

            <NavLink
              to="/blog"
              onClick={toggleMenu}
              className="text-textcolor hover:text-primary border-background text-md font-semibold py-3 border-b-1"
            >
              Blog
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              className="text-textcolor hover:text-primary flex gap-3 border-background text-md py-3 border-b-1"
            >
              <CiHeart className="text-2xl" />
              Wishlist
            </NavLink>

            <NavLink
              onClick={() => {setOpenModal(true); toggleMenu()}}
              className="text-textcolor hover:text-primary flex gap-3 border-background text-md py-3 border-b-1"
            >
              <CiUser className="text-2xl" />
              Login/Register
            </NavLink>
          </div>
        </div>
      </div>

      {/* {search bar} */}
      <div
        className={`fixed top-0 right-0 h-full lg:w-[30%] w-[80%] md:w-[40%] sm: bg-white shadow-lg transform ${
          search ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-5 p-5 text-textcolor font-bold text-xl bg-background">
          <span>Search Our Site</span>
          <IoCloseSharp
            onClick={toggleSearch}
            className="text-textcolor text-2xl ml-auto"
          />
        </div>

        <div className="p-5 w-full flex">
          <input
            type="Search"
            placeholder="i'm looking for...."
            className="border border-background bg-transparent  w-full pl-5 pr-12 py-3 rounded-full focus:ring-1 outline-0 focus:ring-background "
          />
          <IoSearchOutline className="text-2xl absolute mt-[0.8rem] ml-[28rem] text-textcolor" />
        </div>

        <div className="px-5 text-textcolor text-lg font-semibold">
          Trending Search
        </div>
      </div>

      {/* Mobile sidebar Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed lg:hidden bg-none  bg-background inset-0 opacity-30 z-0"
        ></div>
      )}

      {/* Search Overlay */}
      {search && (
        <div
          onClick={toggleSearch}
          className="fixed bg-blue-100 inset-0 opacity-30 z-0"
        ></div>
      )}

      {/* {Cart sidebar} */}
      <div
        className={`fixed top-0 right-0 h-full lg:w-[30%] w-[80%] md:w-[40%] sm: bg-white shadow-lg transform ${
          cart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-5 p-5 text-textcolor font-bold text-xl bg-background">
          <span>Shopping Cart (0)</span>
          <IoCloseSharp
            onClick={toggleCart}
            className="text-textcolor text-2xl ml-auto"
          />
        </div>
      </div>

      {/* cart Overlay */}
      {cart && (
        <div
          onClick={toggleCart}
          className="fixed bg-blue-100 inset-0 opacity-30 z-0"
        ></div>
      )}
    </>
  );
};

export default Navbar;
