import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards mx-4 p-5 my-12 rounded-md hover:cursor-pointer shadow-xl shadow-gray-500/50 hover:shadow-gray-900/50">
      <div className="image_box">
        <img src={img} alt="" className="mx-auto"/>
      </div>
      <div className="details">
        <p class="font-bold text-xl mt-3 mb-2">{title}</p>
        <p className="text-gray-700 text-sm my-3">{author}</p>
        <p className="text-gray-900 font-bold my-3">Price - {price}Rs</p>
        <button onClick={() => handleClick(item)} className="text-white border-0 font-bold bg-red-500 hover:bg-red-700 outline-none rounded-lg mt-2 mb-4 px-5 py-3">Add to Cart</button>
      </div>
    </div>
  );
};
export default Cards;