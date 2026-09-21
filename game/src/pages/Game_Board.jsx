import got from "../assets/got.png"
import Tryion2 from "../assets/Tryion2.png"
import Little_Finger2 from "../assets/Little_Finger2.png"
import Varys2 from "../assets/Varys2.png"
function Game_Board(){
  const handleImageClick = e => {
      const rect = e.target.getBoundingClientRect()
    
    // Get click position relative to image
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;

    // Normalize to percentage of width and height
    // Multiply by 10000 and divide by 100 to keep 2 decimal places
    const xCoord = Math.floor(x / rect.width * 10000)/100;
    const yCoord = Math.floor(y / rect.height * 10000)/100;

    console.log(`Clicked at: X=${xCoord}%, Y=${yCoord}%`);
}
 return (
    <div className="min-h-screen ">
      <header
    className="h-24 bg-[#0B1F33] border-b border-[#28506D] px-6 lg:px-10 flex items-center justify-between"
      >
         <h1 className="text-[#F4C95D] ">THE PURPLE WEDDING</h1>
      </header>
       <main 
       className="p-4 md:p-6 lg:p-8">
         <div
       className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6"
         >
             <div 
            className="rounded-2xl overflow-hidden  border border-[#28506D]
                bg-[#0B1F33]
                shadow-2xl">
                <img
                src={got}
                onClick={handleImageClick}
                alt="Game of Thrones"
                className="aspect-16/10 w-full cursor-crosshair  object-cover   hover:scale-[1.01]   transition-transform
                  duration-300"
                />
              </div>
              <div
              className="border border-[#28506D] shadow-lg p-6  rounded-lg"
              >
                <h2 
                className="text-lg font-semibold text-[#F5F0DF]">Find these characters</h2>
                <div
                className="mt-2 flex flex-col gap-3"
                >
                  <div
                  className="flex gap-4 items-center p-2  border border-[#28506D] rounded-lg"
                  >
                    <img
                    src={Tryion2}
                    alt="tryion"
                   className="rounded-lg  h-22 w-auto object-contain"
                    />
                    <div>
                         <p className="text-[#F5F0DF] text-md font-semibold font-serif">Tyrion Lannister</p>
                          
                     </div>

                  </div>
                   <div
                  className="flex gap-4 rounded-lg items-center p-2  border border-[#28506D]"
                  >
                    <img
                    src={Varys2}
                    alt="varys"
                     className="rounded-lg  h-22 w-auto object-contain"
                    />
                    <div>
                        <p className="text-[#F5F0DF] text-md font-semibold font-serif">Lord Varys</p>
                    </div>

                  </div>
                  <div
                  className="flex gap-4 rounded-lg items-center p-2  border border-[#28506D]"
                  >
                    <img
                    src={Little_Finger2 }
                    alt="littleFinger"
                    className="rounded-lg  h-22 w-auto object-contain"
                    />
                    <div>
                      <p className="text-[#F5F0DF] text-md font-semibold font-serif">Little Finger</p>
                    </div>
                  </div>
                </div>
                 
              </div>
           
         </div>
           
       </main>
    </div>
  )
}
export default Game_Board;