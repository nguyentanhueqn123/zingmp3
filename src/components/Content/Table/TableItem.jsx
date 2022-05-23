import React from "react";
import clsx from "clsx";
import style from "./Table.module.scss";
import { MdHorizontalRule } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../../../redux/reducer/songSlice";
import format from "format-duration";
import { setIndexZingChart } from "../../../redux/reducer/zingChartSlice";

const TableItem = ({ item, index, icon }) => {
  const isPlay = useSelector((state) => state.home.isPlay);
  const songId = useSelector((state) => state.song.songId);
  const dispatch = useDispatch();

  const handleSelectSong = (
    album,
    encodeId,
    thumbnail,
    thumbnailM,
    title,
    artistsNames,
    duration
  ) => {
    const song = {
      album,
      encodeId,
      thumbnail,
      thumbnailM,
      title,
      artistsNames,
      duration,
    };
    dispatch(createSong(song));
    dispatch(setIndexZingChart(index));
  };

  return (
    <div
      className={clsx(style.list, {
        [style.active]: item.encodeId === songId,
      })}
      onClick={() =>
        handleSelectSong(
          item.album,
          item.encodeId,
          item.thumbnail,
          item.thumbnailM,
          item.title,
          item.artistsNames,
          item.duration
        )
      }
    >
      <div className={style.media}>
        <div className={style.mediaLeft}>
          <div className={style.songPrefix}>
            <span className={clsx(style.number, `number${index + 1}`)}>
              {index + 1}
            </span>

            <div className={style.sort}>
              <MdHorizontalRule />
            </div>
          </div>

          <div className={style.songThumb}>
            <img
              src={item.thumbnail}
              alt={item.thumbnail}
              className={style.img}
            />
            <div className={style.actionContainer}>
              {item.encodeId === songId && isPlay ? (
                <img
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                  alt=""
                  className={style.img}
                />
              ) : (
                <BsPlayFill />
              )}
            </div>
          </div>
          <div className={style.cardInfo}>
            <h4 className={style.title}>{item.title}</h4>
            <p className={style.singer}>{item.artistsNames}</p>
          </div>
        </div>

        <div className={style.mediaContent}>
          <a href="#" className={style.link}>
            {/* {item.album.title} */}
          </a>
        </div>

        <div className={style.mediaRight}>
          <div className={style.timeDuration}>
            {format(item.duration * 1000)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
