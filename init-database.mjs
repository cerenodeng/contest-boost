import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  let navTab = await prisma.navTab.create({
    data: {
      label: 'goals',
      content: 'goals content'
    },
  });
  console.log(navTab);

  navTab = await prisma.navTab.create({
    data: {
      label: 'rules',
      content: 'rules content'
    },
  });
  console.log(navTab);

  navTab = await prisma.navTab.create({
    data: {
      label: 'prizes',
      content: 'prizes content'
    },
  });
  console.log(navTab);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.log('error', error);
    await prisma.$disconnect();
    process.exit(1);
  });