import React, { memo } from "react";
import Card from "../card/Card";
import { useCategoresQuery } from "../../redux/api/carsApi";
import { useState } from "react";

const Products = ({ data }) => {
  const { data: categoryData } = useCategoresQuery();
  const [cars, setCars] = useState(data);

  const handleChange = (e) => {
    let value = e.target.value;

    setCars(data.filter((el, index) => el.category == value));
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <select className="mt-4 mb-4 p-2" onChange={(e) => handleChange(e)} name="" id="">
        {categoryData?.payload.map((el) => (
          <option key={el._id} value={el._id}>
            {el.name}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cars?.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
