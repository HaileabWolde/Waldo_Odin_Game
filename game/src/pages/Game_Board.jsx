import got from "../assets/got.png"

function Game_Board(){
 return (
    <div className="min-h-screen ">
       <div className="min-h-screen  bg-[#faf9f7] flex flex-col items-center p-6">
            <div 
            className="cursor-pointer relative w-full max-w-5xl rounded-2xl overflow-hidden ">
                <img
                src={got}
                alt="Game of Thrones"
                className="w-full h-auto object-cover"
                />
          </div>
       </div>
    </div>
  )
}
export default Game_Board;