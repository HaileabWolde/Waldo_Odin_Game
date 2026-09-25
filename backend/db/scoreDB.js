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

module.exports = {
    addScore
}