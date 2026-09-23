function FoundmessageBoard({character}){
        console.log(character)
     // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = character?.xPercent > 70
    // If click is past 75% from top → show dropdown ABOVE
    const isNearBottom = character?.yPercent > 60
    return(
         <div
                          className="absolute z-50 p-3 flex flex-col justify-center items-center rounded-xl   animate-[dropdownIn_180ms_ease-out]"
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
                            <p className="text-white text-sm  bg-[#4ade80] px-3 py-2 rounded-lg ">
                                 You Found {character.name}
                             </p>
                          </div>
    )
}
export default FoundmessageBoard;