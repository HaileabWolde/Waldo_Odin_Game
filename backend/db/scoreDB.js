const prisma = require("../lib/prisma")

async function addScore(playername, time, diffculity) {
    const level = await prisma.level.findFirst({
        where: {
            difficulty: diffculity
        }
    })

    const newScore = await prisma.score.create({
        data: {
            name: playername,
            time: time,
            levelId: level.id,
        }
    })

    return newScore
}
async function fetchallscores(){
    const scores = await prisma.score.findMany({
  orderBy: {
    time: "asc"
  },
  take: 10
})
return scores
}
async function fetchlevelscores(difficulty){
    const levelscore = await prisma.score.findMany({
         where: {
    level: {
      difficulty: difficulty
    }
  },
        orderBy: {
            time: "asc"
        },
        take: 10
    })
    return levelscore
}
module.exports = {
    addScore,
    fetchallscores,
    fetchlevelscores
}