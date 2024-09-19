const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Example seed data
  await prisma.annoncement.create({
    data: {
      title: "qhmedhazem",
      createdAt: new Date(),
      published: true,
      content: "أحمد حازم احمد محمد علي",
      authorId: '66ec7a89d96cc81629325931'
    },
  });

  // Add more seeding logic as needed
  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
