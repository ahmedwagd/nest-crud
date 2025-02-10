/*
  Warnings:

  - Added the required column `appointmentDate` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` ADD COLUMN `appointmentDate` DATETIME(3) NOT NULL,
    ADD COLUMN `reason` VARCHAR(191) NULL;
