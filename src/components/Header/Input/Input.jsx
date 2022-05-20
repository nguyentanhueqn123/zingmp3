import React, { useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { MdShowChart } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetchDataHook from "../../../Hook/useFetchDataHook";
import { setSongInfo } from "../../../redux/reducer/homeSlice";
import style from "./Input.module.scss";

const Input = () => {
  const [keyword, setKeyWord] = useState("");
  const [history, setHistory] = useState(false);
  const [handleSearch] = useFetchDataHook(keyword);
  const searchSongs = useSelector((state) => state.home.search.songs);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const iconBackRef = useRef();

  const handleClick = (
    title,
    encodeId,
    artistsNames,
    alias,
    duration,
    thumbnail,
    thumbnailM
  ) => {
    const song = {
      title: title,
      encodeId: encodeId,
      artistsNames: artistsNames,
      alias: alias,
      duration: duration,
      thumbnail: thumbnail,
      thumbnailM: thumbnailM,
    };
    console.log(song);
    dispatch(setSongInfo(song));
  };
  const handleInputChange = (e) => {
    setKeyWord(e.target.value);
    handleSearch();
  };

  const handleBlur = (e) => {
    inputRef.current.blur();
  };
  return (
    <form className={style.form} action={`/search/${keyword}`}>
      <label className={style.label}>
        <span className={style.iconSearch}>
          <BsSearch />
        </span>
        <input
          ref={inputRef}
          value={keyword}
          onChange={handleInputChange}
          className={style.input}
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…"
        />

        {/* history search */}
        {history && (
          <ul className={style.history} onMouseDown={(e) => e.preventDefault()}>
            <div className={style.historyMain}>
              <div className={style.historyTitle}>Đề xuất cho bạn</div>
              <li className={style.historyItem}>
                <div className={style.historyIcon}>
                  <MdShowChart />
                </div>
                <div className={style.historyText}>Đôi mi</div>
              </li>
            </div>
          </ul>
        )}

        {/* search content*/}
        {!history && (
          <ul className={style.history} onMouseDown={(e) => e.preventDefault()}>
            <div className={style.historyMain}>
              <div className={style.historyTitle}>Gợi ý kết quả</div>
              {!searchSongs ? (
                <div className={style.suggestionNull}>
                  Nhập từ khóa bài hát, ca sĩ !
                </div>
              ) : (
                searchSongs.map((song, i) => (
                  <li
                    className={style.suggestItem}
                    key={i}
                    onClick={() =>
                      handleClick(
                        song.title,
                        song.encodeId,
                        song.artistsNames,
                        song.alias,
                        song.duration,
                        song.thumbnail,
                        song.thumbnailM
                      )
                    }
                  >
                    <div className={style.suggestLeft}>
                      <img
                        src={song.thumbnail}
                        alt=""
                        className={style.suggestImg}
                      />
                    </div>
                    <div className={style.suggestRight}>
                      <div className={style.suggestTitle}>{song.title}</div>
                      <div className={style.suggestArtist}>
                        {song.artistsNames}
                      </div>
                    </div>
                    <Link
                      to={`/bai-hat/${song.alias}`}
                      className={style.linkItem}
                    ></Link>
                  </li>
                ))
              )}
            </div>
          </ul>
        )}

        <div className={style.iconBack} ref={iconBackRef} onClick={handleBlur}>
          <HiOutlineArrowLeft />
        </div>
      </label>
    </form>
  );
};

export default Input;
