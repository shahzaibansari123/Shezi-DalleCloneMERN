import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function connectToDatabase() {
    try {
      await prisma.$connect();
      console.log("MongoDB connected successfully.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }