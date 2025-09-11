import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Piept de pui",
        category: "Carne de pui",
        description: "Piept de pui dezosat, congelat rapid.",
      },
      {
        name: "Cartofi pai",
        category: "Produse de cartofi",
        description: "Cartofi pre-prăjiți, congelați.",
      },
      {
        name: "Amestec mexican",
        category: "Legume",
        description: "Amestec de mazăre, morcovi, porumb.",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
