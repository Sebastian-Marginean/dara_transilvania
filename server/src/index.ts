// src/index.ts
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Endpoint pentru a prelua toate produsele
app.get("/api/products", async (req, res) => {
  const { category } = req.query;
  const where = category ? { category: String(category) } : {};
  const products = await prisma.product.findMany({ where });
  res.json(products);
});

// Endpoint pentru categorii distincte
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await prisma.product.findMany({
      distinct: ["category"],
      select: { category: true },
    });
    // Poți adăuga manual icon și descriere aici dacă vrei
    res.json(categories.map((c) => c.category));
  } catch (error) {
    res.status(500).json({ error: "Eroare la fetch categorii" });
  }
});

// Endpoint pentru a prelua un produs dupa nume
app.get("/api/product", async (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: "Missing product name" });
  const product = await prisma.product.findFirst({
    where: { name: String(name) },
  });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
