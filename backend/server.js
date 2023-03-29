import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import estateRouter from "./routes/estate.js";
const app = express();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/users", userRouter);
app.use("/estate", estateRouter);

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/freeReale");
}

main().catch((err) => {
  console.log(err);
});

app.listen(3001, () => console.log("The server  is listening on Port : 3001"));
