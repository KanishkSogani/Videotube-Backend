import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

ConnectDB();

/*
This Process is for using mongo db directly here! (NOT PROFESSIONAL)
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(`${process.env.PORT}`, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();

*/
