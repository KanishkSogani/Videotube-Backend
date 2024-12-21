import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`MONGO DB CONNECTED || ${connectInstance.connection.host} `);
  } catch (error) {
    console.log("MongoDB Connection ERROR: ", error);
    process.exit(1);
  }
};

export default ConnectDB;
