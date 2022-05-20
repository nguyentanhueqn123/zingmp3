import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import style from "./Content.module.scss";
import axios from "axios";
import { showTopChart } from "../../redux/reducer/zingchartSlice";
import {
  showBanner,
  showPlaylist,
  showTitle,
} from "../../redux/reducer/khamphaSlice";
import { showNewSong } from "../../redux/reducer/moiphathanhSlice";

const Content = ({ handleScroll }, ref) => {
  const dispatch = useDispatch();

  const contentRef = useRef();
  const mainRef = useRef();
  useImperativeHandle(ref, () => ({
    showHeader() {
      return contentRef.current.scrollY || contentRef.current.scrollTop;
    },
  }));

  useEffect(() => {
    // get api khampha
    const getPlaylistSong = async () => {
      await axios
        .get("https://music-player-pink.vercel.app/api/home?page=1")
        .then((res) => {
          const playlists = {
            playlist1: res.data.data.items[3].items,
            playlist2: res.data.data.items[4].items,
            playlist3: res.data.data.items[5].items,
          };
          const titles = {
            title1: res.data.data.items[3].title,
            title2: res.data.data.items[4].title,
            title3: res.data.data.items[5].title,
          };
          dispatch(showBanner(res.data.data.items[0].items));
          dispatch(showPlaylist(playlists));
          dispatch(showTitle(titles));
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    // get api charHome (zingchart)
    const getZingChart = async () => {
      await axios
        .get("https://music-player-pink.vercel.app/api/chart-home")
        .then((res) => {
          console.log(res.data.data);
          dispatch(showTopChart(res.data.data.RTChart.items));
        })
        .catch((err) => console.log(err));
    };

    // get api nhac moi
    const getApiNhacMoiPage = async () => {
      await axios
        .get("https://music-player-pink.vercel.app/api/home?page=4")
        .then((res) => {
          dispatch(showNewSong(res.data.data.items[0].items));
        })
        .catch((err) => console.log(err));
    };
    getApiNhacMoiPage();
    getZingChart();
    getPlaylistSong();
  }, []);

  return (
    <div className={style.content} onScroll={handleScroll} ref={contentRef}>
      <div className={style.main} ref={mainRef}>
        <Outlet />
      </div>
    </div>
  );
};

export default forwardRef(Content);
