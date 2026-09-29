function FoundmessageBoard({character}){
      
     // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = character?.xPercent > 70
    // If click is past 75% from top → show dropdown ABOVE
    const isNearBottom = character?.yPercent > 60
    return(
         <div
                          className="absolute z-50 p-3 flex flex-col justify-center items-center rounded-xl  border border-[#28506D] bg-[#071827]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]  animate-[dropdownIn_180ms_ease-out]"
                          style={{
                    top: isNearBottom 
                                ? `${character?.yPercent}%` 
                                : `${character?.yPercent}%`,
                    left: isNearRight 
                                ? 'auto' 
                                : `${character?.xPercent}%`,
                    right: isNearRight 
                            ? `${100 - character?.xPercent}%` 
                            : 'auto',
                    transform: isNearBottom 
                                              ? 'translateY(-100%)' 
                                              : 'translateY(0)',
                                      }}
                          >
                            <p className="px-2 text-xs font-bold tracking-widest text-[#4ade80]">
                                 You Found {character.name}
                             </p>
                          </div>
    )
}
export default FoundmessageBoard;