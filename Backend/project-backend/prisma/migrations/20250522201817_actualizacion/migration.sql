/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Reporte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tutoria` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondLastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "secondLastName" TEXT NOT NULL,
ADD COLUMN     "secondName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Reporte";

-- DropTable
DROP TABLE "tutoria";

-- CreateTable
CREATE TABLE "Tutorial" (
    "id" TEXT NOT NULL,
    "idStudent" TEXT NOT NULL,
    "idTeacher" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Tutorial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "idTutoria" TEXT NOT NULL,
    "idStudent" TEXT NOT NULL,
    "idTeacher" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "contenido" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
