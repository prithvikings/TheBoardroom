import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorMiddleware.js";
import AppError from "./utils/appError.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// 1) Global Middlewares
app.use(helmet()); // Set security HTTP headers
app.use(cors()); // Enable CORS
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Logging
}
app.use(express.json()); // Body parser, reading data from body into req.body

// 2) Routes
app.use("/api/v1", routes);

// 3) Unhandled Routes Handling
// Use Regex /(.*)/ because the string '*' fails in newer path-to-regexp versions
app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// 4) Global Error Handler
app.use(errorHandler);

export default app;
