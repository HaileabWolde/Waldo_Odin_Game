import { useState } from "react"


// modules
import Header from "./header"
import ImageBoard from "./imageboard"
import GameCharacter from "./game_characters"
import Dialog_Modal from "./dialogModal"
function Game_Board(){
  const [dropdown, setDropDown] = useState(null)
   const [foundCharacter, setFoundCharacter] = useState([])
    const [ismodalOpen, setisModalOpen]  = useState(true)
    const [elapsedTime, setElapsedTime] = useState(0)
  const handleImageClick = (e) => {

      const rect = e.currentTarget.getBoundingClientRect()
    
    
    // Mouse position inside the image
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert position to percentages
    const xCoord = ((x / rect.width) * 100).toFixed(2);
    const yCoord = ((y / rect.height) * 100).toFixed(2);

    setDropDown({
      top: yCoord,
      left: xCoord,
    });

    
   
}
 return (
    <div className="min-h-screen relative">
      {
        foundCharacter.length === 3 &&
        <Dialog_Modal
        ismodalOpen={ismodalOpen}
        elapsedTime={elapsedTime}
        />
      }
      <Header
      foundCharacter={foundCharacter} 
      elapsedTime={elapsedTime}
      setElapsedTime={setElapsedTime}
      />
       <main 
       className="p-4 md:p-6 lg:p-8">
         <div
       className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6"
         >
             <ImageBoard
             handleImageClick={handleImageClick}
             dropdown={dropdown}
             setDropDown={setDropDown}
             foundCharacter={foundCharacter}
             setFoundCharacter={setFoundCharacter}
             />
             <GameCharacter
             foundCharacter={foundCharacter}
             /> 
         </div>
           
       </main>
    </div>
  )
}
export default Game_Board;