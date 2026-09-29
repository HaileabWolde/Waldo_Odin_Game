import { useState, useEffect } from "react"
import axios from "axios"
function Leaderboard(){
    const [difficulty, setdifficulty] = useState('all')
    const [allscore, setScore] = useState([])
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
                            onClick={()=> handlescore('easy')}
                            className="rounded-lg
                          bg-[#4ade80]
                           px-7 py-2
                           font-semibold text-[#071827]
                           w-full text-center cursor-pointer"
                     >
                      Easy
                  </button>
                  <button
                              onClick={()=> handlescore('intermediate')}
                            className="rounded-lg
                          bg-[#4ade80]
                           px-7 py-2
                           font-semibold text-[#071827]
                           w-full text-center cursor-pointer"
                     >
                      Intermidate
                  </button>

                  <button
                             onClick={()=> handlescore('hard')}
                            className="rounded-lg
                          bg-[#4ade80]
                           px-7 py-2
                           font-semibold text-[#071827]
                           w-full text-center cursor-pointer"
                     >
                      Hard
                  </button>
            </div>
              
           </header>
           {
            allscore ? 
            <div className=" max-w-5xl w-full justify-self-center flex flex-col gap-6 mt-4">
                {
                    allscore.map((score)=> {
                        return (
                            <div
                            className="rounded-2xl border border-[#28506D]
                        bg-[#071827]/95 p-8
                      
                       shadow-2xl w-full flex justify-between"
                            >
                                <span>
                                         <h2 
                                         className="text-[#F5F0DF] text-lg font-semibold font-serif">{score.name}</h2>
                                         <p
                                         className="text-[#444] text-sm"
                                         >
                                              {new Date(score.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                         </p>
                                </span>
                               
                                <h1>
                                    {
                                        formatTime(score.time)
                                    }
                                </h1>
                            </div>
                        )
                    })
                }
            </div>:<></>
           }
        </div>
    )
}
export default Leaderboard