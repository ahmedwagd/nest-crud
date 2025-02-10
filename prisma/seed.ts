import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Hash passwords
  // const saltRounds = 10;
  const adminPassword = 'Admin@123';
  const userPassword = 'User@123';

  // Seed Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@a.com' },
    update: {},
    create: {
      email: 'admin@a.com',
      password: adminPassword,
      name: 'Admin User',
      birthday: new Date('1990-01-01'),
      country: 'USA',
      role: Role.ADMIN,
    },
  });

  // Seed Regular User
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: userPassword,
      name: 'Regular User',
      birthday: new Date('1995-05-10'),
      country: 'Canada',
      role: Role.USER,
    },
  });

  console.log({ admin, user });
  console.log('✅ Seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
