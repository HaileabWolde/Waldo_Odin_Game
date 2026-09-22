import got from "../../assets/got.png"
import DropDown from "./dropdown";
function ImageBoard({handleImageClick, dropdown}){
    return (
        <div 
                    className="  border border-[#28506D]
                        bg-[#0B1F33]
                        shadow-2xl relative">
                        <img
                        src={got}
                        onClick={handleImageClick}
                        alt="Game of Thrones"
                        className="rounded-2xl  aspect-16/10 w-full cursor-crosshair  object-cover   hover:scale-[1.01]   transition-transform
                          duration-300"
                        />
                        {
                          dropdown &&
                          <DropDown
                           key={`${dropdown.top}-${dropdown.left}`}  // ← unique key forces remount
                          dropdown={dropdown}
                          />
                        }
                      </div>
    )
}
export default ImageBoard;