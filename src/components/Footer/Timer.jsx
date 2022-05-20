import React, { useState } from "react";
import style from "./Footer.module.scss";
import format from "format-duration";
const Timer = ({ audio }) => {
  const [time, setTime] = useState("0:00");

  audio.ontimeupdate = () => {
    let second = Math.floor(audio.currentTime) * 1000;
    setTime(format(second, { leading: true }));
  };
  return <span className={style.trackTime}>{time}</span>;
};

export default Timer;
