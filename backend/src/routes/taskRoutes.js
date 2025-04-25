import express from 'express';
import { getTasks, getTaskById, createTask, updateTaskStatus, deleteTask } from '../controllers/taskController.js';

const router = express.Router();
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.patch('/:id/status', updateTaskStatus);
router.delete('/:id', deleteTask);

export default router;
