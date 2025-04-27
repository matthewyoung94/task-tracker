import axios from 'axios';
const API_URL = 'http://localhost:5050/api/tasks';

export const getTasks = () => axios.get(API_URL);
export const getTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (data) => axios.post(API_URL, data);
export const updateTaskStatus = (id, status) => axios.patch(`${API_URL}/${id}/status`, { status });
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
