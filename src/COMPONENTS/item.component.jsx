import React from "react";
import { TbXboxX } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router";

function ItemComponent({ item, index, lang }) {
  return (
    <Slide direction="up" triggerOnce delay={50 * index} duration={300}>
      <Fade triggerOnce>
        <Link
          to="/product-view"
          onClick={() => {
            localStorage.setItem("selected-item", JSON.stringify(item));
          }}
        >
          <div className="py-1 w-full overflow-hidden relative hover:text-blue-600 text-black bg-white border-gray-100 sm:border-1 xl:h-[355px] rounded-md  h-[370px] justify-center">
            <div className="flex relative">
              <div className="h-56 w-full">
                <img
                  className="h-full w-full object-contain object-center"
                  src={item.hoverImgUrl}
                  alt={"Secondary image of item " + item.name}
                />
              </div>
              <div className="absolute w-full  bg-white h-56 hover:opacity-0 transition-opacity ">
                <img
                  className="w-full h-full object-contain object-center"
                  src={item.imgURL}
                  alt={"Image of item " + item.name}
                />
              </div>
            </div>
            <div className="relative pb-[60px] border-t-1 border-gray-200 w-full px-3 text-left">
              {item.active ? (
                <>
                  <h1 className="text-nowrap py-2 mt-2 w-full overflow-hidden text-ellipsis">
                    {item.name}
                  </h1>
                  {item.discount ? (
                    <div className="flex items-baseline flex-wrap xl:flex-nowrap justify-start gap-2">
                      <span className="text-white self-center px-3 rounded-sm text-[12px] italic font-semibold bg-green-400">
                        PROMO
                      </span>
                      <h1 className="font-bold text-md">
                        $
                        {(item.price - item.discountValue).toLocaleString(lang)}{" "}
                      </h1>
                      <h1 className="italic line-through text-sm">
                        ${item.price.toLocaleString(lang)}
                      </h1>
                    </div>
                  ) : (
                    <h1 className="font-bold text-md">
                      ${item.price.toLocaleString(lang)}
                    </h1>
                  )}
                </>
              ) : (
                <h1 className="text-gray-500 mt-4 flex items-center justify-left gap-1 italic">
                  <TbXboxX size={20} />
                  No disponible.
                </h1>
              )}
            </div>
          </div>
        </Link>
      </Fade>
    </Slide>
  );
}

export default ItemComponent;
