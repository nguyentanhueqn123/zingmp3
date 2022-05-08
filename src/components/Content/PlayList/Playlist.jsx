import React from "react";
import clsx from "clsx";
import { VscHeart } from "react-icons/vsc";
import { BsPlayCircle } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import style from "./Playlists.module.scss";

const Playlist = ({ title, playlist }) => {
  return (
    <div className={clsx(style.playlist, "grid")}>
      <h3 className={style.header}>{title}</h3>
      <ul className={clsx(style.list, "row")}>
        {playlist.map((plist, i) => (
          <li className={clsx(style.card, "col m-2")} key={i}>
            <a href="#" className={style.link}>
              <div className={style.container}>
                <img src={plist.thumbnail} alt="" className={style.img} />

                <div className={style.itemAction}>
                  <div className={clsx("btn btn--m", style.btnHeart)}>
                    <VscHeart />
                  </div>
                  <div className={clsx("btn btn--l", style.btnHeart)}>
                    <BsPlayCircle />
                  </div>
                  <div className={clsx("btn btn--m", style.btnHeart)}>
                    <HiOutlineDotsHorizontal />
                  </div>
                </div>
                <div className={style.overlay}></div>
              </div>
              <p className={style.title}>{plist.title}</p>
              <p className={style.description}>{plist.sortDescription}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
