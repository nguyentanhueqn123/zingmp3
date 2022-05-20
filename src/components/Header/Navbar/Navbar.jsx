import React from "react";
import style from "./Navbar.module.scss";

const Navbar = ({ img, icon, handleClick, content }) => {
  return (
    <span className={style.account} onClick={handleClick}>
      {icon && <div className={style.accountIcon}>{icon}</div>}
      {img && <img className={style.accountImg} src={img} alt="" />}
      {content && <div className={style.note}>{content}</div>}
    </span>
  );
};

export default Navbar;
