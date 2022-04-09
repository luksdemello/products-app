-- CreateTable
CREATE TABLE "tb_providers" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "tb_providers_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "tb_address" (
    "uid" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" CHAR(2) NOT NULL,
    "provider_uid" TEXT NOT NULL,

    CONSTRAINT "tb_address_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "tb_products" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,
    "provider_uid" TEXT NOT NULL,

    CONSTRAINT "tb_products_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_providers_document_key" ON "tb_providers"("document");

-- CreateIndex
CREATE UNIQUE INDEX "tb_address_provider_uid_key" ON "tb_address"("provider_uid");

-- AddForeignKey
ALTER TABLE "tb_address" ADD CONSTRAINT "tb_address_provider_uid_fkey" FOREIGN KEY ("provider_uid") REFERENCES "tb_providers"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_products" ADD CONSTRAINT "tb_products_provider_uid_fkey" FOREIGN KEY ("provider_uid") REFERENCES "tb_providers"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
