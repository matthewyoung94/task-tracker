import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from the frontend origin
  methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Allow specific headers
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.get('/', (req, res) => {
    res.send('API is running...');
  });  
app.use(errorHandler);
app.use((req, res, next) => {
    console.log(req.headers);
    next();
});

 
export default app;
