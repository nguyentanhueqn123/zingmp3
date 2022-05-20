import React, { useEffect, useState } from "react";
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
  const tabs = [
    {
      index: 1,
      name: "Danh sách phát",
    },
    {
      index: 2,
      name: "Karaoke",
    },
    {
      index: 3,
      name: "Lời bài hát",
    },
  ];
  const dispatch = useDispatch();
  const [tabActive, setTabActive] = useState(1);
  const lyrics = useSelector((state) => state.song.lyric);
  console.log(lyrics);
  const time = useSelector((state) => state.home.time);
  console.log(time);
  const songId = useSelector((state) => state.song.songId);
  const thumbnailM = useSelector((state) => state.song.thumbnailM);
  const title = useSelector((state) => state.song.title);
  const artistsNames = useSelector((state) => state.song.artistsNames);

  useEffect(() => {
    const getLyrics = async () => {
      await axios
        .get(`https://music-player-pink.vercel.app/api/lyric?id=${songId}`)
        .then((res) => {
          dispatch(renderLyrics(res.data.data.sentences));
        })
        .catch((err) => console.log(err));
    };
    getLyrics();
  }, [dispatch, songId]);

  return (
    <div className={style.fullscreenCover}>
      <div className={style.fullscreen}>
        <div className={style.header}>
          <div className={style.left}>
            <img
              src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg"
              alt="img icon zing mp3"
              className={style.imgIcon}
            />
            <div className={clsx(style.text)}>
              <h2 className={style.header}>Từ playlist</h2>
              <p className={style.des}>#zingchart</p>
            </div>
          </div>

          <div className={style.tabs}>
            {tabs.map((tab, i) => (
              <div
                className={clsx(style.tabItem, {
                  [style.active]: i + 1 === tabActive,
                })}
                key={i + 1}
                onClick={() => setTabActive(i + 1)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          <div className={style.actionGroup}>
            <button className={clsx("btn", style.actionIcon, style.none)}>
              <MdOutlineOpenInFull />
            </button>
            <button className={clsx("btn", style.actionIcon, style.none)}>
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

        {tabActive === 1 && (
          <div className={style.container}>
            <div className={style.imgCover}>
              <img src={thumbnailM} alt="img artist" className={style.img} />
            </div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.des}>{artistsNames}</p>
          </div>
        )}

        {tabActive === 2 && (
          <div className={style.karaokeCover}>
            <div className={style.karaoke}>
              {lyrics.map((lyric, index) => (
                <p className={style.karaokeLine} key={index}>
                  {lyric.words.map((l, i) => (
                    <span
                      className={clsx(style.karaokeItem, {
                        [style.karaokeItemActive]: true,
                      })}
                      key={i}
                    >
                      {l.data}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        )}

        {tabActive === 3 && (
          <div className={clsx(style.wrapper)}>
            <div className={style.itemLeft}>
              <div className={style.mainLeft}>
                <div className={style.itemImg}>
                  <img
                    src={thumbnailM}
                    alt="img artist"
                    className={style.img}
                  />
                </div>
              </div>
            </div>
            <div className={style.itemRight}>
              <h2 className={style.lineTitle}>Bài Hát: {title}</h2>
              <div className={style.lyric}>
                {lyrics.map((lyric, index) => (
                  <p className={style.lyricLine} key={index}>
                    {lyric.words.map((l, i) => (
                      <span
                        className={clsx(style.lineItem, {
                          [style.lineItemActive]: true,
                        })}
                        key={i}
                      >
                        {l.data}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreen;
