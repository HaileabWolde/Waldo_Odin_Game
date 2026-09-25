const db = require("../db/scoreDB")
async function addScore(req, res, next){
    const {playername, time,  diffculity} = req.body
    console.log(diffculity)
   try{
    const newScore = await db.addScore(playername, time, diffculity)
     res.json({
        sucess:"true",
        score: newScore
    })
   }
   catch(error){
    console.log("error", error)
    next(error)
   }
   
}
module.exports = {addScore}