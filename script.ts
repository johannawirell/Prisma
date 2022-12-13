import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: "Johanna",
      email: "johanna@test.com"
    }
  })
  console.log(user)
  // const user = await prisma.user.findMany()

  // await prisma.user.update({ 
  //   where: { id: 2 },
  //   data: {
  //     name: "John"
  //   }
  // })
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })