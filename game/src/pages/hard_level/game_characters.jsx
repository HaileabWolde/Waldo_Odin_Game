import Jon_Snow from "../../assets/hard_level/Jon_Snow.png"
import Ramsy_Bolton from "../../assets/hard_level/Ramsy_Bolton.png"
import Lady_Melisandre from "../../assets/hard_level/Melisandre.png"

function GameCharacter({foundCharacter}){

  const RamsyBolton= foundCharacter.some((character)=> character.name === "Ramsy Bolton")
    const JonSnow = foundCharacter.some((character)=> character.name === "Jon Snow")
    const LadyMelisandre = foundCharacter.some((character)=> character.name === "Lady Melisandre")

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
                            src={Jon_Snow }
                            alt="jon snow"
                           className="rounded-lg  h-22 w-auto object-contain"
                            />
                            <input
                           type="checkbox"
                           checked={JonSnow}
                           readOnly
                            />
                            <div>
                                 <p className="text-[#F5F0DF] text-md font-semibold font-serif">Jon Snow</p>
                                  
                             </div>
        
                          </div>
                           <div
                          className="flex gap-4 rounded-lg items-center p-2  border border-[#28506D]"
                          >
                            <img
                            src={Lady_Melisandre }
                            alt="lady melisanre"
                             className="rounded-lg  h-22 w-auto object-contain"
                            />
                            <input
                            type="checkbox"
                            checked={LadyMelisandre }
                            readOnly
                            />
                             
                            <div>
                                <p className="text-[#F5F0DF] text-md font-semibold font-serif">Lady Melisandre</p>
                            </div>
        
                          </div>
                          <div
                          className="flex gap-4 rounded-lg items-center p-2  border border-[#28506D]"
                          >
                            <img
                            src={Ramsy_Bolton}
                            alt="ramsy bolton"
                            className="rounded-lg  h-22 w-auto object-contain"
                            />
                               <input
                            type="checkbox"
                            checked={RamsyBolton}
                            readOnly
                            />
                            <div>
                              <p className="text-[#F5F0DF] text-md font-semibold font-serif">Ramsy Bolton</p>
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