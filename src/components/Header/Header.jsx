import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsSearch, BsUpload } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { RiVipDiamondLine } from "react-icons/ri";
import Navbar from "./Navbar/Navbar";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.search}>
        <span className={style.icon}>
          <AiOutlineArrowLeft />
        </span>
        <span className={style.icon}>
          <AiOutlineArrowRight />
        </span>

        <label className={style.label}>
          <span className={style.iconSearch}>
            <BsSearch />
          </span>
          <input
            className={style.input}
            type="text"
            placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…"
          />
        </label>
      </div>

      <div className={style.accounts}>
        <Navbar icon={<IoIosColorPalette />} />
        <Navbar icon={<RiVipDiamondLine />} />
        <Navbar icon={<BsUpload />} />
        <Navbar icon={<AiOutlineSetting />} />

        <Navbar img={require("../../img/user.jpg")} />
      </div>
    </div>
  );
};

export default Header;
