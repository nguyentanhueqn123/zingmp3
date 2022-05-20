import React, { useRef, forwardRef } from "react";
import style from "./Volume.module.scss";
import clsx from "clsx";
import { GiMicrophone } from "react-icons/gi";
import { VscMultipleWindows, VscMute, VscUnmute } from "react-icons/vsc";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useSelector } from "react-redux";

const Volume = ({}, ref) => {
  const volumeRef = useRef();
  const volumePercentRef = useRef();
  const storageVolume = JSON.parse(localStorage.getItem("volume"));
  const mute = useSelector((state) => state.home.mute);
  const audioRef = ref;

  const handleVolume = () => {
    if (audioRef.current.volume * 100 !== volumeRef.value) {
      volumePercentRef.current.style.width = volumeRef.current.value + "%";
      audioRef.current.volume = volumeRef.current.value / 100;
      // dispatch(setMute(false));

      // if (audioRef.current.volume === 0) {
      //   dispatch(setMute(true));
      // }
      const jsonVolume = {
        volume: audioRef.current.volume,
        volumePercent: `${volumeRef.current.value}%`,
      };
      localStorage.setItem("volume", JSON.stringify(jsonVolume));
    }
  };
  return (
    <div className={style.playerRight}>
      <button className={clsx("btn", style.iconMore)}>
        <MdOutlineVideoLibrary />
      </button>
      <button className={clsx("btn", style.iconMore)}>
        <GiMicrophone />
      </button>
      <button className={clsx("btn", style.iconMore)}>
        <VscMultipleWindows />
      </button>
      <div className={style.playerVolume}>
        <button className={clsx("btn", style.iconMore)}>
          {mute ? <VscMute /> : <VscUnmute />}
        </button>
        <input
          ref={volumeRef}
          type="range"
          name=""
          id="volume"
          value={storageVolume.volume || 100}
          min="0"
          max="100"
          className={style.volumeCover}
          onChange={handleVolume}
        />
        <div className={style.volumeBar}>
          <div
            ref={volumePercentRef}
            className={style.bar}
            style={{ width: storageVolume.volumePercent }}
            id="volumePercent"
          ></div>
        </div>
      </div>
      <button className={clsx("btn", style.iconMore)}>
        <AiOutlineUnorderedList />
      </button>
    </div>
  );
};

export default forwardRef(Volume);
