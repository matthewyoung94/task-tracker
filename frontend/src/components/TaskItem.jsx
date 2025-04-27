import { updateTaskStatus, deleteTask } from "../services/taskService";

export default function TaskItem({ task, onTaskUpdated }) {
  const handleStatusChange = async (e) => {
    await updateTaskStatus(task.id, e.target.value);
    onTaskUpdated();
  };

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await deleteTask(task.id);
      onTaskUpdated();
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleString()}</p>
      </div>
      <div className="flex items-center gap-2">
        <select value={task.status} onChange={handleStatusChange} className="border p-1 rounded">
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleDelete} className="text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
}

