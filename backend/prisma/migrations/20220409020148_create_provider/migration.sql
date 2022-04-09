-- CreateTable
CREATE TABLE "Provider" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_document_key" ON "Provider"("document");
