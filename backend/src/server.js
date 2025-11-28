import express from "express";
import cors from "cors";
import pkg from "@prisma/client";
import { prisma } from "./prisma.js";

const app = express();

app.use(cors());
app.use(express.json());

import attendanceRoutes from "./routes/attendance.routes.js";
import studentsRoutes from "./routes/students.routes.js";


app.get("/", (req, res) => res.send("Backend funcionando!"));
app.use("/attendance", attendanceRoutes);
app.use("/students", studentsRoutes);


app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
