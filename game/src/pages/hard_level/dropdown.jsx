import axios from "axios"
import Jon_Snow from "../../assets/hard_level/Jon_Snow.png"
import Ramsy_Bolton from "../../assets/hard_level/Ramsy_Bolton.png"
import Lady_Melisandre from "../../assets/hard_level/Melisandre.png"

function DropDown({ dropdown ,   setDropDown, setError,  
    setErrorendPoint,  setFoundCharacter, foundCharacter}) {
   
    const Jonsnow = foundCharacter.some((character)=> character.name === "Jon Snow")
    const Ramsybolton = foundCharacter.some((character)=> character.name === "Ramsy Bolton")
    const ladyMelisandre = foundCharacter.some((character)=> character.name === "Lady Melisandre")


     // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = dropdown.left > 70
    // If click is past 75% from top → show dropdown ABOVE
    const isNearBottom = dropdown.top > 60

    async function handleCharacter  (e){
        e.preventDefault()
        try{
           const response = await axios.post('https://waldo-odin-game.onrender.com/games/guess/3', {
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
            className="absolute z-50 min-w-[210px] rounded-xl border border-[#28506D] bg-[#071827]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-3 animate-[dropdownIn_180ms_ease-out]"
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
               Jonsnow && Ramsybolton  && ladyMelisandre ? 
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
                                        Ramsybolton ? null: 
                                        <button 
                 onClick={handleCharacter}
                className="cursor-pointer flex items-center gap-4  w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                   
                   <img
                        src={Ramsy_Bolton}
                        alt="Jon Snow"
                       className="rounded-lg h-10  w-auto object-contain"
                                               />
                 <p>Ramsy Bolton</p>
                </button>
                                      }
                

                {
                  Jonsnow ? null: 
                     <button 
                 onClick={handleCharacter}
                className="cursor-pointer flex items-center gap-4 w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                  <img
                        src={Jon_Snow}
                        alt="Jon Snow"
                       className="rounded-lg h-10  w-auto object-contain"
                    />
                    <p>Jon Snow</p>
                </button>
                }
                {
                  ladyMelisandre? 
                    null: 
                     <button 
                onClick={handleCharacter}
                className="cursor-pointer flex items-center gap-4 w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                  <img 
                  src={Lady_Melisandre}
                  alt="Lady Melisandre"
                  className="rounded-lg h-10 w-auto object-contain"
                  />
                    <p>Lady Melisandre</p>
                </button>
                }
               
            </div>
        </div>
    )
}

export default DropDown;