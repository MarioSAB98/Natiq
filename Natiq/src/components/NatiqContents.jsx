import React, { useState } from 'react'
import Player from './AudioPlayer';
import { decode } from 'url-safe-base64';
import { isBase64 } from 'url-safe-base64';


export default function NatiqContents() {
    const [loading, setLoading] = useState(false);
    const [audio, setAudio] = useState();
    const [errorMSG, setErrorMSG] = useState("");
    const [val, setVal] = useState("");


    const checkChars = (e) => {
        const regex = /^[\u0621-\u064A . ]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setVal(e.target.value);
        }
    }


    return (
        <>
            <div dir="ltr" className="relative w-full">
                <textarea value={val} onChange={checkChars} disabled={loading ? true : false} id="textArea" dir="rtl" className=" shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] textarea textarea-primary m-12 mb-0 h-80 w-[80%] text-right" placeholder="اكتب النص هنا..."></textarea>
                {loading && <span className="absolute top-[40%] left-[50%] loading loading-spinner text-primary"></span>}
                <div className="flex-row">
                    <button disabled={loading ? "disabled" : ""}
                        onClick={() => { callNatiq(setLoading, setAudio, setErrorMSG, val) }}
                        className=" shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] btn btn-primary m-8 w-32 text-white">Echo</button>
                    <button disabled={loading ? "disabled" : ""} onClick={() => { clear(setAudio, setVal) }} className=" shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] btn btn-primary m-8 w-32 text-white">Clear</button>
                </div>
            </div>
            {audio && <Player audio={audio} />}


            {errorMSG && <div className="toast toast-center">
                <div className="alert alert-error">
                    <span>{errorMSG}</span>
                </div>
            </div>}

        </>
    );
}


const clear = (setAudio, setVal) => {
    setVal("");
}

const callNatiq = (setLoading, setAudio, setErrorMSG, val) => {
    setAudio("");
    setErrorMSG("");
    setLoading(true);
    let textData = val;

    if (textArea.value) {
        let lastWord = textArea.value.split(" ");
        lastWord = lastWord[lastWord.length - 1];
        textData = textData + lastWord + lastWord;
    }

    var formdata = { text: textData };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(formdata),
        redirect: 'follow'
    };
    fetch("https://echo-6sdzv54itq-uc.a.run.app/natiq", requestOptions)
        .then(response => { setLoading(false); return (response.json()) })
        .then(result => {
            console.log(result);
            const { wave, description } = result;
            if (wave) {
                let wave_base64 = decode(wave);

                if (isBase64(wave_base64)) {
                    setAudio(wave_base64);
                }
            }

            if (description) {
                setErrorMSG(description);
                setTimeout(function () {
                    setErrorMSG("");;
                }, 5000);
            }

        })
        .catch(error => console.log('error', error));
}