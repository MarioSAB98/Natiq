import React, { useState, useEffect } from 'react'

export default function AudioPlayer({ audio }) {

    const [playing, toggle] = useAudio(audio);

    return (
        <div className="w-full">
            <div className='flex w-8/12  bg-white shadow-md shadow-primary rounded-lg overflow-hidden mx-auto'>
                <div className="flex flex-col w-full">


                    <div className="flex flex-col sm:flex-row items-center p-5">
                        <div className="flex items-center">
                            <div className="flex space-x-3 p-2">

                                {/* back button */}
                                <button className="focus:outline-none">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                                </button>

                                {/* play button */}
                                <button onClick={toggle} className="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-primary focus:outline-none">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </button>

                                {/* forward button */}
                                <button className="focus:outline-none">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#570df8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2">
                            <div className="bg-secondary h-2 w-full rounded-lg"></div>
                            <div className="bg-primary h-2 w-1/2 rounded-lg absolute top-0"></div>

                        </div>
                        <div className="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
                            <span className="text-xs text-primary uppercase font-medium pl-2">
                                02:00/04:00
                            </span>
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
    let speech = new Audio("data:audio/wav;base64," + audio);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? speech.play() : speech.pause();
    },
        [playing]
    );

    useEffect(() => {
        speech.addEventListener('ended', () => setPlaying(false));
        return () => {
            speech.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

// const Player = ({ url }) => {
//     const [playing, toggle] = useAudio(url);

//     return (
//         <div>
//             <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//         </div>
//     );
// };