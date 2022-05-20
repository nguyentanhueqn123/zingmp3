import React, { useState, useEffect } from "react";
import style from "./MVContainer.module.scss";
import axios from "axios";
import clsx from "clsx";
import format from "format-duration";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronDown, BsChevronUp, BsPlayFill } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  setActiveLink,
  setMvListVietNam,
} from "../../../redux/reducer/mvSlice";
import { Link } from "react-router-dom";
import SkeletonLoading from "../Loading/SkeletonLoading";
const MVContainer = () => {
  const [dropdownleft, setDropdownleft] = useState(false);
  const [dropdownright, setDropdownright] = useState(false);
  const activeLink = useSelector((state) => state.mv.activeLink);
  const mvListVietNam = useSelector((state) => state.mv.mvListVietNam);

  const dispatch = useDispatch();

  const mvNavbar = [
    {
      name: "VIỆT NAM",
      link: "Viet-Nam",
    },
    {
      name: "US-UK",
      link: "Au-My",
    },
    {
      name: "KPOP",
      link: "Han-Quoc",
    },
    {
      name: "HÒA TẤU",
      link: "Khong-Loi",
    },
  ];
  const handleSetDropdownLeft = () => {
    setDropdownleft(!dropdownleft);
    setDropdownright(false);
  };
  const handleSetDropdownRight = () => {
    setDropdownright(!dropdownright);
    setDropdownleft(false);
  };

  useEffect(() => {
    const getApiMv = async () => {
      const res = await axios
        .get(
          "https://music-player-pink.vercel.app/api/listMV?id=IWZ9Z08I&page=1&count=15"
        )
        .then((res) => {
          dispatch(setMvListVietNam(res.data.data.items));
        })
        .catch((err) => console.log(err));
    };
    getApiMv();
  }, []);

  return (
    <div className={style.wrapper}>
      <nav className={style.navbar}>
        <div className={style.navbarContainer}>
          <h3 className={style.title}>MV</h3>
          <ul className={style.navbarMenu}>
            {mvNavbar.map((mv) => (
              <li
                className={style.navbarItem}
                key={mv.name}
                onClick={() => dispatch(setActiveLink(mv.link))}
              >
                <Link
                  to={mv.link}
                  className={clsx(style.navbarLink, {
                    [style.active]: mv.link === activeLink,
                  })}
                >
                  {mv.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={style.container}>
        <div className={style.searchNav}>
          <div className={style.dropdown} onClick={handleSetDropdownLeft}>
            <div className={style.dropdownWrapper}>
              <div className={style.dropdownIcon}>
                <FiMusic />
              </div>
              <button className={style.dropdownBtn}>Tất cả</button>
              <div className={style.dropdownIcon}>
                {dropdownleft ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>

            {dropdownleft && (
              <div className={style.dropdownContent}>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
              </div>
            )}
          </div>
          <div className={style.dropdown} onClick={handleSetDropdownRight}>
            <div className={style.dropdownWrapper}>
              <div className={style.dropdownIcon}>
                <BiMenuAltLeft />
              </div>
              <button className={style.dropdownBtn}>Nghe nhiều</button>
              <div className={style.dropdownIcon}>
                {dropdownright ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>

            {dropdownright && (
              <div className={style.dropdownContent}>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
                <div className={style.dropdownItem}>
                  <span className={style.itemSpan}>Rap viet</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {Object.keys(mvListVietNam).length === 0 ? (
          <SkeletonLoading laptop="l-4" tablet="m-6" mobile="c-12" />
        ) : (
          <div className="grid">
            <div className="row">
              {mvListVietNam.map((mv, index) => (
                <div className="col l-4 m-6 c-12" key={index}>
                  <div className={style.cardVideo}>
                    <div className={style.cardVideoImg}>
                      <img src={mv.thumbnail} alt="" className={style.img} />
                      <Link to="#" className={style.imgCover}>
                        <div className={style.imgBtn}>
                          <BsPlayFill />
                        </div>
                      </Link>
                      <div className={style.cardTimer}>
                        {format(mv.duration * 1000, { leading: true })}
                      </div>
                    </div>
                    <div className={style.media}>
                      <div className={style.mediaLeft}>
                        <img
                          src={mv.artist.thumbnail}
                          alt=""
                          className={style.mediaImg}
                        />
                      </div>
                      <div className={style.mediaContent}>
                        <h3 className={style.mediaTitle}>{mv.title}</h3>
                        <h3 className={style.mediaSubtitle}>
                          {mv.artistsNames}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MVContainer;
