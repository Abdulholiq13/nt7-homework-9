import React, { useState } from "react";

const AddCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    price: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Название" required />
      <input name="model" value={formData.model} onChange={handleChange} placeholder="Модель" required />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Цена" required />
      <input name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="Ссылка на изображение" required />
      <button type="submit">Добавить карточку</button>
    </form>
  );
};

export default AddCard;
