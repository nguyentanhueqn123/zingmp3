import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import style from "./Content.module.scss";
import axios from "axios";
import { showTopChart } from "../../redux/reducer/zingchartSlice";
import {
  showBanner,
  showPlaylist,
  showTitle,
} from "../../redux/reducer/khamphaSlice";

const Content = () => {
  const dispatch = useDispatch();

  // get api khampha
  useEffect(() => {
    const getPlaylistSong = async () => {
      const res = await axios
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
    getPlaylistSong();

    // const promise = () =>
    //   Promise.all([getPlaylistSong(), getZingChart()])
    //     .then(([res1, res2]) => {
    //       const playlists = {
    //         playlist1: res1.data.data.items[3].items,
    //         playlist2: res1.data.data.items[4].items,
    //         playlist3: res1.data.data.items[5].items,
    //       };
    //       const titles = {
    //         title1: res1.data.data.items[3].title,
    //         title2: res1.data.data.items[4].title,
    //         title3: res1.data.data.items[5].title,
    //       };
    //       dispatch(showBanner(res1.data.data.items[0].items));
    //       dispatch(showPlaylist(playlists));
    //       dispatch(showTitle(titles));
    //       console.log(res1.data.data);

    //       console.log(res2.data.data);
    //       dispatch(showTopChart(res2.data.data.RTChart.items));
    //     })
    //     .catch((err) => console.log(err));

    // promise();
  }, []);

  // get api charHome (zingchart)
  useEffect(() => {
    const getZingChart = async () => {
      const res = await axios
        .get("https://music-player-pink.vercel.app/api/chart-home")
        .then((res) => {
          console.log(res.data.data);
          dispatch(showTopChart(res.data.data.RTChart.items));
        })
        .catch((err) => console.log(err));
    };
    getZingChart();
  }, []);

  return (
    <div className={style.content}>
      <div className={style.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
