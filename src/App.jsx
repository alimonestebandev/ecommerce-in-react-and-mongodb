import "./App.css";

import Navbar from "./COMPONENTS/navbar.jsx";
import ProductsPage from "./PAGES/products.page.jsx";
import ItemPage from "./PAGES/item.page.jsx";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter className="w-full">
      <Navbar></Navbar>
      <Routes>
        <Route element={<ProductsPage />} path="" />
        <Route element={<ItemPage />} path="/vp" />
      </Routes>
      <footer className="h-40 w-full text-sm border-t-1 border-gray-200 mt-15 text-center items-center grid text-gray-400 italic"></footer>
    </BrowserRouter>
  );
}

export default App;
