import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import style from "./Table.module.scss";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";

const Table = ({ tableTitle }) => {
  const [showBtn, setShowBtn] = useState(true);
  const topCharts = useSelector((state) => state.zingchart.topCharts);
  const loading = useSelector((state) => state.zingchart.loading);

  const handleShowTop100 = () => {
    const table = document.querySelector(".table");
    table.classList.add("table--ful-height");
    setShowBtn(false);
  };

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
          topCharts.map((item, index) => (
            <TableItem key={item.encodeId} index={index} item={item} />
          ))
        )}
      </div>

      {showBtn && (
        <div className={style.isCenter}>
          <button className={style.btnTop} onClick={handleShowTop100}>
            Xem top 100
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
