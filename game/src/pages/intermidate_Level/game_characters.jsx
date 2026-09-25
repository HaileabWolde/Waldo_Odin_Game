import Tryion2 from "../../assets/Tryion2.png"
import Little_Finger2 from "../../assets/Little_Finger2.png"
import Varys2 from "../../assets/Varys2.png"

function GameCharacter({foundCharacter}){

  const tryion_Lancestor = foundCharacter.some((character)=> character.name === "Tyrion Lannister")
 const little_Finger = foundCharacter.some((character)=> character.name === "Little Finger")
    const lord_Varys = foundCharacter.some((character)=> character.name === "Lord Varys")
    return (
        <div
                      className="border border-[#28506D] shadow-lg p-6  rounded-lg"
                      >
                        <h2 
                        className="text-lg font-semibold text-[#F5F0DF]">Find these characters</h2>
                        <div
                        className="mt-2 flex flex-col gap-3 pb-8  border-b border-[#28506D]"
                        >
                          <div
                          className="flex gap-4 items-center p-2  border border-[#28506D] rounded-lg"
                          >
                            <img
                            src={Tryion2}
                            alt="tryion"
                           className="rounded-lg  h-22 w-auto object-contain"
                            />
                            <input
                              type="radio"
                           // name="fruit"
                          //value="banana"
                         defaultChecked={tryion_Lancestor === true}
                       // onChange={handleChange}
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
                              <input
                              type="radio"
                           // name="fruit"
                          //value="banana"
                          defaultChecked={lord_Varys === true}
                       // onChange={handleChange}
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
                              <input
                              type="radio"
                         
                         defaultChecked={little_Finger === true}
                     
                     />
                            <div>
                              <p className="text-[#F5F0DF] text-md font-semibold font-serif">Little Finger</p>
                            </div>
                          </div>
                        </div>
                        <div
                         className="mt-2 flex flex-col gap-3"
                        >
                          <h2 className="text-[#F5F0DF] text-md font-semibold font-serif">Game Info</h2>
                          <p
                          className="text-[#F5F0DF]  text-xs font-semibold font-sans"
                          > 3 Characters </p>
                            <p
                          className="text-[#F5F0DF]  text-xs font-semibold font-sans "
                          > No Time Limit </p>
                            <p
                            className="text-[#F5F0DF]  text-xs font-semibold font-sans"
                          >   Click on the character
                          <br/>
                            to mark them as found
                            </p>
                        </div>
                         
                      </div>
    )
}
export default GameCharacter;