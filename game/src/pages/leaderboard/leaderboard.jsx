
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Leaderboard() {
    const [difficulty, setdifficulty] = useState("all")
    const [allscore, setScore] = useState([])

    console.log(allscore)

    useEffect(() => {
        async function fetchallscore() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/games/leaderboard?difficulty=${difficulty}`
                )

                setScore(response.data.allscore)
            }
            catch (error) {
                console.log("error", error)
            }
        }

        fetchallscore()
    }, [difficulty])

    function handlescore(level) {
        setdifficulty(level)
    }

    function formatTime(time) {
        let minutes = Math.floor(time / (1000 * 60) % 60)
        let seconds = Math.floor(time / 1000 % 60)

        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")

        return `${minutes}:${seconds}`
    }

    return (
        <div className="min-h-screen relative">

            {/* HEADER */}
            <header
                className="bg-[#0B1F33] border-b border-[#28506D]
                           px-6 py-4 lg:px-10
                           flex flex-col gap-5
                           sm:flex-row sm:justify-between sm:items-center"
            >

                {/* TITLE */}
                <div>
                    <h1 className="text-[#F4C95D] text-center sm:text-left">
                        Game of Thrones
                    </h1>

                    <h2 className="text-[#F5F0DF] text-md font-semibold font-serif text-center sm:text-left">
                        HALL OF FAME
                    </h2>
                </div>


                {/* BUTTONS */}
                <div className="flex gap-3 flex-wrap justify-center">

                    {/* EASY */}
                    <button
                        onClick={() => handlescore("easy")}
                        className={`rounded-lg px-6 py-2 font-semibold text-center cursor-pointer transition-all duration-200 ${
                            difficulty === "easy"
                                ? "bg-[#4ade80] text-[#071827] font-serif shadow-lg shadow-[#4ade80]/10"
                                : "bg-[#0B1F33] text-[#4ade80] border border-[#4ade80] hover:bg-[#4ade80]/10"
                        }`}
                    >
                        Easy
                    </button>


                    {/* INTERMEDIATE */}
                    <button
                        onClick={() => handlescore("intermediate")}
                        className={`rounded-lg px-6 py-2 font-semibold text-center cursor-pointer transition-all duration-200 ${
                            difficulty === "intermediate"
                                ? "bg-[#c9a84c] text-[#071827] font-serif shadow-lg shadow-[#c9a84c]/10"
                                : "bg-[#0B1F33] text-[#c9a84c] border border-[#c9a84c] hover:bg-[#c9a84c]/10"
                        }`}
                    >
                        Intermediate
                    </button>


                    {/* HARD */}
                    <button
                        onClick={() => handlescore("hard")}
                        className={`rounded-lg px-6 py-2 font-semibold text-center cursor-pointer transition-all duration-200 ${
                            difficulty === "hard"
                                ? "bg-[#ef4444] text-[#071827] font-serif shadow-lg shadow-[#ef4444]/10"
                                : "bg-[#0B1F33] text-[#ef4444] border border-[#ef4444] hover:bg-[#ef4444]/10"
                        }`}
                    >
                        Hard
                    </button>


                    {/* PLAY AGAIN */}
                    <Link
                        to="/"
                        className="ml-1 rounded-lg px-6 py-2 font-semibold text-center
                                   bg-[#F4C95D] text-[#071827]
                                   hover:bg-[#ffe08a]
                                   hover:scale-[1.02]
                                   transition-all duration-200
                                   shadow-lg shadow-[#F4C95D]/10"
                    >
                        Play Again
                    </Link>

                </div>
            </header>


            {/* LEADERBOARD */}
            {
                allscore.length > 0 ?

                    <div className="p-6 sm:p-8 max-w-5xl w-full justify-self-center flex flex-col gap-4 mt-4">

                        {allscore.map((score, index) => {

                            const medal =
                                index === 0
                                    ? "👑"
                                    : index === 1
                                        ? "🥈"
                                        : index === 2
                                            ? "🥉"
                                            : index + 1

                            return (
                                <div
                                    key={score.id}
                                    className={`rounded-2xl border
                                               bg-[#071827]/95
                                               p-5 sm:p-6
                                               shadow-2xl
                                               w-full
                                               flex items-center
                                               gap-4 sm:gap-6
                                               transition-all duration-200
                                               hover:-translate-y-1 ${
                                        index === 0
                                            ? "border-[#c9a84c] shadow-[#c9a84c]/10"
                                            : "border-[#28506D] hover:border-[#4a718d]"
                                    }`}
                                >

                                    {/* MEDAL / POSITION */}
                                    <p className="text-2xl w-10 text-center flex-shrink-0">
                                        {medal}
                                    </p>


                                    {/* PLAYER INFO */}
                                    <div className="flex-1 min-w-0">

                                        <h2 className="text-[#F5F0DF] text-lg font-semibold font-serif truncate">
                                            {score.name}
                                        </h2>

                                        <p className="text-[#666] text-sm">
                                            {new Date(score.createdAt).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                }
                                            )}
                                        </p>

                                    </div>


                                    {/* TIME */}
                                    <h1
                                        className={`text-xl sm:text-2xl font-bold font-mono ${
                                            index === 0
                                                ? "text-[#c9a84c]"
                                                : "text-[#888]"
                                        }`}
                                    >
                                        {formatTime(score.time)}
                                    </h1>

                                </div>
                            )
                        })}

                    </div>

                    :

                    /* EMPTY LEADERBOARD */
                    <div className="flex flex-col items-center justify-center text-center py-20 px-6">

                        <div className="text-6xl mb-6">
                            👑
                        </div>

                        <p className="text-[#F5F0DF] font-serif text-2xl sm:text-3xl">
                            No scores yet
                        </p>

                        <p className="text-[#888] text-base sm:text-lg mt-2">
                            Be the first to claim the throne.
                        </p>

                        <Link
                            to="/"
                            className="mt-6 rounded-lg px-7 py-3 font-semibold
                                       bg-[#F4C95D] text-[#071827]
                                       hover:bg-[#ffe08a]
                                       hover:scale-[1.02]
                                       transition-all duration-200
                                       shadow-lg shadow-[#F4C95D]/10"
                        >
                            Play Again
                        </Link>

                    </div>
            }

        </div>
    )
}

export default Leaderboard
