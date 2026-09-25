const {Router}  = require("express");
const indexRouter = Router()
const {checkCharacter} = require("../controllers/characterQuery")
const {addScore} = require("../controllers/scoreQuery")
indexRouter.post('/games/guess', checkCharacter)
indexRouter.post('/games/score', addScore)
module.exports = indexRouter