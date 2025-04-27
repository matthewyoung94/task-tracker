import app from './app.js';
const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

// import express from "express";
// import cors from "cors";
// import taskRoutes from "./routes/taskRoutes.js";

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.options('*', cors());
// app.use(express.json());
// app.use("/api/tasks", taskRoutes);

// app.get("/", (req, res) => {
//   res.send("API running...");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


  