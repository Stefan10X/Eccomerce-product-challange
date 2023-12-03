/* eslint-disable react/no-unescaped-entities */
import Navbar from "./components/Navbar";
import productImg1 from "./images/image-product-1.jpg";
import productImg2 from "./images/image-product-2.jpg";
import productImg3 from "./images/image-product-3.jpg";
import productImg4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import iconDelete from "./images/icon-delete.svg";
// import menu from "./images/icon-menu.svg";

import { useState, useEffect } from "react";

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [modal, setModal] = useState(false);
  const [gallery, setGallery] = useState(productImg1);
  const [number, setNumber] = useState(0);

  const images = [productImg1, productImg2, productImg3, productImg4];

  useEffect(() => {
    setGallery(images[number]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar cart={cart} setCart={setCart} quantity={quantity} />

      <div className="relative">
        <div className={cart ? "" : "hidden"}>
          <div className="flex flex-col items-center absolute top-[-15px] right-[-50px] bg-white w-80 h-48 rounded-lg shadow-2xl">
            <div className="font-bold border-b py-3 px-8 w-full">Cart</div>
            <div
              className={
                empty && quantity == 0
                  ? "flex items-center h-full text-gray-500 font-bold"
                  : "hidden"
              }
            >
              Your cart is empty
            </div>
            <div className={!empty && quantity > 0 ? "" : "hidden"}>
              <div className="flex items-center gap-4 py-4">
                <img className="w-12 rounded-md" src={thumbnail1}></img>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">
                    Fall Limited Edition Sneakers
                  </p>
                  <p className="text-sm text-gray-500">
                    $125.00 x {quantity}{" "}
                    <span className="text-black font-bold">
                      ${125 * quantity}.00
                    </span>
                  </p>
                </div>
                <img
                  onClick={() => {
                    setEmpty(true);
                    setQuantity(0);
                  }}
                  className="h-4 cursor-pointer"
                  src={iconDelete}
                ></img>
              </div>
              <button className="w-64 font-bold bg-orange-400 hover:bg-orange-300 rounded-lg text-white px-10 py-3 ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="page mx-auto grid grid-cols-2 mt-24">
        <div className="flex flex-col gap-8 justify-self-center">
          <img className="w-[400px] rounded-xl" src={productImg1}></img>

          <div className="w-[400px] flex justify-between">
            <img
              onClick={() => {
                setModal(true);
                setGallery(productImg1);
              }}
              className="h-20 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail1}
              alt="gallery1"
            />
            <img
              onClick={() => {
                setModal(true);
                setGallery(productImg2);
              }}
              className="h-20 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail2}
              alt="gallery2"
            />
            <img
              onClick={() => {
                setModal(true);
                setGallery(productImg3);
              }}
              className="h-20 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail3}
              alt="gallery3"
            />
            <img
              onClick={() => {
                setModal(true);
                setGallery(productImg4);
              }}
              className="h-20 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail4}
              alt="gallery4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-16 w-[400px]">
          <h2 className="uppercase font-bold text-sm text-orange-400">
            Sneaker Company
          </h2>
          <h1 className="font-bold text-4xl leading-none">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-gray-500 mt-2">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <h2 className="font-bold text-xl">$125.00</h2>
              <div className="text-sm  text-orange-400 font-bold bg-orange-100 rounded-md px-2 py-[1px]">
                50%
              </div>
            </div>

            <h3 className="text-sm text-gray-300 font-bold text-decoration: line-through ">
              $250.00
            </h3>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-8 bg-gray-100 rounded-lg py-3 px-4">
              <img
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  }
                  if (quantity == 1) {
                    setEmpty(true);
                  }
                }}
                className="h-[4px] cursor-pointer"
                src={minus}
                alt="minus"
              />
              <p className="text-sm font-bold">{quantity}</p>
              <img
                onClick={() => {
                  setQuantity(quantity + 1);
                  setEmpty(false);
                }}
                className="h-[12px] cursor-pointer"
                src={plus}
                alt="plus"
              />
            </div>
            <button className="bg-orange-400 hover:bg-orange-300 rounded-lg text-white flex gap-1 px-16 py-3 ">
              <svg
                className="stroke-white fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 32 28"
              >
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
              </svg>
              <p className="text-sm font-bold ">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          modal
            ? "fixed inset-0 flex items-center justify-center z-50"
            : "hidden"
        }
      >
        <div className="absolute inset-0 bg-gray-950 opacity-80"></div>
        <div className="flex flex-col items-center z-10">
          <svg
            onClick={() => setModal(false)}
            className="relative right-14 self-end fill-white mb-4 cursor-pointer hover:fill-orange-400"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
          <div className="flex items-center ">
            <div
              onClick={() => {
                if (number > 0) {
                  setNumber(number - 1);
                }
              }}
              className="relative left-8 bottom-8 flex items-center justify-center cursor-pointer w-16 h-16 bg-white rounded-full"
            >
              <svg
                className="stroke-gray-600 hover:stroke-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-14 -1 44 20"
              >
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <img className="w-[580px] rounded-xl mb-10" src={gallery}></img>
            <div
              onClick={() => {
                if (number < 3) {
                  setNumber(number + 1);
                }
              }}
              className="relative right-8 bottom-8 flex items-center justify-center cursor-pointer w-16 h-16 bg-white rounded-full"
            >
              <svg
                className="stroke-gray-600 hover:stroke-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-16 -1 44 20"
              >
                <path
                  d="m2 1 8 8-8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="w-[400px] flex justify-center gap-8">
            <img
              onClick={() => setGallery(productImg1)}
              className="h-24 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail1}
              alt="gallery1"
            />

            <img
              onClick={() => setGallery(productImg2)}
              className="h-24 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail2}
              alt="gallery2"
            />
            <img
              onClick={() => setGallery(productImg3)}
              className="h-24 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail3}
              alt="gallery3"
            />
            <img
              onClick={() => setGallery(productImg4)}
              className="h-24 rounded-xl cursor-pointer hover:border-2 border-orange-400 hover:opacity-60"
              src={thumbnail4}
              alt="gallery4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
