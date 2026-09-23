import { PrismaClient } from '@prisma/client';
import { products } from '../data/products.js';

const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    const { id, ...productData } = product;
    await prisma.product.create({ data: product });
  }
  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });