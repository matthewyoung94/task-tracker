import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <TaskForm onTaskCreated={fetchTasks} />
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskUpdated={fetchTasks} />
        ))
      )}
    </div>
  );
}
