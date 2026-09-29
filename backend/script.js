const prisma = require('./lib/prisma');

async function main() {
  
   
  // await prisma.character.deleteMany()
 /* await prisma.level.createMany({
    data: [
      {
        name: "The Purple Wedding",
        difficulty: "easy"
      },
      {
        name: "Tyrion's Trial",
        difficulty: "intermediate"
      }
    ]
  })*/
 //await prisma.character.deleteMany()
 /*await prisma.character.create({
  data: {
    name: "Lord Varys",
     xPercent: 48.81,
      yPercent: 83.37,
      levelId: 1
  }
 })
  */ /*await prisma.character.createMany({
    data: [
      {
      name: "Sir Bron",
      xPercent: 46.84,
      yPercent: 81.07,
        levelId: 2
    },
    {
      name: "Jamie Lancister",
      xPercent: 15.52,
      yPercent: 38.89,
      levelId: 2
    },
    {
      name: "Cersi Lancister",
      xPercent: 77.32,
      yPercent: 17.79,
      levelId: 2
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