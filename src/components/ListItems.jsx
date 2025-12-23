import React from "react";
import upIcon from "../assets/up.svg";
import downIcon from "../assets/down.svg";

const ListItems = ({ task }) => {
  return (
    <li className="flex justify-around items-center bg-gray-100 p-2 rounded-lg">
      <input className="cursor-pointer" type="checkbox" />
      {task.title}
      <button className="bg-red-500 rounded-lg py-1 px-3 text-white cursor-pointer">
        Delete
      </button>
      <img className="size-6 cursor-pointer" src={upIcon} alt="Up" />
      <img className="size-6 cursor-pointer" src={downIcon} alt="Down" />
    </li>
  );
};

export default ListItems;
