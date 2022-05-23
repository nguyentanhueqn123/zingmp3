import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import style from "./Content.module.scss";
import axios from "axios";
import { showTopChart } from "../../redux/reducer/zingChartSlice";
import {
  showBanner,
  showPlaylist,
  showTitle,
  showSectionId,
} from "../../redux/reducer/exploreSlice";
import { showNewSong } from "../../redux/reducer/newSongSlice";

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
    // get api explore page
    const getPlaylistSong = async () => {
      await axios
        .get("https://music-player-pink.vercel.app/api/home?page=1")
        .then((res) => {
          const titles = {
            title1: res.data.data.items[3].title,
            title2: res.data.data.items[4].title,
            title3: res.data.data.items[5].title,
          };
          const sectionId = {
            sectionId1: res.data.data.items[3].sectionId,
            sectionId2: res.data.data.items[4].sectionId,
            sectionId3: res.data.data.items[5].sectionId,
          };
          const playlists = {
            playlist1: res.data.data.items[3].items,
            playlist2: res.data.data.items[4].items,
            playlist3: res.data.data.items[5].items,
          };
          dispatch(showBanner(res.data.data.items[0].items));
          dispatch(showTitle(titles));
          dispatch(showSectionId(sectionId));
          dispatch(showPlaylist(playlists));
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
