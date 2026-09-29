const {Router}  = require("express");
const indexRouter = Router()
const {checkCharacter,} = require("../controllers/characterQuery")
const {addScore,  fetchScore} = require("../controllers/scoreQuery")
indexRouter.post('/games/guess/:id', checkCharacter)
indexRouter.post('/games/score', addScore)
indexRouter.get('/games/leaderboard', fetchScore)
module.exports = indexRouter