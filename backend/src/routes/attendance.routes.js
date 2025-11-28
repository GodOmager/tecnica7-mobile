import { Router } from "express";
import * as C from "../controllers/attendance.controller.js";

const router = Router();

router.get("/today", C.checkToday);
router.post("/create-today", C.createToday);
router.get("/sheet/:date", C.getSheetByDate);
router.patch("/record/:id", C.updateRecord);
router.patch("/sheet/:sheetId", C.updateSheet);
router.get("/history", C.getHistory);
router.get("/by-student/:studentId", C.getStudentHistory);
router.delete("/today", C.deleteToday);
router.post("/skip-day", C.skipDay);
router.get("/date", C.getSimulatedDate);


export default router;
