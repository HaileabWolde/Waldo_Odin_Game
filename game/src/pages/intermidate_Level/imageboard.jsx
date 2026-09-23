import got from "../../assets/got.png"
import DropDown from "./dropdown";
import FoundmessageBoard from "./messageBoard";
import { useState, useEffect } from "react";

function ImageBoard({handleImageClick, dropdown,   setDropDown}){
 
  const [foundCharacter, setFoundCharacter] = useState([])
  console.log(foundCharacter.length)
  
   const [error, setError] = useState(null);
   const [errorendpoint, setErrorendPoint] = useState(null)
   
     // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = errorendpoint?.left > 70
    // If click is past 75% from top → show dropdown ABOVE
    const isNearBottom = errorendpoint?.top > 60

    useEffect(()=> {
      const timerId = setTimeout(()=>{
        setError(null)
       setErrorendPoint(null)
      }, 3000)
      return ()=>{
        clearTimeout(timerId)
      }
    }, [error])

    return (
        <div 
                    className="  border border-[#28506D]
                        bg-[#0B1F33]
                        shadow-2xl relative">
                        <img
                        src={got}
                        onClick={handleImageClick}
                        alt="Game of Thrones"
                        className="rounded-2xl  aspect-16/10 w-full cursor-pointer  object-cover   hover:scale-[1.01]   transition-transform
                          duration-300"
                        />
                        {
                          error && 
                          <div
                          className="absolute z-50 p-3 flex flex-col justify-center items-center rounded-xl border border-[#28506D] bg-[#071827]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-[dropdownIn_180ms_ease-out]"
                          style={{
                    top: isNearBottom 
                                ? `${errorendpoint.top}%` 
                                : `${errorendpoint.top}%`,
                    left: isNearRight 
                                ? 'auto' 
                                : `${errorendpoint.left}%`,
                    right: isNearRight 
                            ? `${100 - errorendpoint.left}%` 
                            : 'auto',
                    transform: isNearBottom 
                                              ? 'translateY(-100%)' 
                                              : 'translateY(0)',
                                      }}
                          >
                            <p className="text-red-400 text-sm  bg-red-400/10 px-3 py-2 rounded-lg">
                                  {error}
                             </p>
                          </div>
                        }
                        {
                        foundCharacter &&
                        foundCharacter.map((character)=> {
                          return(
                              <FoundmessageBoard
                          character={character}
                            key={character.id}
                          />
                          )
                          
                        })
                        }
                        {
                          dropdown &&
                          <DropDown
                           key={`${dropdown.top}-${dropdown.left}`}  // ← unique key forces remount
                          dropdown={dropdown}
                            setDropDown={setDropDown}
                            setError={setError}
                             setErrorendPoint={ setErrorendPoint}
                             setFoundCharacter={setFoundCharacter}
                             foundCharacter={foundCharacter}
                             /*
                             setMessage={setMessage}
                              setMessageendPoint={ setMessageendPoint}*/
                          />
                        }
                      </div>
    )
}
export default ImageBoard;