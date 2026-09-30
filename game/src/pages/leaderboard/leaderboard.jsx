import { useState, useEffect } from "react"
import axios from "axios"
function Leaderboard(){
    const [difficulty, setdifficulty] = useState('all')
    const [allscore, setScore] = useState([])
    console.log(allscore)
    useEffect(()=>{
        async function fetchallscore(){
            try{
                const response = await axios.get(`http://localhost:3000/games/leaderboard?difficulty=${difficulty}`)
                setScore(response.data.allscore)
              
            }
            catch(error){
                console.log("error", error)
            }
        } fetchallscore()
    }, [difficulty])
    function handlescore(level){
        setdifficulty(level)
    }
     function formatTime(time){
        
        let minutes = Math.floor(time/(1000 * 60) % 60)
        let seconds = Math.floor(time / (1000) % 60)
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")

        return `${minutes}:${seconds}`
    }
    return (
        <div className="min-h-screen relative">
           <header
           className="h-30 bg-[#0B1F33] border-b border-[#28506D] px-6 py-4 lg:px-10 flex justify-between items-center"
           >
            <div>
                    <h1 className="text-[#F4C95D] ">Game of Thrones</h1>
                 <h2 className="text-[#F5F0DF] text-md font-semibold font-serif">HALL OF FAME</h2>
            </div>
            <div className="flex gap-4 ">
                     <button
                                     onClick={() => handlescore('easy')}
                                             className={`rounded-lg px-7 py-2 font-semibold w-full text-center cursor-pointer transition-colors ${
                                              difficulty === 'easy'
                                 ? 'bg-[#4ade80] text-[#071827] font-serif'
                                  : 'bg-[#0B1F33] text-[#4ade80] border border-[#4ade80]'
                                             }`}
                        >
                                      Easy
                    </button>
                  <button
                              onClick={()=> handlescore('intermediate')}
                             className={`rounded-lg px-7 py-2 font-semibold w-full text-center cursor-pointer transition-colors ${
                         difficulty === 'intermediate'
                                 ? 'bg-[#c9a84c] text-[#071827] font-serif'
                            : 'bg-[#0B1F33] text-[#4ade80] border border-[#4ade80]'
                                 }`}
                     >
                      Intermidate
                  </button>

                  <button
                             onClick={()=> handlescore('hard')}
                            className={`rounded-lg px-7 py-2 font-semibold w-full text-center cursor-pointer transition-colors ${
                             difficulty === 'hard'
                           ? 'bg-[#ef4444] text-[#071827] font-serif'
                              : 'bg-[#0B1F33] text-[#4ade80] border border-[#4ade80]'
                                     }`}
                     >
                      Hard
                  </button>
            </div>
              
           </header>
           {
          allscore.length > 0  ? 
            <div className=" max-w-5xl w-full justify-self-center flex flex-col gap-6 mt-4">
               {allscore.map((score, index) => {
         const medal = index === 0 ? '👑' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1
        return (
             <div key={score.id} className="rounded-2xl border border-[#28506D] bg-[#071827]/95 p-6 shadow-2xl w-full flex items-center gap-6">
                     <p className="text-2xl w-10 text-center flex-shrink-0">{medal}</p>
                     <div className="flex-1">
                     <h2 className="text-[#F5F0DF] text-lg font-semibold font-serif">{score.name}</h2>
                    <p className="text-[#444] text-sm">
                    {new Date(score.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                 </p>
                  </div>
                 <h1 className="text-[#c9a84c] text-2xl font-bold font-mono">{formatTime(score.time)}</h1>
             </div>
            )
        })}
            </div>:
            <>
             <div className="text-center py-20">
      
              <p className="text-[#F5F0DF] font-serif text-4xl">No scores yet for this level</p>
                  <p className="text-[#F5F0DF]  text-lg mt-2 ">Be the first to claim the throne</p>
             </div>
            </>
           }
        </div>
    )
}
export default Leaderboard