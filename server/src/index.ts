// src/index.ts
import express from "express";
const cors = require("cors");
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Endpoint pentru a prelua toate produsele
app.get("/api/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
