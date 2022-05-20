import React from "react";
import style from "./Theme.module.scss";
import clsx from "clsx";

const ThemeItem = ({ title, theme, handleChangeTheme }) => {
  return (
    <div className={style.column}>
      <h3 className={style.title}>{title}</h3>
      <div className={clsx("grid")}>
        <div className="row">
          {theme.map((item, i) => (
            <div className="col l-2 m-4" key={i}>
              <div className={style.themeBackground}>
                <div className={style.theme}>
                  <img
                    src={item.theme}
                    alt="theme mini"
                    className={style.img}
                  />
                </div>
                <div className={style.themeCover}>
                  <div
                    className={style.themeAction}
                    onClick={() =>
                      handleChangeTheme(
                        item.themeBackground || item.theme,
                        item.class
                      )
                    }
                  >
                    <button className={clsx(style.btn, style.btnApply)}>
                      Áp dụng
                    </button>
                    <button className={style.btn}>Xem trước</button>
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <h4 className={style.contentTitle}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeItem;
