// 1. THIS MUST BE THE FIRST LINE
import "dotenv/config";

// 2. Now import the rest
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

// (Remove the old dotenv.config() line from down here)

// 3. Connect and Start
connectDB();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
