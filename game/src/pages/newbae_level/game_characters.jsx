import Cersi from "../../assets/intermidate_level/Cersi_Lancister.png"
import Jamie_Lancister from "../../assets/intermidate_level/Jamie_Lancister.png"
import  Bron from "../../assets/intermidate_level/Sir Bron.png"

function GameCharacter({foundCharacter}){

  const Cersi_Lancister = foundCharacter.some((character)=> character.name === "Cersi Lancister")
    const Sir_Bron = foundCharacter.some((character)=> character.name === "Sir Bron")
    const JamieLancister = foundCharacter.some((character)=> character.name === "Jamie Lancister")
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
                            src={Cersi}
                            alt="Cersi"
                           className="rounded-lg  h-22 w-auto object-contain"
                            />
                            <input
                              type="checkbox"
                           // name="fruit"
                          //value="banana"
                          readOnly
                        checked={Cersi_Lancister}
                       // onChange={handleChange}
                    />
                            <div>
                                 <p className="text-[#F5F0DF] text-md font-semibold font-serif">Cersi Lannister</p>
                                  
                             </div>
        
                          </div>
                           <div
                          className="flex gap-4 rounded-lg items-center p-2  border border-[#28506D]"
                          >
                            <img
                            src={Jamie_Lancister }
                            alt="Jamie_Lancister "
                             className="rounded-lg  h-22 w-auto object-contain"
                            />
                              <input
                              type="checkbox"
                          
                          readOnly
                          checked={JamieLancister}
                       
                    />
                            <div>
                                <p className="text-[#F5F0DF] text-md font-semibold font-serif">Jamie Lancister </p>
                            </div>
        
                          </div>
                          <div
                          className="flex gap-4 rounded-lg items-center p-2  border border-[#28506D]"
                          >
                            <img
                            src={Bron}
                            alt="Bron"
                            className="rounded-lg  h-22 w-auto object-contain"
                            />
                              <input
                              type="checkbox"
                              checked={Sir_Bron}
                              readOnly
                     
                     />
                            <div>
                              <p className="text-[#F5F0DF] text-md font-semibold font-serif">Sir Bron</p>
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