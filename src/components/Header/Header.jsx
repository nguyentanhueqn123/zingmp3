import React, { useRef } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";
import {} from "react-icons/md";
import Navbar from "./Navbar/Navbar";
import style from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setSetting,
  setThemeActive,
  setToast,
} from "../../redux/reducer/homeSlice";
import Dropdown from "./Dropdown/Dropdown";
import Input from "./Input/Input";
import clsx from "clsx";

const Header = React.forwardRef(({ props }, ref) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const isSetting = useSelector((state) => state.home.isSetting);

  const handleShowTheme = () => {
    dispatch(setThemeActive(true));
  };
  const handleToast = () => {
    dispatch(setToast(true));
  };
  const handleChooseFile = (e) => {
    // const file = e.target.files[0];
    // console.log(file);
  };
  const handleFile = () => {
    inputRef.current.click();
    handleChooseFile();
  };
  const handleSetting = () => {
    dispatch(setSetting(!isSetting));
  };

  return (
    <div className={style.header} ref={ref}>
      <div className={style.container}>
        <div className={style.search}>
          <span className={style.icon}>
            <AiOutlineArrowLeft />
          </span>
          <span className={style.icon}>
            <AiOutlineArrowRight />
          </span>

          <Input />
        </div>

        <div className={style.accounts}>
          <Navbar
            icon={<IoIosColorPalette />}
            handleClick={handleShowTheme}
            content="Chủ Đề"
          />
          <Navbar
            icon={<RiVipDiamondLine />}
            handleClick={handleToast}
            content="Nâng cấp VIP"
          />

          <div className={clsx(style.navItem)}>
            <Navbar
              icon={<BsUpload />}
              handleClick={handleFile}
              content="Tải lên"
            />
          </div>
          <div className={style.navItem}>
            <Navbar
              icon={<AiOutlineSetting />}
              handleClick={handleSetting}
              content="Cài đặt"
              option
            />
            {isSetting && <Dropdown />}
          </div>

          <Navbar img={require("../../img/user.jpg")} />
          <input
            type="file"
            className={style.inputFile}
            ref={inputRef}
            onChange={handleChooseFile}
          />
        </div>

        <div className={style.notification}>
          <IoNotificationsOutline />
        </div>
      </div>
    </div>
  );
});

export default Header;
