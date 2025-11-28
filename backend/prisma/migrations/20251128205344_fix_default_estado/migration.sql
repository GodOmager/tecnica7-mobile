-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AttendanceRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idHojaAsistencia" INTEGER NOT NULL,
    "idEstudiante" INTEGER NOT NULL,
    "estado" TEXT DEFAULT 'present',
    "observations" TEXT,
    CONSTRAINT "AttendanceRecord_idHojaAsistencia_fkey" FOREIGN KEY ("idHojaAsistencia") REFERENCES "AttendanceSheet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AttendanceRecord_idEstudiante_fkey" FOREIGN KEY ("idEstudiante") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AttendanceRecord" ("estado", "id", "idEstudiante", "idHojaAsistencia", "observations") SELECT "estado", "id", "idEstudiante", "idHojaAsistencia", "observations" FROM "AttendanceRecord";
DROP TABLE "AttendanceRecord";
ALTER TABLE "new_AttendanceRecord" RENAME TO "AttendanceRecord";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
