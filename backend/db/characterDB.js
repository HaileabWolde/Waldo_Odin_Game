const prisma = require("../lib/prisma")

async function findCharacter(charactername){
    const foundCharacter = await prisma.character.findFirst({
            where: {
                name: charactername
            }
    })
    console.log(foundCharacter)
    return foundCharacter
}
module.exports = {
    findCharacter
}