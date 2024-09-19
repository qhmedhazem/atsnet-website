const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Example seed data
  await prisma.user.create({
    data: {
      email: "ahmedhazemcoding@gmail.com",
      username: "qhmedhazem",
      fullname: "أحمد حازم احمد محمد علي",
      password: "$2a$10$e3B7rG8kxjLq8u0hQ1k9IeO3G5z0oF9D.yK/dMIMvJd/DN3kGJxjO", // hashed password
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
