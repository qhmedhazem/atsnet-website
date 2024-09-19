const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Example seed data
  await prisma.user.create({
    data: {
      email: "ahmedhazemcoding@gmail.com",
      username: "qhmedhazem",
      fullname: "أحمد حازم احمد محمد علي",
      password: "$2a$12$4hScssJOXTB/8elIqXjScuIyfnoNixFTgB2nDWjKXZMJEPSPal29K", // hashed password
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
