import { useState, useEffect, useRef } from "react";
function StopWatch({foundCharacter}){
    const [isRunning, setIsRunning] = useState(true)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef= useRef(0)

    
    
    // Stop the stopwatch when all 3 characters are found
    useEffect(() => {
        if (foundCharacter.length === 3) {
            setIsRunning(false);
        }
    }, [foundCharacter]);

    useEffect(()=>{
      
        if(isRunning){
            startTimeRef.current  =  Date.now()- elapsedTime
            intervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now() - startTimeRef.current)

            }, 10) 
        }
       
        return ()=>{
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning])

    

    function formatTime(){
        
        let minutes = Math.floor(elapsedTime/(1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")

        return `${minutes}:${seconds}`
    }
    return(
        <div
        className="flex flex-col  justify-center rounded-lg items-center px-12  py-2 border border-[#28506D] "
        >
           {
            formatTime()
           }
        </div>
    )
}
export default StopWatch;