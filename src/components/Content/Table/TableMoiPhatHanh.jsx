import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import style from "./Table.module.scss";
import TableItem from "./TableItem";

const TableMoiPhatHanh = ({ tableTitle }) => {
  const newSongs = useSelector((state) => state.moiphathanh.newSongs);
  const loading = useSelector((state) => state.moiphathanh.loading);

  return (
    <div className={style.tableCover}>
      <div className={style.headerCover}>
        <h1 className={style.header}>{tableTitle}</h1>
        <button className={style.btnIcon}>
          <BsPlayFill />
        </button>
      </div>

      <div className="table">
        {loading ? (
          <>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
          </>
        ) : (
          newSongs.map((item, index) => (
            <TableItem key={item.encodeId} index={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default TableMoiPhatHanh;
