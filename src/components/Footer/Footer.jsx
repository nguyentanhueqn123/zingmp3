import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import axios from "axios";
import Timer from "./Timer";
import format from "format-duration";
import { AiFillHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { BsThreeDots, BsPlayFill } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { IoIosPause } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import { VscMultipleWindows, VscMute, VscUnmute } from "react-icons/vsc";
import { MdOpenInFull } from "react-icons/md";
import {
  MdOutlineVideoLibrary,
  MdSkipPrevious,
  MdSkipNext,
} from "react-icons/md";
import style from "./Footer.module.scss";
import {
  renderSong,
  setLoading,
  createSong,
  setRandom,
  setRepeat,
} from "../../redux/reducer/songSlice";
import { setFullScreen, setMute, setPlay } from "../../redux/reducer/homeSlice";
import { setIndexZingChart } from "../../redux/reducer/zingchartSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const audio = document.querySelector("#audio");
  const progressUpdate = document.querySelector("#progressTrackUpdate");
  const volume = document.querySelector("#volume");
  const volumePercent = document.querySelector("#volumePercent");
  const btnNext = document.querySelector("#btnNext");
  const isPlay = useSelector((state) => state.home.isPlay);
  const mute = useSelector((state) => state.home.mute);

  const storageSong = JSON.parse(localStorage.getItem("song"));
  const storageVolume = JSON.parse(localStorage.getItem("volume"));

  const index = useSelector((state) => state.zingchart.index);
  const indexNewSong = useSelector((state) => state.moiphathanh.index);
  const topCharts = useSelector((state) => state.zingchart.topCharts);
  const isRandom = useSelector((state) => state.song.isRandom);
  const isRepeat = useSelector((state) => state.song.isRepeat);
  const loading = useSelector((state) => state.song.loading);
  const songId = useSelector((state) => state.song.songId);
  const songUrl = useSelector((state) => state.song.songUrl);
  const thumbnail = useSelector((state) => state.song.thumbnail);
  const title = useSelector((state) => state.song.title);
  const artistsNames = useSelector((state) => state.song.artistsNames);
  const duration = useSelector((state) => state.song.duration);
  const albumId = useSelector((state) => state.song.album.encodeId);
  const albumPlayList = useSelector((state) => state.song.albumPlayList);

  useEffect(() => {
    const render = async () => {
      const res = await axios
        .get(`https://music-player-pink.vercel.app/api/song?id=${songId}`)
        .then((res) => {
          // get value in array 128, vip
          const data = Object.values(res.data.data);
          dispatch(renderSong(data[0]));
          // set indexZingChart
          localStorage.setItem("indexZingChart", JSON.stringify(index));
          localStorage.setItem("indexNewSong", JSON.stringify(indexNewSong));
        })
        .catch((err) => console.error(err));
    };

    render();
    return () => {
      dispatch(setLoading(true));
    };
  }, [dispatch, songId, index]);

  // useEffect(() => {
  //   const getList = async () => {
  //     const res = await axios
  //       .get(`https://music-player-pink.vercel.app/api/playlist?id=${albumId}`)
  //       .then((res) => {
  //         dispatch(renderAlbumPlayList(res.data.data.sections[0].items));
  //         console.log(albumPlayList[index].encodeId);
  //         dispatch(createSong(albumPlayList[index]));
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   getList();
  // }, [index]);

  const handleUpdatePercentage = () => {
    if (audio.duration) {
      const progressPercentage = Math.floor(
        (audio.currentTime / audio.duration) * 100
      );
      progressUpdate.style.width = progressPercentage + "%";
    }
  };
  const handleSeekTime = (e) => {
    const seekTime = (audio.duration / 100) * e.target.value;
    audio.currentTime = seekTime;
  };

  const handleVolume = () => {
    if (audio.volume * 100 !== volume.value) {
      volumePercent.style.width = volume.value + "%";
      audio.volume = volume.value / 100;
      // dispatch(setMute(false));

      // if (audio.volume === 0) {
      //   dispatch(setMute(true));
      // }
      const jsonVolume = {
        volume: audio.volume,
        volumePercent: `${volume.value}%`,
      };
      localStorage.setItem("volume", JSON.stringify(jsonVolume));
    }
  };

  const handleBtnPlay = () => {
    dispatch(setPlay(!isPlay));
    isPlay ? audio.pause() : audio.play();
  };

  const nextSong = () => {
    if (index >= topCharts.length - 1) {
      dispatch(setIndexZingChart(0));
      dispatch(createSong(topCharts[0]));
    } else {
      dispatch(setIndexZingChart(index + 1));
      dispatch(createSong(topCharts[index + 1]));
    }
    dispatch(setPlay(true));
    setTimeout(() => !loading && audio.play(), 4000);
  };
  const preSong = () => {
    if (index <= 0) {
      dispatch(setIndexZingChart(topCharts.length - 1));
      dispatch(createSong(topCharts[topCharts.length - 1]));
    } else {
      dispatch(setIndexZingChart(index - 1));
      dispatch(createSong(topCharts[index - 1]));
    }
    dispatch(setPlay(true));
    setTimeout(() => !loading && audio.play(), 4000);
  };

  const randomSong = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * topCharts.length);
    } while (newIndex === index);
    dispatch(setIndexZingChart(newIndex));
    dispatch(createSong(topCharts[newIndex]));
  };
  // bật/tắt màu btn random song
  const handleBtnRandom = () => {
    dispatch(setRandom(!isRandom));
  };

  const handleBtnRepeat = () => {
    dispatch(setRepeat(!isRepeat));
  };
  const handleBtnNext = () => {
    isRandom ? randomSong() : nextSong();
  };

  const handleBtnPre = () => {
    preSong();
  };

  const handleAudioEnd = () => {
    isRepeat ? audio.play() : btnNext.click();
  };

  return (
    <div className={style.playerControl}>
      <div className={style.playerLeft}>
        <div className={style.media}>
          <div
            className={clsx(style.mediaLeft, "audioThumbnail")}
            onClick={() => dispatch(setFullScreen(true))}
          >
            <img src={thumbnail} alt="" className={style.img} />
            <div className={style.imgCover}>
              <MdOpenInFull />
            </div>
          </div>
          <div className={style.mediaCenter}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.des}>{artistsNames}</p>
          </div>
          <div className={style.mediaRight}>
            <div className={clsx("btn", style.iconSmall)}>
              <AiFillHeart />
            </div>
            <div className={clsx("btn", style.iconSmall)}>
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className={style.playerCenter}>
        <div className={style.controller}>
          {/* btn random */}
          <button
            className={clsx("btn", style.iconMedium, {
              [style.active]: isRandom,
            })}
            onClick={handleBtnRandom}
          >
            <FaRandom />
          </button>

          {/* btn pre */}
          <button
            id="btnPre"
            className={clsx("btn ", style.iconAction)}
            onClick={handleBtnPre}
          >
            <MdSkipPrevious />
          </button>

          {/* btn play */}
          {loading ? (
            <button className={clsx("btn ", style.iconLoading)}>
              <BiLoader />
            </button>
          ) : (
            <button
              className={clsx("btn ", style.iconPlay)}
              onClick={handleBtnPlay}
            >
              {isPlay ? <IoIosPause /> : <BsPlayFill />}
            </button>
          )}

          {/* btn next */}
          <button
            id="btnNext"
            className={clsx("btn ", style.iconAction)}
            onClick={handleBtnNext}
          >
            <MdSkipNext />
          </button>

          {/* btn repeat */}
          <button
            className={clsx("btn", style.iconMedium, {
              [style.active]: isRepeat,
            })}
            onClick={handleBtnRepeat}
          >
            <ImLoop />
          </button>
        </div>

        <div className={style.progressBlock}>
          {audio && <Timer audio={audio} />}
          <input
            type="range"
            value="0"
            step="1"
            min="0"
            max="100"
            className={style.progress}
            onChange={handleSeekTime}
          />
          <div className={style.progressTrack}>
            <div
              id="progressTrackUpdate"
              className={style.progressTrackUpdate}
            ></div>
          </div>
          {audio ? (
            <span className={style.duration}>{format(duration * 1000)}</span>
          ) : (
            <span className={style.duration}>
              {format(storageSong.duration * 1000)}
            </span>
          )}
        </div>
      </div>

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
      <audio
        src={songUrl}
        id="audio"
        controls
        onTimeUpdate={handleUpdatePercentage}
        onEnded={handleAudioEnd}
      />
    </div>
  );
};

export default Footer;
