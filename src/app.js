import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" })); // used to prevent overloading and keeping limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // used to encode the url where space turns into %20 and others
app.use(express.static("public")); // to store the static files like img, pdf into folder
app.use(cookieParser()); // Just like we use cors

export { app };
