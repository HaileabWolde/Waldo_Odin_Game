import Tryion2 from "../../assets/Tryion2.png"
import Little_Finger2 from "../../assets/Little_Finger2.png"
import Varys2 from "../../assets/Varys2.png"

function GameCharacter(){
    return (
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
    )
}
export default GameCharacter;