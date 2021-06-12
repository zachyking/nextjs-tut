import React, { useEffect, useRef } from 'react'
import AudioPlayer from '../components/AudioPlayer'
import SoundNFT from '../components/SoundNFT'
import { NFTData } from '../interfaces/interfaces'
//import p5 from 'p5'
import dynamic from "next/dynamic";

const P5Comp = dynamic(() => import("../components/p5test"),
  { ssr: false }
);

export default function Sounds() {
    
    return (
        <>
           {/* <SoundNFT soundNFTData="https://filesamples.com/samples/audio/flac/sample3.flac" />
            <AudioPlayer url={soundNFTData.media} />*/}
            <P5Comp />
        </>
    )
}