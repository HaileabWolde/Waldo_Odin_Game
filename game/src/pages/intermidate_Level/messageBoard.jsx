function FoundmessageBoard({message, messageendpoint}){
     // If click is past 70% from left → show dropdown to the LEFT
    const isNearRight = messageendpoint?.left > 70
    // If click is past 75% from top → show dropdown ABOVE
    const isNearBottom = messageendpoint?.top > 60
    return(
         <div
                          className="absolute z-50 p-3 flex flex-col justify-center items-center rounded-xl   animate-[dropdownIn_180ms_ease-out]"
                          style={{
                    top: isNearBottom 
                                ? `${messageendpoint?.top}%` 
                                : `${messageendpoint?.top}%`,
                    left: isNearRight 
                                ? 'auto' 
                                : `${messageendpoint?.left}%`,
                    right: isNearRight 
                            ? `${100 - messageendpoint?.left}%` 
                            : 'auto',
                    transform: isNearBottom 
                                              ? 'translateY(-100%)' 
                                              : 'translateY(0)',
                                      }}
                          >
                            <p className="text-white text-sm  bg-[#4ade80] px-3 py-2 rounded-lg ">
                                  {message}
                             </p>
                          </div>
    )
}
export default FoundmessageBoard;