import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {

  return (
    <nav className="w-full h-[60px]">
      <div className="nav_box w-full py-6 px-12 flex items-center justify-between bg-[#faf0f5]">
        <span className="my_shop text-3xl font-bold cursor-pointer text-[#242485]" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart cursor-pointer" onClick={() => setShow(false)}>
          <span className="text-[#242485] text-2xl">
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="px-1 bg-red-500 text-white font-bold relative rounded-sm">{size}</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;