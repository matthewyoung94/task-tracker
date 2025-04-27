import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getTasks = async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const task = await prisma.task.findUnique({ where: { id: req.params.id } });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, status } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: id },
      data: {
        title,
        description,
        dueDate: new Date(dueDate),
        status,
      },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  if (!title || !dueDate) return res.status(400).json({ error: 'Title and dueDate required' });

  const task = await prisma.task.create({
    data: { title, description, status, dueDate: new Date(dueDate) },
  });
  res.status(201).json(task);
};

export const updateTaskStatus = async (req, res) => {
  const { status } = req.body;
  const task = await prisma.task.update({
    where: { id: req.params.id },
    data: { status },
  });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await prisma.task.delete({ where: { id: req.params.id } });
  res.status(204).end();
};

