-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "levelId" INTEGER;

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "levelId" INTEGER;

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
