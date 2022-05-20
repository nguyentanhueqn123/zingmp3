import React from "react";
import style from "./Dropdown.module.scss";
import { BiBlock } from "react-icons/bi";
import { MdOutlineHighQuality } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const Dropdown = ({}) => {
  return (
    <div className={style.setting}>
      <ul className={style.list}>
        <li className={style.item}>
          <button className={style.btnItem}>
            <div className={style.iconLeft}>
              <BiBlock />
            </div>
            <div className={style.des}>Danh sách chặn</div>
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btnItem}>
            <div className={style.iconLeft}>
              <MdOutlineHighQuality />
            </div>
            <div className={style.des}>Chất lượng phát</div>
            <div className={style.iconRight}>
              <BsChevronRight />
            </div>
          </button>

          <div className={style.dropdown}>
            <ul className={style.list}>
              <li className={style.item}>
                <div className={style.option}>
                  <h3 className={style.optionTitle}>
                    SQ
                    <span className={style.iconDot}>
                      <GoPrimitiveDot />
                    </span>
                    128
                  </h3>
                  <p className={style.optionDes}>
                    Giảm sử dụng dữ liêu cho các kết nối chậm hơn
                  </p>
                </div>
                <div className={style.option}>
                  <h3 className={style.optionTitle}>
                    HQ
                    <span className={style.iconDot}>
                      <GoPrimitiveDot />
                    </span>
                    320
                  </h3>
                  <p className={style.optionDes}>
                    Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm
                    thanh
                  </p>
                  <div className={style.optionCheck}>
                    <AiOutlineCheck />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
