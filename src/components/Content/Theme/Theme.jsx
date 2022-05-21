import React from "react";
import style from "./Theme.module.scss";
import ThemeItem from "./ThemeItem";
import { IoCloseOutline } from "react-icons/io5";
import { setThemeActive, setThemeType } from "../../../redux/reducer/homeSlice";
import { useDispatch } from "react-redux";
import { Dynamic, ChuDe, ImgGirl, NgheSi, MauToi, MauSang } from "./data";

const Theme = () => {
  const dispatch = useDispatch();
  const handleChangeTheme = (themeType, themeClass) => {
    const item = {
      themeType,
      themeClass,
    };
    dispatch(setThemeType(item));
    dispatch(setThemeActive(false));
  };
  return (
    <div
      className={style.cover}
      onClick={() => dispatch(setThemeActive(false))}
    >
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <div className={style.wrap}>
          <h3 className={style.header}>Giao Diện</h3>
          <ThemeItem
            title="Dynamic"
            theme={Dynamic}
            handleChangeTheme={handleChangeTheme}
          />
          <ThemeItem
            title="Chủ Đề"
            theme={ChuDe}
            handleChangeTheme={handleChangeTheme}
          />
          <ThemeItem
            title="Girl Img"
            theme={ImgGirl}
            handleChangeTheme={handleChangeTheme}
          />
          <ThemeItem
            title="Nghệ Sĩ"
            theme={NgheSi}
            handleChangeTheme={handleChangeTheme}
          />
          <ThemeItem
            title="Màu Tối"
            theme={MauToi}
            handleChangeTheme={handleChangeTheme}
          />
          <ThemeItem
            title="Màu Sáng"
            theme={MauSang}
            handleChangeTheme={handleChangeTheme}
          />
        </div>
        <div
          className={style.close}
          onClick={() => dispatch(setThemeActive(false))}
        >
          <IoCloseOutline />
        </div>
      </div>
    </div>
  );
};

export default Theme;
