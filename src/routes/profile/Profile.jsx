import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold">Admin Panel</h2>
      <ul className="mt-4">
        <li>
          <Link to="/profile/add" className="block p-2 hover:bg-gray-700">
            Добавить карточку
          </Link>
        </li>
        <li>
          <Link to="/profile/edit" className="block p-2 hover:bg-gray-700">
            Редактировать карточку
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
