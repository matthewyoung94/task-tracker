import { useState } from "react";
import { updateTask, updateTaskStatus, deleteTask } from "../services/taskService";

export default function TaskItem({ task, onTaskUpdated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setEditedStatus(newStatus);
    await updateTaskStatus(task.id, newStatus);
    onTaskUpdated();
  };

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await deleteTask(task.id);
      onTaskUpdated();
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    const updatedTask = {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      status: editedStatus,
    };

    try {
      await updateTask(task.id, updatedTask);
      onTaskUpdated();
      setIsEditing(false); // Exit editing mode after saving
    } catch (error) {
      alert("Error updating task: " + error.message);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-2 flex justify-between items-center">
      <div className="flex-1">
        {isEditing ? (
          <div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="datetime-local"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={editedStatus}
                onChange={handleStatusChange}
                className="border p-1 rounded w-full"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={handleEditToggle}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleString()}</p>
            <div className="mt-2 flex items-center gap-2">
              <select
                value={task.status}
                onChange={handleStatusChange}
                className="border p-1 rounded"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button
                onClick={handleDelete}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
              <button
                onClick={handleEditToggle}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
