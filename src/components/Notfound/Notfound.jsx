import React from "react";
import clsx from "clsx";
import style from "./NotFound.module.scss";
const Notfound = () => {
  return (
    <div className={clsx(style.imgCover, "mt-4")}>
      <img
        src="https://i.pinimg.com/564x/5f/92/5a/5f925a4b065b191e76aed89ab4d94d17.jpg"
        alt=""
        className={style.img}
      />
      <img
        src="https://i.pinimg.com/564x/b3/31/29/b331297876db5a600ffff31f191bf660.jpg"
        alt=""
        className={style.img}
      />
      <p className={style.desVip}>Nạp vip để sử dụng chức năng này :))</p>
    </div>
  );
};

export default Notfound;
