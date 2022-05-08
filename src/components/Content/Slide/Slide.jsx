import React, { useState, useRef } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsPlayFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./Slide.module.scss";

const Slide = ({ rectangle, triangle, circle }) => {
  const banners = useSelector((state) => state.khampha.banner);
  const livestreams = useSelector((state) => state.radio.livestream);
  console.log(livestreams);

  const [btnLeft, setBtnLeft] = useState(false);
  const [btnRight, setBtnRight] = useState(true);
  const sliderTriangle = useRef();
  const sliderCircle = useRef();
  console.log(banners);

  const handleMoveLeft = (slider) => {
    if (btnLeft) {
      slider.current.style.transform = "translateX(0)";
      setBtnLeft(false);
      setBtnRight(true);
    }
  };
  const handleMoveRight = (slider) => {
    if (btnRight) {
      slider.current.style.transform = "translateX(-50%)";
      setBtnLeft(true);
      setBtnRight(false);
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      {rectangle &&
        (Object.keys(banners).length === 0 ? (
          <div className="grid wide">
            <div className="row">
              <div className="col m-3 c-1 skeleton skeleton--l"></div>
              <div className="col m-3 c-1 skeleton skeleton--l"></div>
              <div className="col m-3 c-1 skeleton skeleton--l"></div>
            </div>
          </div>
        ) : (
          <div className={style.slide}>
            <Slider {...settings}>
              {banners.map((banner, index) => (
                <div className={style.slideItem} key={banner.banner}>
                  <img src={banner.banner} alt="" className={style.img} />
                </div>
              ))}
            </Slider>
          </div>
        ))}

      {triangle && (
        <div className={style.wrapper}>
          <div className={clsx([style.carousel, style.heightS])}>
            <div className={style.inner} ref={sliderTriangle}>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
              <div className={style.innerItem}>
                <a href="#" className={style.innerLink}>
                  <img
                    src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
                    alt=""
                    className={style.img}
                  />
                </a>
              </div>
            </div>

            <button
              className={clsx([
                style.controlPre,
                { [style.activeBtn]: btnLeft },
              ])}
              onClick={() => handleMoveLeft(sliderTriangle)}
            >
              <GrPrevious />
            </button>
            <button
              className={clsx([
                style.controlNext,
                { [style.activeBtn]: btnRight },
              ])}
              onClick={() => handleMoveRight(sliderTriangle)}
            >
              <GrNext />
            </button>
          </div>
        </div>
      )}

      {circle && (
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.carousel}>
              <div className={style.content} ref={sliderCircle}>
                {livestreams.map((livestream) => (
                  <div className={style.cardContent} key={livestream.encodeId}>
                    <div className={style.topContent}>
                      <div className={style.imgContentCover}>
                        <img
                          src={livestream.program.thumbnail}
                          alt=""
                          className={style.imgContent}
                        />
                      </div>
                      <div className={style.imgCard}>
                        <div className={style.imgIconCover}>
                          <img
                            src={livestream.thumbnail}
                            alt=""
                            className={style.imgIcon}
                          />
                        </div>

                        <div className={style.imgLiveCover}>
                          <img
                            src="	https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                            alt=""
                            className={style.imgLive}
                          />
                        </div>
                        <div className={style.cover}>
                          <div className={style.iconBtn}>
                            <BsPlayFill />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.botContent}>
                      <h2 className={style.title}>{livestream.host.name}</h2>
                      <p className={style.des}>
                        {livestream.activeUsers} người đang nghe
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={clsx([
                  style.controlPre,
                  { [style.activeBtn]: btnLeft },
                ])}
                onClick={() => handleMoveLeft(sliderCircle)}
              >
                <GrPrevious />
              </button>
              <button
                className={clsx([
                  style.controlNext,
                  { [style.activeBtn]: btnRight },
                ])}
                onClick={() => handleMoveRight(sliderCircle)}
              >
                <GrNext />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slide;
