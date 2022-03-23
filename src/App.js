import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchtasks = async () => {
      const res = await fetch("hhtp://localhost:5000/tasks");
      const data = await res.json();

      console.log(data);
    };
  });

  //Add task
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Delete", id);
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("Toggle", id);
  };

  //Toggle Add Task Form
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header toggleAddTask={toggleAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show."
      )}
    </div>
  );
}

export default App;
