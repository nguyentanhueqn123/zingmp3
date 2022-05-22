import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import style from "./Toast.module.scss";
import { setToast } from "../../redux/reducer/homeSlice";

const Toast = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.toast}>
      <div className={style.body}>
        <div className={style.icon}>
          <BsCheckCircleFill />
        </div>
        <div className={style.info}>
          <div className={style.title}>Success</div>
          <div className={style.des}>
            Tiền đâu mà nạp vip . Nhưng bạn có lòng thì Đạt vẫn nhận :))
          </div>
        </div>
        <div className={style.close} onClick={() => dispatch(setToast(false))}>
          <MdClose />
        </div>
      </div>
    </div>
  );
};

export default Toast;
