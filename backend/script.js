const prisma = require('./lib/prisma');

async function main() {
  
   
   //await prisma.score.deleteMany()
   await prisma.character.createMany({
    data: [
      {
      name: "Tyrion Lannister",
      xPercent: 12.22,
      yPercent: 34.92,

    },
    {
      name: "Little Finger",
      xPercent: 78.40,
      yPercent: 10.88,
    },
    {
      name: "Loard Varys",
      xPercent: 48.81,
      yPercent: 83.37
    }
  ]
   })
   
  /*const user = await prisma.score.create({
    data: {
      name: "woma",
     time : 14,
    },
  });
  console.log("Created user:", user);*/ 
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