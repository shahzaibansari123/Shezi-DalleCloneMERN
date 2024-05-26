import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
// import { PrismaClient } from "@prisma/client";
import connectToDatabase from "./database/connect.js";
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

// const prisma= new PrismaClient();
// console.log(prisma,"prisma")

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dall-e', dalleRoutes)


app.get("/", async (req, res) => {
  res.send("API IS WORKING");
});

const start = async () => {
  try {
    await connectToDatabase();
    app.listen(5000, () =>{
      
      console.log("SERVER_STATUS: ✅ Running on http://localhost:5000 ✅")
      console.log("------------------------------------------------------");
    
    }
    );
  } catch (error) {
    console.log(error, "error in connection or running server");
  }
};

start();
