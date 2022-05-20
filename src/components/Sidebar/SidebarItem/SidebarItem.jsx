import React from "react";
import style from "./SidebarItem.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../redux/reducer/homeSlice";

const SidebarItem = ({ index, icon, img, data, link }) => {
  const active = useSelector((state) => state.home.active);
  const seeMore = useSelector((state) => state.home.seeMore);
  const dispatch = useDispatch();

  return (
    <li
      className={clsx(style.sidebarItem, { [style.sidebarItemMove]: seeMore })}
      onClick={() => dispatch(setActive(data))}
    >
      <Link
        to={link}
        className={clsx(style.link, {
          [style.active]: active === data,
          [style.activeMove]: seeMore,
          [style.linkMove]: seeMore,
        })}
      >
        {icon && (
          <span className={clsx(style.icon, { [style.iconMove]: seeMore })}>
            {icon}
          </span>
        )}
        {img && (
          <div className={style.imgCover}>
            <img src={img} alt="img icon" className={style.img} />
          </div>
        )}
        <span className={clsx(style.data, { [style.dataMove]: seeMore })}>
          {data}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
