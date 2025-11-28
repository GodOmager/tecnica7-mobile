import express from "express";
import cors from "cors";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend funcionando!"));

app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3000"));
