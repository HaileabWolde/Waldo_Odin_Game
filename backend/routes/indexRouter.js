const {Router}  = require("express");
const indexRouter = Router()
const {checkCharacter} = require("../controllers/characterQuery")

indexRouter.post('/games/guess', checkCharacter)

module.exports = indexRouter