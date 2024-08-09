import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import BookRoute from "./routes/book.route.js";
import cors from "cors";
import UserRoute from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoURL = process.env.MONGODBURL;

// connecting to database

try {
  mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("error:", error);
}

// connecting to routes

app.use("/book", BookRoute);

app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
