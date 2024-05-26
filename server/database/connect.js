import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function connectToDatabase() {
    try {
      await prisma.$connect();
      console.log("------------------------------------------------------");
      console.log("DB_STATUS: ✅ Database connected successfully.✅");
    } catch (error) {
      console.error("DB_STATUS: ❌Error connecting to Database:", error);
    }
  }