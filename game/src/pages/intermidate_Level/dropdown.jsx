import Tryion2 from "../../assets/Tryion2.png"
import Little_Finger2 from "../../assets/Little_Finger2.png"
import Varys2 from "../../assets/Varys2.png"

function DropDown({ dropdown }) {
    // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = dropdown.left > 70
    // If click is past 75% from top → show dropdown ABOVE
    const isNearBottom = dropdown.top > 75

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
            <p className="mb-3 px-2 text-xs font-bold tracking-widest text-[#F4C95D]">
                WHO DID YOU FIND?
            </p>
            <div className="flex flex-col gap-2">
                <button 
                className="cursor-pointer flex items-center gap-4  w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                   <img
                        src={Little_Finger2 }
                        alt="Little_Finger2 "
                       className="rounded-lg h-10  w-auto object-contain"
                                               />
                 Littlefinger
                </button>
                <button 
                className="cursor-pointer flex items-center gap-4 w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                  <img
                        src={ Varys2}
                        alt="Varys2 "
                       className="rounded-lg h-10  w-auto object-contain"
                    />
                    Lord Varys
                </button>
                <button 
                className="cursor-pointer flex items-center gap-4 w-full rounded-lg border border-[#28506D] bg-[#0B1F33] px-3 py-2 text-left text-sm font-semibold text-[#F5F0DF] transition-all duration-150 hover:border-[#F4C95D] hover:bg-[#132D46] hover:text-[#F4C95D] hover:translate-x-1 active:scale-[0.98]">
                  <img 
                  src={Tryion2}
                  alt="tryion"
                  className="rounded-lg h-10 w-auto object-contain"
                  />
                    Tyrion Lannister
                </button>
            </div>
        </div>
    )
}

export default DropDown;