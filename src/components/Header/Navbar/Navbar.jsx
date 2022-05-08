import React from "react";
import style from "./Navbar.module.scss";
const Navbar = ({ img, icon }) => {
  return (
    <>
      <span className={style.account}>
        {icon && icon}
        {img && <img className={style.img} src={img} alt="" />}
      </span>
    </>
  );
};

export default Navbar;
