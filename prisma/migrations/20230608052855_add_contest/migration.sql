-- CreateTable
CREATE TABLE "Contest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "startDatetime" TEXT NOT NULL,
    "endDatetime" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
