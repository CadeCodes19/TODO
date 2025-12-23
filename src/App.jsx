import { useState } from "react";
import ListItems from "./components/ListItems.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Walk the dog", completed: true },
    { id: 3, title: "Read a book", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {};
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-8 max-w-sm">
        <h1>To Do List:</h1>

        <div className="flex gap-4 justify-center items-center">
          <input
            onChange={(e) => setNewTask(e.target.value)}
            className="bg-white text-black p-1 rounded-lg"
            type="text"
          />
          <button
            onClick={() => handleAdd}
            className="bg-white text-black px-4 py-1 rounded-lg"
          >
            Add Task
          </button>
        </div>

        <div className="min-h-[50vh] bg-white text-black w-full p-4 rounded-lg">
          <ul className="flex flex-col gap-4">
            {tasks.map((task) => (
              <ListItems key={task.id} task={task} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default App;
