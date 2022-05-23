import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import style from "./Album.module.scss";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import clsx from "clsx";

const Song = () => {
  const songInfo = useSelector((state) => state.home.songInfo);
  const topCharts = useSelector((state) => state.zingChart.topCharts);
  const loading = useSelector((state) => state.zingChart.loading);

  return (
    <div className={style.cover}>
      <div className="grid">
        <div className="row">
          <div className={clsx("col l-4", style.center)}>
            <div className={style.sectionLeft}>
              <div className={style.imgCover}>
                <img
                  src={songInfo.thumbnailM}
                  alt="img-song"
                  className={style.sectionImg}
                />
                <div className={style.alphaBackground}>
                  <div className={style.alphaIcon}>
                    <BsPlayFill />
                  </div>
                </div>
              </div>
              <div className={style.sectionTitle}>{songInfo.title}</div>
              <div className={style.sectionDes}>{songInfo.artistsNames}</div>
              <button className={style.sectionBtn}>
                <div className={style.btnIcon}>
                  <BsPlayFill />
                </div>
                <div className={style.btnDes}>Phát tất cả </div>
              </button>
            </div>
          </div>
          <div className="col l-8">
            <div className={style.mediaHeader}>
              <div className={style.mediaLeft}>Bài hát</div>
              <div className={style.mediaRight}>Thời gian</div>
            </div>
            <TableItem item={songInfo} index={-1} />
            <div className={style.mediaTitle}>Có Thể Bạn Quan Tâm</div>
            <Table playlist={topCharts} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
