"use client";

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export function AudioIcon() {
  const [audio, updateAudio] = useState(false);
  useEffect(() => {
    const myPlay = new Audio("/music.mp3");
    audio ? myPlay.play() : myPlay.pause();
    return () => myPlay.pause();
  }, [audio]);
  const onClick = () => {
    console.log("start/stop");
    updateAudio(!audio);
  };
  return audio ? (
    <button onClick={onClick} className="fixed top-0 left-0 z-2">
      <SpeakerWaveIcon
        className="block h-6 w-6 text-white"
        aria-hidden="true"
      />
    </button>
  ) : (
    <button onClick={onClick} className="fixed top-0 left-0 z-2">
      <SpeakerXMarkIcon
        className="block h-6 w-6 text-white"
        aria-hidden="true"
        onClick={onClick}
      />
    </button>
  );
}
