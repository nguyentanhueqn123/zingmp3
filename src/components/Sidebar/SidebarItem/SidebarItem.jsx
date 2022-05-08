import React from "react";
import style from "./SidebarItem.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../redux/reducer/homeSlice";

const SidebarItem = ({ index, icon, img, data, link }) => {
  const active = useSelector((state) => state.home.active);
  const dispatch = useDispatch();

  return (
    <li
      // className={`${style.sidebarItem} ${index === active && style.active}`}
      className={clsx(style.sidebarItem, { [style.active]: active === data })}
      onClick={() => dispatch(setActive(data))}
    >
      <Link to={link} className={style.link}>
        {icon && <span className={style.icon}>{icon}</span>}
        {img && (
          <div className={style.imgCover}>
            <img src={img} alt="img icon" className={style.img} />
          </div>
        )}
        <span className={style.data}>{data}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
