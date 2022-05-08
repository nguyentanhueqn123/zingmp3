import React, { useEffect } from "react";
import axios from "axios";
import style from "./FullScreen.module.scss";
import clsx from "clsx";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineOpenInFull } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { renderLyrics } from "../../redux/reducer/songSlice";
import { setFullScreen } from "../../redux/reducer/homeSlice";
const FullScreen = () => {
  const dispatch = useDispatch();
  const thumbnailM = useSelector((state) => state.song.thumbnailM);
  const title = useSelector((state) => state.song.title);
  const artistsNames = useSelector((state) => state.song.artistsNames);

  useEffect(() => {
    const getLyrics = async () => {
      const res = await axios
        .get("https://music-player-pink.vercel.app/api/lyric?id=ZOACFBBU")
        .then((res) => dispatch(renderLyrics(res.data.data.sentences)))
        .catch((err) => console.log(err));
    };
    getLyrics();
  }, []);

  return (
    <div className={style.fullscreenCover}>
      <div className={style.fullscreen}>
        <div className={style.header}>
          <div className={style.left}>
            <img
              src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg"
              alt="img icon zing mp3"
              className="imgIcon"
            />
            <div className={style.text}>
              <h2 className={style.header}>Từ playlist</h2>
              <p className={style.des}>#zingchart</p>
            </div>
          </div>
          <div className={style.tabs}>
            <div className={clsx(style.tabItem, style.active)}>
              Danh sách phát
            </div>
            <div className={style.tabItem}>Karaoke</div>
            <div className={style.tabItem}>Lời bài hát</div>
          </div>
          <div className={style.actionGroup}>
            <button className={clsx("btn", style.actionIcon)}>
              <MdOutlineOpenInFull />
            </button>
            <button className={clsx("btn", style.actionIcon)}>
              <IoSettingsOutline />
            </button>
            <button
              className={clsx("btn", style.actionIcon)}
              onClick={() => dispatch(setFullScreen(false))}
            >
              <BsChevronDown />
            </button>
          </div>
        </div>

        <div className={style.container}>
          <div className={style.imgCover}>
            <img src={thumbnailM} alt="img artist" className={style.img} />
            <h2 className={style.title}>{title}</h2>
            <p className={style.des}>{artistsNames}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
