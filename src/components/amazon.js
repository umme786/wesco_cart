import React, { useState } from "react";
import list from "../data";
import Cards from "./card";

const Amazon = ({ handleClick }) => {
  return (
    <section className="w-[90%] xl:w-[80%] mx-auto mt-4 sm:mt-10 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};
export default Amazon;
