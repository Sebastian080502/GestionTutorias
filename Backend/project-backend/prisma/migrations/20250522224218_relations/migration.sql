/*
  Warnings:

  - A unique constraint covering the columns `[idUser]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idUser]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Student_idUser_key" ON "Student"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_idUser_key" ON "Teacher"("idUser");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
