import React, { useRef, forwardRef } from "react";
import style from "./Volume.module.scss";
import clsx from "clsx";
import { GiMicrophone } from "react-icons/gi";
import { VscMultipleWindows, VscMute, VscUnmute } from "react-icons/vsc";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setVolume } from "../../../redux/reducer/homeSlice";

const Volume = (props, ref) => {
  const audioRef = ref;
  const volumeRef = useRef();
  const volumePercentRef = useRef();
  const dispatch = useDispatch();
  const mute = useSelector((state) => state.home.mute);
  const volume = useSelector((state) => state.home.volume);
  const volumePercentage = useSelector((state) => state.home.volumePercentage);

  const handleVolume = (e) => {
    if (audioRef.current.volume * 100 !== volumeRef.value) {
      volumePercentRef.current.style.width = volumeRef.current.value + "%";
      audioRef.current.volume = volumeRef.current.value / 100;
      const jsonVolume = {
        volume: audioRef.current.volume,
        volumePercentage: `${volumeRef.current.value}%`,
      };
      dispatch(setVolume(jsonVolume));
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
          value={volume * 100}
          min="0"
          max="100"
          className={style.volumeCover}
          onChange={handleVolume}
        />
        <div className={style.volumeBar}>
          <div
            ref={volumePercentRef}
            className={style.bar}
            style={{ width: volumePercentage }}
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
