import React, { useState, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";
import style from "./Table.module.scss";
import clsx from "clsx";
import TableItem from "./TableItem";
import LineChart from "../Chart/LineChart";

const Table = ({ tableTitle, showTop, loading, playlist, chart }) => {
  const [showBtn, setShowBtn] = useState(showTop);
  const tableRef = useRef();

  return (
    <div className={clsx(style.tableCover)}>
      {tableTitle && (
        <div className={style.headerCover}>
          <h1 className={style.header}>{tableTitle}</h1>
          <button className={style.btnIcon}>
            <BsPlayFill />
          </button>
        </div>
      )}

      {chart && <LineChart />}

      <div
        className={clsx(style.tableFullHeight, {
          [style.table]: showBtn,
        })}
        ref={tableRef}
      >
        {loading ? (
          <>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
            <div className="skeleton__tableItem"></div>
          </>
        ) : (
          playlist.map((item, index) => (
            <TableItem key={item.encodeId} index={index} item={item} />
          ))
        )}
      </div>

      {showTop && showBtn && (
        <div className={style.isCenter}>
          <button className={style.btnTop} onClick={() => setShowBtn(false)}>
            Xem top 100
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
