import { FaSearch } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";

import ItemComponent from "../COMPONENTS/item.component.jsx";
import { useState } from "react";

function ProductsPage() {
  const [setCart, cart] = useState([]);

  const lang = "en-US";

  const items = [
    {
      imgURL:
        "https://mateuarg.vtexassets.com/arquivos/ids/607990-800-auto?v=638652961650130000&width=800&height=auto&aspect=true",
      hoverImgUrl:
        "https://mateuarg.vtexassets.com/arquivos/ids/607994-800-auto?v=638652961695970000&width=800&height=auto&aspect=true",
      name: "DS shoe",
      price: 30000000,
      discount: true,
      discountValue: 1500,
      active: true,
      description: "THE SHOES",
    },
    {
      imgURL:
        "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Sneakers-Premier-LowTop-BlackMatte-063022-3.4.jpg?v=1658504828&width=1024",
      hoverImgUrl:
        "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Sneakers-Premier-LowTop-BlackMatte-063022-Flatlay.jpg?v=1658504851&width=1024",
      name: "Zapatilla BLACK",
      price: 300,
      discount: true,
      discountValue: 50.4,
      active: true,
    },
    {
      imgURL:
        "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-47-street-move-mujer-negra-2140170231610c0-1.jpg",
      hoverImgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_925897-MLA76575098715_052024-O.webp",
      name: "BLACK SHOE!!",
      price: 300.43,
      discount: true,
      discountValue: 50,
      active: true,
    },
    {
      imgURL:
        "https://mateuarg.vtexassets.com/arquivos/ids/607990-800-auto?v=638652961650130000&width=800&height=auto&aspect=true",
      hoverImgUrl:
        "https://mateuarg.vtexassets.com/arquivos/ids/607994-800-auto?v=638652961695970000&width=800&height=auto&aspect=true",
      name: "Zapatilla Suprema",
      price: 300,
      discount: false,
      discountValue: 150,
      active: true,
    },
    {
      imgURL:
        "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Sneakers-Premier-LowTop-BlackMatte-063022-3.4.jpg?v=1658504828&width=1024",
      hoverImgUrl:
        "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Sneakers-Premier-LowTop-BlackMatte-063022-Flatlay.jpg?v=1658504851&width=1024",
      name: "Black s1mple",
      price: 300,
      discount: true,
      discountValue: 50.4,
      active: false,
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg",

      hoverImgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_925897-MLA76575098715_052024-O.webp",
      name: "BLACK XXL!",
      price: 300.43,
      discount: true,
      discountValue: 50,
      active: true,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full px-1 mt-9 h-12 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-white  border-1 hover:border-gray-700 border-gray-200 items-baseline px-4 shadow w-full outline-0 text-black"
        />
        <button
          className="py-2 px-6  border-1 border-l-0 hover:border-l-1 hover:border-gray-700 border-gray-200  bg-white shadow rounded-r hover:bg-gray-200 cursor-pointer
         font-bold"
        >
          <FaSearch size={17} color="black" />
        </button>
      </div>
      <div className="fixed text-md gap-1 shadow-xl cursor-pointer bottom-5 right-10 h-15 min-w-15 flex justify-center items-center rounded-full z-99 bg-blue-400 ">
        1 <PiShoppingCartBold size={25}></PiShoppingCartBold>
      </div>
      <main className="mt-4 overflow-hidden w-full sm:p-4 border-gray-200 justify-center gap-1 flex flex-wrap mx-auto">
        <div className="flex flex-rows flex-wrap xl:justify-start justify-center gap-2 sm:px-3 rounded">
          {items.map((i, index) => {
            return (
              <ItemComponent
                item={i}
                key={index}
                index={index}
                lang={lang}
              ></ItemComponent>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
