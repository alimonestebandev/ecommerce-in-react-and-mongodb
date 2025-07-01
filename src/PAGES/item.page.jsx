import React, { useEffect, useState } from "react";
import Navbar from "../COMPONENTS/navbar";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
function ItemPage() {
  const [item, setItem] = useState({});

  const [expandSize, setExpandSize] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);

  const [valuesSize, setValuesSize] = useState([
    38,
    39,
    40,
    41,
    42,
    43,
    40,
    41,
    42,
    43,
    40,
    41,
    42,
    43,
    40,
    41,
    42,
    43,
  ]);

  useEffect(() => {
    setSelectedSize(valuesSize[0]);
    setItem(JSON.parse(localStorage.getItem("selected-item")));
    scrollTo(window, 0);
  }, []);
  const images = [
    {
      original: item.imgURL,
      thumbnail: item.imgURL,
    },
    {
      original: item.hoverImgUrl,
      thumbnail: item.hoverImgUrl,
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <main className="w-full bg-white p-4 pb-30 mt-9">
        <section className="w-full max-w-[1280px] mx-auto">
          <ReactImageGallery
            infinite={false}
            showPlayButton={false}
            showBullets
            items={images}
          ></ReactImageGallery>
        </section>
        <section className="sm:flex gap-1 flex-wrap flex-row-reverse sm:flex-row mt-10 justify-center">
          <section className="overflow-hidden text-black text-left p-3 sm:w-[55%]">
            <Link
              to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollTo(window, 0);
                }, 50)
              }
              className="text-black max-w-[200px] flex items-center gap-2 hover:text-blue-500 cursor-pointer text-left mb-3 italic"
            >
              <GoArrowLeft></GoArrowLeft> Go back
            </Link>
            <h1 className=" text-2xl">{item?.name}</h1>
            <p className="mt-7 break-all leading-6 tracking-wide pr-20">
              {item?.description ? item.description : "No description yet."}
            </p>
          </section>
          <section className="bg-gray-100 relative text-black p-6 overflow-hidden sm:w-[40%]">
            <button
              onClick={() => setExpandSize(!expandSize)}
              className="w-full hover:bg-slate-200  text-left px-6 flex items-center relative bg-white text-gray-600 py-3 rounded"
            >
              Size: {selectedSize}
              <span className="text-gray-600  border-gray-200 h-full flex items-center absolute right-5 border-l-[1px] pl-3">
                <IoIosArrowForward
                  className={expandSize ? "rotate-180" : "rotate-90"}
                />
              </span>
            </button>
            {expandSize && (
              <div className="flex absolute left-0 p-3 rounded bg-gray-100 pb-7 my-4 flex-wrap gap-2">
                {valuesSize.map((i) => {
                  return (
                    <button
                      onClick={() => {
                        setSelectedSize(i);
                        setExpandSize(false);
                      }}
                      className=" border-gray-400 hover:bg-slate-200 text-left px-4 flex items-center relative bg-white text-gray-600 py-2 rounded"
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            )}
            <h1 className="text-2xl italic mt-20">${item?.price}</h1>
            <div className="mt-7 pb-3 left-0 w-full bottom-0 ">
              <button className="px-12 mb-3 py-3 font-semibold w-full bg-blue-500 shadow text-white rounded">
                BUY NOW
              </button>
              <button className="px-12 py-2 w-full text-blue-400 font-semibold  bg-blue-200 rounded">
                ADD TO CART
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default ItemPage;
