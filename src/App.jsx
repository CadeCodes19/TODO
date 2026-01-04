import { useState } from "react";
import ListItems from "./components/ListItems.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), title: "Buy groceries", completed: false },
    { id: crypto.randomUUID(), title: "Walk the dog", completed: true },
    { id: crypto.randomUUID(), title: "Read a book", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      setTasks((prev) => [
        ...prev,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ]);
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const moveUp = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index <= 0) return prev;

      const moved = [...prev];
      [moved[index], moved[index - 1]] = [moved[index - 1], moved[index]];

      return moved;
    });
  };
  const moveDown = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index >= prev.length - 1) return prev;

      const moved = [...prev];
      [moved[index], moved[index + 1]] = [moved[index + 1], moved[index]];

      return moved;
    });
  };
  return (
    <section className="bg-[url('/public/notebook-for-todo.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-8 max-w-sm">
        <h1>To Do List:</h1>

        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => setNewTask(e.target.value)}
            className="bg-white text-black p-1 rounded-lg"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-white text-black px-4 py-1 rounded-lg"
          >
            Add Task
          </button>
        </div>

        <div className="min-h-[50vh] bg-linear-to-b from-white to-gray-200 text-black w-full p-4 rounded-lg">
          <ul className="flex flex-col gap-4">
            {tasks.map((task) => (
              <ListItems
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onMoveUp={moveUp}
                onMoveDown={moveDown}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default App;
