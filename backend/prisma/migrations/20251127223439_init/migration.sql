-- CreateEnum
CREATE TYPE "EstadoAsistencia" AS ENUM ('presente', 'ausente', 'tardanza');

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "legajo" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "sexo" INTEGER NOT NULL,
    "edad" INTEGER NOT NULL,
    "celular" TEXT NOT NULL,
    "nacimiento" TIMESTAMP(3) NOT NULL,
    "domicilio" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "asistenciaCreada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "asistenciaActualizada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceSheet" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "asistenciaCreada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "asistenciaActualizada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttendanceSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceRecord" (
    "id" SERIAL NOT NULL,
    "idHojaAsistencia" INTEGER NOT NULL,
    "idEstudiante" INTEGER NOT NULL,
    "estado" "EstadoAsistencia",
    "observations" TEXT,

    CONSTRAINT "AttendanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_dni_key" ON "Student"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Student_legajo_key" ON "Student"("legajo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceSheet_fecha_key" ON "AttendanceSheet"("fecha");

-- AddForeignKey
ALTER TABLE "AttendanceRecord" ADD CONSTRAINT "AttendanceRecord_idHojaAsistencia_fkey" FOREIGN KEY ("idHojaAsistencia") REFERENCES "AttendanceSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceRecord" ADD CONSTRAINT "AttendanceRecord_idEstudiante_fkey" FOREIGN KEY ("idEstudiante") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
