import React from "react";
import PlayLists from "../PlayList/Playlists";
import style from "./Top100Page.module.scss";

const Top100Page = () => {
  return (
    <div className={style.cover}>
      <div className={style.header}>
        <div className={style.blur}></div>
        <div className={style.alpha}></div>
      </div>
      <div className={style.container}>
        <PlayLists />
      </div>
    </div>
  );
};

export default Top100Page;
