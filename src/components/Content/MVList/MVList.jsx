import React from "react";
import style from "./MVList.module.scss";
const MVList = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}></div>
      <div className={style.container}>
        <div className={style.searchNav}></div>
        <div className={style.multiple}>
          <div className={style.col}>
            <div className={style.cardVideo}>
              <div className={style.imgCover}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg"
                  alt=""
                  className={style.img}
                />
              </div>
              <div className={style.media}>
                <div className={style.mediaLeft}>
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/b/45ab1296d73b215629fcbab092687d4c.jpg"
                    alt=""
                    className={style.mediaImg}
                  />
                </div>
                <div className={style.mediaContent}>
                  <h3 className={style.mediaTitle}>Tup leu vang</h3>
                  <h3 className={style.mediaSubtitle}>Nguyen dinh vu, cmp</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={style.col}>
            <div className={style.cardVideo}>
              <div className={style.imgCover}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg"
                  alt=""
                  className={style.img}
                />
              </div>
              <div className={style.media}>
                <div className={style.mediaLeft}>
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/b/45ab1296d73b215629fcbab092687d4c.jpg"
                    alt=""
                    className={style.mediaImg}
                  />
                </div>
                <div className={style.mediaContent}>
                  <h3 className={style.mediaTitle}>Tup leu vang</h3>
                  <h3 className={style.mediaSubtitle}>Nguyen dinh vu, cmp</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={style.col}>
            <div className={style.cardVideo}>
              <div className={style.imgCover}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg"
                  alt=""
                  className={style.img}
                />
              </div>
              <div className={style.media}>
                <div className={style.mediaLeft}>
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/b/45ab1296d73b215629fcbab092687d4c.jpg"
                    alt=""
                    className={style.mediaImg}
                  />
                </div>
                <div className={style.mediaContent}>
                  <h3 className={style.mediaTitle}>Tup leu vang</h3>
                  <h3 className={style.mediaSubtitle}>Nguyen dinh vu, cmp</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVList;
