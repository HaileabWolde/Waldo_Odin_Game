import StopWatch from "./StopWatch";
function Header({foundCharacter, elapsedTime, setElapsedTime}){
    return (
        <header
    className=" bg-[#0B1F33] border-b border-[#28506D] px-6 py-4 lg:px-10 flex  items-center justify-between"
      >
         <h1 className="text-[#F4C95D] text-sm sm:text-md">Tryion's Trial</h1>
         <StopWatch
         foundCharacter={foundCharacter}
         elapsedTime={elapsedTime}
         setElapsedTime={setElapsedTime}
         />
         <div
          className="flex flex-col  justify-center rounded-lg items-center px-4 md:px-12  py-2 border border-[#28506D]"
         >
            <h2 className="text-[#F5F0DF] text-sm md:text-md font-semibold font-serif">Found</h2>
           <p className="text-[#F5F0DF] text-xs font-semibold font-serif">{foundCharacter.length}/3</p>
         </div>
      </header>
    )
 
}
export default Header;