import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Dialog_Modal({ ismodalOpen , elapsedTime}) {
    
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
        const response = await axios.post('http://localhost:3000/games/score', {
            playername: playername,
            time: elapsedTime,
            diffculity: "easy"
        })
        console.log(response)
      }
      catch(error){
        console.log("error", error)
      }
    }   
    return (
        <dialog
            ref={dialogRef}
            className="justify-self-center self-center max-w-lg w-full rounded-2xl border border-[#28506D]
                        bg-[#071827]/95 p-8
                       text-[#F5F0DF]
                       shadow-2xl flex flex-col items-center"
        >
            <h1 className="text-2xl font-serif font-bold text-[#F4C95D]">
                Level Completed
            </h1>

            <p className="mt-3 text-sm text-[#9FB3C8]">
                You found all three characters!
            </p>
            <div
            className="mt-2 px-4 py-1 rounded-lg flex flex-col items-center border border-[#28506D]"
            >
                <h2
                className="font-serif font-semibold mt-3 text-sm text-[#9FB3C8]"
                >
                    Your Time
                </h2>
                  <h1>
                   {
                             formatTime()
                     }
                 </h1>
            </div>
            <div
            className="mt-4 flex flex-col items-center w-full gap-4"
            >
                <input 
                id="playername" 
                name="playername" 
                placeholder="Enter Your Name For The leaderboard"
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
            <button
                className="rounded-lg
                           bg-[#F4C95D]
                           px-5 py-2
                           font-semibold text-[#071827]
                           hover:bg-[#e8bb4f] w-[80%]"
            >
                Next Level
            </button>
            </div>
              
        </dialog>
    );
}

export default Dialog_Modal;