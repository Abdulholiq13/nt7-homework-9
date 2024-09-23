import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "../../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.value);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {items.map((el) => {
          return (
            <div className="rounded-[15px] border mb-7 relative" key={el._id}>
              <div className="w-full h-60  rounded-lg">
                <img
                  onError={(e) => {
                    e.target.src = "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088025.jpg";
                  }}
                  src={
                    el.thumbnail ?? "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088025.jpg"
                  }
                  alt={el.name}
                />
              </div>
              <div className="flex flex-col gap-2 p-[5px_0_25px_16px] items-start justify-end">
                <p className="text-start text-[12px] text-[#f8f8f8]">{el.model}</p>
                <p className="text-[16px] font-[700] text-[#000] text-start">{el.name}</p>

                <div className="absolute top-0 right-0">
                  <button className="rounded-[0_15px] px-[10px] text-[16px] text-[#fff] py-[5px] bg-[#3BB77E]">
                    <FaHeart />
                  </button>
                </div>
                <div>
                  <div className="flex">
                    <p className="text-[#B6B6B6] text-[14px]">By</p>
                    <p className="text-[#3BB77E] text-[14px] font-[400]"> {el.transmission}</p>
                  </div>
                  <div className="flex  gap-[20px]">
                    <div className="flex gap-2 mt-2 items-center">
                      <strong className="text-[18px] text-[#3BB77E] font-[700]">${el.price}</strong>
                      <strong className="line-through text-[12px] text-[#B6B6B6] font-[700] ">${el.rent_price}</strong>
                    </div>
                    <button
                      onClick={() => dispatch(addcart(car))}
                      className="border bg-[#87f1bd] py-[2px] px-[10px] text-[#fff] flex items-center rounded-[4px]"
                    >
                      <IoCartOutline className="text-[#3BB77E]" /> <p className="text-[13px] text-[#3BB77E] font-[500]">Add</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
