import { Router } from "express";
import * as C from "../controllers/students.controller.js";

const router = Router();

router.get("/", C.getAll);
router.get("/:id", C.getById);
router.post("/", C.create);
router.put("/:id", C.update);
router.delete("/:id", C.remove);
router.post("/many", C.createMany);

export default router;
