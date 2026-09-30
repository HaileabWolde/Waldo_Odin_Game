import axios from "axios"
import Cersi from "../../assets/intermidate_level/Cersi_Lancister.png"
import Jamie_Lancister from "../../assets/intermidate_level/Jamie_Lancister.png"
import  Bron from "../../assets/intermidate_level/Sir Bron.png"


function DropDown({ dropdown ,   setDropDown, setError,  
    setErrorendPoint,  setFoundCharacter, foundCharacter}) {
   
    const Cersi_Lancister = foundCharacter.some((character)=> character.name === "Cersi Lancister")
    const Sir_Bron = foundCharacter.some((character)=> character.name === "Sir Bron")
    const JamieLancister = foundCharacter.some((character)=> character.name === "Jamie Lancister")


     // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = dropdown.left > 50
    // If click is past 75% from top → show dropdown ABOVE
   const isNearBottom = dropdown.top > 70

    async function handleCharacter  (e){
        e.preventDefault()
        try{
           const response = await axios.post('https://waldo-odin-game.onrender.com/games/guess/2', {
                x: dropdown.left,
                y: dropdown.top,
                charactername: e.currentTarget.textContent
            })
            setFoundCharacter((prev) => [...prev, response.data.character]);
            /*
            setMessage(response.data.message)
            setMessageendPoint({
                  top: dropdown.top,
                left: dropdown.left
            })*/
        }
        catch(error){
            setError(error.response.data.message)
            setErrorendPoint({
                top: dropdown.top,
                left: dropdown.left
            })
        }
      setDropDown(null)
    }
    return (
        <div
            className="absolute  z-50 min-w-[210px] rounded-xl border border-[#28506D] bg-[#071827]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-3 animate-[dropdownIn_180ms_ease-out]"
             style={{
                    top: isNearBottom 
                                ? `${dropdown.top}%` 
                                : `${dropdown.top}%`,
                    left: isNearRight 
                                ? 'auto' 
                                : `${dropdown.left}%`,
                    right: isNearRight 
                            ? `${100 - dropdown.left}%` 
                            : 'auto',
                    transform: isNearBottom 
                                              ? 'translateY(-100%)' 
                                              : 'translateY(0)',
                                      }}
        >
           
            
                 {
              Cersi_Lancister && Sir_Bron && JamieLancister ? 
                 <p className=" px-2 text-xs font-bold tracking-widest text-[#4ade80]">
                   Congratulations You Found <br></br>
                   All The Hidden Characters
                 </p>: 
                <p className="mb-3 px-2 text-xs font-bold tracking-widest text-[#F4C95D]">
                    WHO DID YOU FIND?
                </p>
            }
                
            
            <div className="flex flex-col gap-2">
                                      {
                                       Sir_Bron ? null: 
                                        <button 
                 onClick={handleCharacter}
                 id="Little Finger"
                className="cursor-pointer flex items-center gap-4  w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                   
                   <img
                        src={Bron }
                        alt="Bron "
                       className="rounded-lg h-10  w-auto object-contain"
                                               />
                 <p>Sir Bron</p>
                </button>
                                      }
                

                {
                   JamieLancister ? null: 
                     <button 
                 onClick={handleCharacter}
                className="cursor-pointer flex items-center gap-4 w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                  <img
                        src={Jamie_Lancister}
                        alt="Varys2 "
                       className="rounded-lg h-10  w-auto object-contain"
                    />
                    <p>Jamie Lancister</p>
                </button>
                }
                {
                  Cersi_Lancister ? 
                    null: 
                     <button 
                onClick={handleCharacter}
                className="cursor-pointer flex items-center gap-4 w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                  <img 
                  src={Cersi}
                  alt="Cersi"
                  className="rounded-lg h-10 w-auto object-contain"
                  />
                    <p>Cersi Lancister</p>
                </button>
                }
               
            </div>
        </div>
    )
}

export default DropDown;