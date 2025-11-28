-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "legajo" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "sexo" INTEGER NOT NULL,
    "edad" INTEGER NOT NULL,
    "celular" TEXT NOT NULL,
    "nacimiento" DATETIME NOT NULL,
    "domicilio" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "asistenciaCreada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "asistenciaActualizada" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AttendanceSheet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "asistenciaCreada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "asistenciaActualizada" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idHojaAsistencia" INTEGER NOT NULL,
    "idEstudiante" INTEGER NOT NULL,
    "estado" TEXT DEFAULT 'presente',
    "observations" TEXT,
    CONSTRAINT "AttendanceRecord_idHojaAsistencia_fkey" FOREIGN KEY ("idHojaAsistencia") REFERENCES "AttendanceSheet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AttendanceRecord_idEstudiante_fkey" FOREIGN KEY ("idEstudiante") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_dni_key" ON "Student"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Student_legajo_key" ON "Student"("legajo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceSheet_fecha_key" ON "AttendanceSheet"("fecha");
