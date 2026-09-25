const db = require("../db/characterDB");
const AppError = require("../appError/AppError");


async function checkCharacter(req, res, next) {
    const { x, y, charactername } = req.body;

    try {
        const foundCharacter = await db.findCharacter(charactername);

        if (!foundCharacter) {
            throw new AppError(
                `No Character named ${charactername}`,
                404
            );
        }

        else if (
            Math.abs(foundCharacter.xPercent - x) > foundCharacter.tolerance ||
            Math.abs(foundCharacter.yPercent - y) > foundCharacter.tolerance
        ) {
            throw new AppError(
                "Not Quite-- keep looking",
                400
            );
        }

        else {
            res.json({
                message: `You found ${foundCharacter.name}!`,
                character: foundCharacter
            });
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    checkCharacter
};