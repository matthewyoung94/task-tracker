import { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTaskStatus } from '../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(res => setTasks(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleStatusChange = async (id, status) => {
    await updateTaskStatus(id, status);
    setTasks(tasks.map(t => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <div className="space-y-4 p-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-white shadow p-4 rounded-xl flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-xs text-gray-400">Due: {new Date(task.dueDate).toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <select value={task.status} onChange={e => handleStatusChange(task.id, e.target.value)} className="border rounded">
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => handleDelete(task.id)} className="text-red-500">🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
