import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../../redux/api/searchApi";

const SingleProducts = () => {
  const { id } = useParams();
  const { data: car } = useGetSingleCategoryQuery(id);

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 mb-10">
        <div className="border rounded-[20px] overflow-hidden">
          <img src={car?.payload.thumbnail} alt={car?.payload.model} className="w-full" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[30px] font-bold">{car?.payload.model}</h1>
          <p className="text-[16px] text-gray-600">{car?.payload.seats} seats</p>
          <p className="text-[16px] text-gray-600">{car?.payload.description}</p>

          <div className="flex gap-2 items-center">
            <p className="text-[24px] font-bold text-black">${car?.payload.price}</p>
            <p className="text-[18px] text-gray-500 line-through">${car?.payload.rent_price}</p>
          </div>

          <p className="text-[15px] text-gray-600">Select Colors</p>
          <div className="flex gap-2">
            <button className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex items-center justify-center text-white">
              <FaCheck />
            </button>
            <button className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex items-center justify-center text-white">
              <FaCheck />
            </button>
            <button className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex items-center justify-center text-white">
              <FaCheck />
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
              <button onClick={decrement} className="text-2xl">
                -
              </button>
              <p className="mx-4 text-xl">{count}</p>
              <button onClick={increment} className="text-2xl">
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
