import { useEffect, useRef } from "react";

function Dialog_Modal({ ismodalOpen , elapsedTime}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (ismodalOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [ismodalOpen]);
    function formatTime(){
        
        let minutes = Math.floor(elapsedTime/(1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")

        return `${minutes}:${seconds}`
    }
    return (
        <dialog
            ref={dialogRef}
            className="justify-self-center self-center max-w-lg w-full rounded-2xl border border-[#28506D]
                        bg-[#071827]/95 p-8
                       text-[#F5F0DF]
                       shadow-2xl flex flex-col items-center"
        >
            <h1 className="text-2xl font-serif font-bold text-[#F4C95D]">
                Level Completed
            </h1>

            <p className="mt-3 text-sm text-[#9FB3C8]">
                You found all three characters!
            </p>
            <h1>
               {
            formatTime()
           }
            </h1>
            <button
                className="mt-6 rounded-lg
                           bg-[#F4C95D]
                           px-5 py-2
                           font-semibold text-[#071827]
                           hover:bg-[#e8bb4f]"
            >
                Next Level
            </button>
        </dialog>
    );
}

export default Dialog_Modal;