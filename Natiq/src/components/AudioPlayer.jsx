import React, { useState, useEffect, useRef } from 'react'

export default function AudioPlayer({ audio }) {

    const [playing, toggle] = useAudio(audio);

    return (
        <div className="w-full">
            <div className='flex  bg-primary shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] shadow-primary rounded-full overflow-hidden mx-auto w-[40%] h-16'>
                <div className="flex flex-col w-full">


                    <div className="flex flex-col sm:flex-row items-center relative">
                        <div className="flex items-center absolute top-[0%] left-[45%]">
                            <div className="flex pt-2">

                                {/* play button */}
                                <button onClick={toggle}>
                                    {!playing ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="hsl(var(--nc))" className="w-12 h-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>

                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="hsl(var(--nc))" className="w-12 h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// if (audio) {
//     var snd = new Audio("data:audio/wav;base64," + audio);
//     snd.play();
// }


const useAudio = (audio) => {
    let speech = useRef(new Audio("data:audio/wav;base64," + audio));
    const [playing, setPlaying] = useState(true);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? speech.current.play() : speech.current.pause();
    },
        [playing]
    );

    useEffect(() => {
        speech.current.addEventListener('ended', () => setPlaying(false));
        return () => {
            speech.current.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

// const Player = ({ audio }) => {
//     const [playing, toggle] = useAudio(audio);

//     return (
//         <div>
//             <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//         </div>
//     );
// };

// export default Player;
