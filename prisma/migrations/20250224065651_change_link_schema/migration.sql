/*
  Warnings:

  - You are about to drop the column `linkId` on the `Link` table. All the data in the column will be lost.
  - Added the required column `originalLink` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortLink` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "linkId",
ADD COLUMN     "originalLink" TEXT NOT NULL,
ADD COLUMN     "shortLink" TEXT NOT NULL;
