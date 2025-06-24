/*
  Warnings:

  - You are about to drop the column `kakao_id` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "github_id" INTEGER,
    "naver_id" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "phone" INTEGER,
    "avatar" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("avatar", "createAt", "email", "github_id", "id", "password", "phone", "updateAt", "username") SELECT "avatar", "createAt", "email", "github_id", "id", "password", "phone", "updateAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_github_id_key" ON "User"("github_id");
CREATE UNIQUE INDEX "User_naver_id_key" ON "User"("naver_id");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
