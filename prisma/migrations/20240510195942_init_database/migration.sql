-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendas" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "Vendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoriaToProduto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProdutoToVendas" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToProduto_AB_unique" ON "_CategoriaToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToProduto_B_index" ON "_CategoriaToProduto"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProdutoToVendas_AB_unique" ON "_ProdutoToVendas"("A", "B");

-- CreateIndex
CREATE INDEX "_ProdutoToVendas_B_index" ON "_ProdutoToVendas"("B");

-- AddForeignKey
ALTER TABLE "_CategoriaToProduto" ADD CONSTRAINT "_CategoriaToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriaToProduto" ADD CONSTRAINT "_CategoriaToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdutoToVendas" ADD CONSTRAINT "_ProdutoToVendas_A_fkey" FOREIGN KEY ("A") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdutoToVendas" ADD CONSTRAINT "_ProdutoToVendas_B_fkey" FOREIGN KEY ("B") REFERENCES "Vendas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
