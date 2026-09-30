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
await prisma.level.createMany({
  data: [
     {
        name: "The Purple Wedding",
        difficulty: "easy"
      },
      {
        name: "Tyrion's Trial",
        difficulty: "intermediate"
      },
    {
        difficulty: "hard",
        name: "Battle of Bastards"
    }
   
  ]
   
  
})
   await prisma.character.createMany({
    data: [
      {
    name: "Lord Varys",
     xPercent: 48.81,
      yPercent: 83.37,
      levelId: 1
  },
  {
    name: "Little Finger",
    xPercent: 78.4,
    yPercent: 10.88,
     levelId: 1
  },
  {
    name: "Tyrion Lannister",
    xPercent: 12.22,
    yPercent: 34.92,
     levelId: 1
  },
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
  },
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