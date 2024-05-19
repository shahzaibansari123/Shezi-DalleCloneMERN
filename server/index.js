import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
// import { PrismaClient } from "@prisma/client";
import connectToDatabase from "./database/connect.js";

// const prisma= new PrismaClient();
// console.log(prisma,"prisma")

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("API IS WORKING");
});

const start = async () => {
  try {
    await connectToDatabase();
    app.listen(5000, () =>
      console.log("Server is running on http://localhost:5000 ✅")
    );
  } catch (error) {
    console.log(error, "error in connection or running server");
  }
};

start();
