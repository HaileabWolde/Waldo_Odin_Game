import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom"
function Dialog_Modal({ ismodalOpen , elapsedTime}) {
    const navigate = useNavigate()
    const dialogRef = useRef(null);
    const [playername, setPlayerName] = useState(null)
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (ismodalOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [ismodalOpen]);
    function formatTime(){
        
        let minutes = Math.floor(elapsedTime/(1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")

        return `${minutes}:${seconds}`
    }

    async  function handlePlayerboard (e){
        e.preventDefault()

      try{
        await axios.post('https://waldo-odin-game.onrender.com/games/score', {
            playername: playername,
            time: elapsedTime,
            diffculity: "hard"
        })
        navigate('/leaderboard')
       
      }
      catch(error){
        console.log("error", error)
      }
    }   
    return (
        <dialog
            ref={dialogRef}
            className="justify-self-center self-center max-w-lg w-[80%] sm:w-full rounded-2xl border border-[#28506D]
                        bg-[#071827]/95 p-4 sm:p-8
                       text-[#F5F0DF]
                       shadow-2xl flex flex-col items-center"
        >
            <h1 className="text-2xl font-serif font-bold text-[#F4C95D] text-center">
              Congratulations <br/>You Have <br/>Finshied The Game !!!
            </h1>

            <div className="mt-4 px-8 py-4 rounded-xl border border-[#c9a84c]/40 bg-[#c9a84c]/5 flex flex-col items-center">
                  <h2 className="font-serif font-semibold text-sm text-[#9FB3C8]">
                            YOUR TIME
                         </h2>

                      <h1 className="text-4xl font-bold font-mono text-[#c9a84c] mt-1">
                                  {formatTime()}
                         </h1>
            </div>
            <div
            className="mt-4 flex flex-col items-center w-full gap-4"
            >
                <input 
                name="playername" 
              placeholder="Enter your name"
                maxLength={20}
                type="text" 
                onChange={(e)=> setPlayerName(e.target.value)}
                className="w-[80%]  border border-[#28506D] rounded-2xl px-2 py-2 text-[#9FB3C8]  placeholder-gray-500 focus:outline-none focus:border-[#54ACDB] transition"></input>
             <button
             onClick={handlePlayerboard}
                className="rounded-lg
                          bg-[#4ade80]
                           px-5 py-2
                           font-semibold text-[#071827]
                           w-[80%]"
            >
              Sumbit to the leaderboard
            </button>
            <Link
            to={'/'}
            
                className="rounded-lg
                           bg-[#F4C95D]
                           px-5 py-2
                           font-semibold text-[#071827]
                           hover:bg-[#e8bb4f] w-[80%] text-center"
            >
                Restart Game
            </Link>
            </div>
              
        </dialog>
    );
}

export default Dialog_Modal;