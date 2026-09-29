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
 })*/
await prisma.level.create({
  data: {
    difficulty: "hard",
    name: "Battle of Bastards"
  }
})
   await prisma.character.createMany({
    data: [
      {
      name: "Lady Melisandre",
      xPercent: 18.00,
      yPercent: 4.5,
        levelId: 3
    },
    {
      name: "Jon Snow",
      xPercent: 48.81,
      yPercent: 51.47,
      levelId: 3
    },
    {
      name: "Ramsy Bolton",
      xPercent: 93.47,
      yPercent: 11.92,
      levelId: 3
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