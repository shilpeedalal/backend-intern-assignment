import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connect = async () => {
  console.log("MONGO_URI", process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed.");
      console.error(error);
      process.exit(1);
    });
};
