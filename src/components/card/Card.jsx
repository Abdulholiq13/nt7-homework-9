import React, { memo } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactStars from "react-stars";
import { addcart } from "../../redux/slices/cartSlice";

const Card = ({ car }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm mx-auto mb-10">
      <div className="bg-white border border-gray-200 rounded-lg min-w-[300px] overflow-hidden group relative" key={car._id}>
        <Link to={`/products/${car._id}`}>
          <div className="w-full h-60 overflow-hidden group">
            <img
              className="w-full h-full object-contain transition duration-300 group-hover:opacity-80"
              onError={(e) => {
                e.target.src = "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088025.jpg";
              }}
              src={car.thumbnail ?? "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088025.jpg"}
              alt={car.name}
            />
          </div>
        </Link>

        <div className="p-4">
          <p className="text-gray-400 text-sm">{car.model}</p>
          <p className="text-lg font-semibold text-yellow-400">{car.name}</p>

          <div className="flex items-center gap-2 mt-2">
            <ReactStars count={5} onChange={car.seats} size={24} color2={"#ffd700"} />
            <span className="text-gray-300 text-sm">Seats: {car.seats}</span>
          </div>

          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-800 text-xl font-bold">${car.price}</span>
                {car.rent_price && <span className="line-through text-gray-400 text-sm">${car.rent_price}</span>}
              </div>
              <p className="text-gray-400 text-xs">By {car.transmission}</p>
            </div>

            <button
              onClick={() => dispatch(addcart(car))}
              className="bg-yellow-400 text-white p-2 px-3 rounded-lg flex items-center gap-2 transition duration-300 "
            >
              <IoCartOutline />
              <span className="text-sm font-semibold">Add</span>
            </button>
          </div>
        </div>

        <button className="absolute top-2 right-2 bg-yellow-400  text-white p-2 rounded-full hover:opacity-80">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default memo(Card);
