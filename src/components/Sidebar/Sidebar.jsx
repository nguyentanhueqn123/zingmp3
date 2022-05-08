import React, { useState } from "react";
import { RiAlbumLine } from "react-icons/ri";
import { MdOutlineLibraryMusic, MdOutlineVideoLibrary } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { GiMusicSpell } from "react-icons/gi";
import { CgMusic } from "react-icons/cg";
import { HiOutlineViewGrid } from "react-icons/hi";
import clsx from "clsx";
import style from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <MdOutlineLibraryMusic />,
      data: "Cá nhân",
      link: "/mymusic",
    },
    {
      icon: <RiAlbumLine />,
      data: "Khám phá",
      link: "/",
    },
    {
      icon: <BsBarChartLine />,
      data: "#zingchart",
      link: "/zing-chart",
    },
    {
      icon: <GiMusicSpell />,
      data: "Radio",
      link: "/radio",
    },
    {
      icon: <BiNews />,
      data: "Theo dõi",
      link: "/the-loai-nghe-si",
    },
  ];

  const sidebarSubnav = [
    {
      icon: <CgMusic />,
      data: "Nhạc mới",
      link: "/moi-phat-hanh",
    },
    {
      icon: <HiOutlineViewGrid />,
      data: "Thể loại",
      link: "/hub",
    },
    {
      icon: <AiOutlineStar />,
      data: "Top 100",
      link: "/top100",
    },
    {
      icon: <MdOutlineLibraryMusic />,
      data: "MV",
      link: "/the-loai-video",
    },
  ];

  const sidebarMore = [
    {
      img: "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg",
      data: "Bài hát",
      link: "/nhacmoi",
    },
    {
      img: "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg",
      data: "Playlist",
      link: "/playlist",
    },
    {
      img: "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg",
      data: "Gần đây",
      link: "/ganday",
    },
  ];
  return (
    <aside className={style.aside}>
      <div className={style.logo}>
        <a href="#" className={style.link}>
          <img
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
            alt="logo-zing.svg"
            className={style.img}
          />
        </a>
      </div>

      <div className={style.sidebar}>
        <ul className={style.sidebarList}>
          {sidebarItems.map((sidebarItem) => (
            <SidebarItem
              key={sidebarItem.data}
              icon={sidebarItem.icon}
              data={sidebarItem.data}
              link={sidebarItem.link}
            />
          ))}
        </ul>
      </div>

      <div className={style.sidebarSubnav}>
        <div className={style.container}>
          <ul className={clsx([style.sidebarList])}>
            {sidebarSubnav.map((sidebarItem) => (
              <SidebarItem
                key={sidebarItem.data}
                icon={sidebarItem.icon}
                data={sidebarItem.data}
                link={sidebarItem.link}
              />
            ))}
            {/* <SidebarItem icon={<CgMusic />} data="Nhạc mới" link="/mymusic" />
            <SidebarItem icon={<CgMusic />} data="Nhạc mới" link="/mymusic" />
            <SidebarItem icon={<CgMusic />} data="Nhạc mới" link="/mymusic" />
            <SidebarItem icon={<CgMusic />} data="Nhạc mới" link="/mymusic" /> */}
          </ul>
          <div className={style.block}>
            <div className={style.vipBlock}>
              <p className={style.vipDes}>
                Nghe nhạc không quảng cáo cùng kho nhạc VIP
              </p>
              <button className={style.vipBtn}>NÂNG CẤP VIP</button>
            </div>
          </div>
          <div className={style.titleLibrary}>Thư viện</div>
          <ul className={clsx([style.sidebarList])}>
            {sidebarMore.map((sidebarItem) => (
              <SidebarItem
                key={sidebarItem.data}
                img={sidebarItem.img}
                data={sidebarItem.data}
                link={sidebarItem.link}
              />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
