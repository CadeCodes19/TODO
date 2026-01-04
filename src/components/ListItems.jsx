import upIcon from "../assets/up.svg";
import downIcon from "../assets/down.svg";

const ListItems = ({ task, onDelete, onMoveUp, onMoveDown }) => {
  return (
    <li className="flex justify-around items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <input className="cursor-pointer" type="checkbox" />
      {task.title}
      <button
        className="bg-red-500 rounded-lg py-1 px-3 text-white cursor-pointer"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
      <img
        className="size-6 cursor-pointer"
        src={upIcon}
        alt="Up"
        onClick={() => onMoveUp(task.id)}
      />
      <img
        className="size-6 cursor-pointer"
        src={downIcon}
        alt="Down"
        onClick={() => onMoveDown(task.id)}
      />
    </li>
  );
};

export default ListItems;
