import React from "react";
import clsx from "clsx";
import { VscHeart } from "react-icons/vsc";
import { BsPlayCircle } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import style from "./Playlists.module.scss";
import { Link } from "react-router-dom";

const Playlist = ({ title, playlist }) => {
  return (
    <div className={clsx("grid mt-4")}>
      <h3 className={style.header}>{title}</h3>
      <div className={clsx("row", style.list)}>
        {playlist.map((plist, i) => (
          <div className="col l-2-4 m-3 c-4" key={i}>
            <div className={clsx(style.card)} key={i}>
              <Link to="/album" className={style.link}>
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
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
