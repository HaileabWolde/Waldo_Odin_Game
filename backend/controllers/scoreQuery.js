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
async function fetchScore(req, res, next){
    const {difficulty} = req.query
    console.log(difficulty)
    if(difficulty != 'all'){
        try{
              const levelscore = await db.fetchlevelscores(difficulty)
        res.json({
            success: "true",
            allscore: levelscore
        })
        }
        catch(error){
            console.log("error", error)
            next(error)
        }
      
    }
    else {
        try{
              const allscore = await db.fetchallscores()
        res.json({
            sucess: "true",
            allscore: allscore
        })
        }
        catch(error){
            console.log("error", error)
            next(error)
        }
      
    }
}
module.exports = {addScore, fetchScore}