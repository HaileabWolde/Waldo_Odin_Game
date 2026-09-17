import got from "../assets/got.png"

function Game_Board(){
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
                alt="Game of Thrones"
                className="aspect-16/10 w-full cursor-crosshair  object-cover   hover:scale-[1.01]   transition-transform
                  duration-300"
                />
              </div>
              
         </div>
           
       </main>
    </div>
  )
}
export default Game_Board;