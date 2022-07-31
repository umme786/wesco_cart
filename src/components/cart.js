import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="w-[90%] lg:w-[70%] mx-auto bg-white items-center mt-24 sm:mt-28 mb-20">
      {cart.map((item) => (
        <div className="cart_box sm:flex mb-10 items-center border-b-2 pb-10 justify-between border-[#39d3ee]" key={item.id}>
          <div className="cart_img flex items-center justify-center">
            <img src={item.img} alt="" className="w-[80px]"/>
            <p className="font-bold ml-6">{item.title}</p>
          </div>
          <div className="text-center">
            <button onClick={() => handleChange(item, 1)} className="py-2 px-2 font-bold mr-2">+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)} className="py-2 px-2 font-bold ml-2">-</button>
          </div>
          <div className="flex justify-center mt-6 sm:mt-0">
            <span className="bg-green-300 justify-center py-2 px-10 rounded-md mr-4">{item.price}</span>
            <button onClick={() => handleRemove(item.id)} className="text-white border-0 outline-none cursor-pointer py-2 px-6 rounded-md bg-[#0ca1ae] hover:bg-[#047a85] font-bold tracking-wide">Remove</button>
          </div>
        </div>
      ))}
      
      <div className="total flex justify-between my-10">
        <span className="text-2xl sm:text-3xl font-bold tracking-wide text-[#4dc0d4]">Total Price of your Cart</span>
        <span className="text-2xl sm:text-3xl text-red-500 font-bold "> Rs. - {price}</span>
      </div>
    </article>
  );
};
export default Cart;