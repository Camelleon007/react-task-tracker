import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDeleteTask, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""} `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 id={task.id}>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDeleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
