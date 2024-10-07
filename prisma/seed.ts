const { PrismaClient } = require("@prisma/client");
const { config } = require("dotenv");
config();

const prisma = new PrismaClient();

async function main() {
  // Example seed data
  await prisma.activity.create({
    data: {
      name: "Inter-School Sports Championship",
      date: new Date("2023-10-01T10:00:00Z"),
      teams: {
        create: [
          {
            name: "Team 1: Gold Medal",
            members: ["Alice Johnson", "Bob Smith", "Charlie Davis"],
          },
          {
            name: "Team 2",
            members: ["David Miller", "Emma Wilson", "Frank Green"],
          },
        ],
      },
      photos: [
        "/landing1.jpg",
        "/landing2.jpg",
        "/landing3.jpg",
        "/landing4.jpg",
        "/landing5.jpg",
      ],
      createdAt: new Date("2023-09-15T12:00:00Z"),
      updatedAt: new Date("2023-09-15T12:00:00Z"),
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
