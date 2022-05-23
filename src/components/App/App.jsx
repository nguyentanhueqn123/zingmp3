// import style from "./App.scss";
import { useRef } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import "./App.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import FullScreen from "../FullScreen/FullScreen";
import Theme from "../Content/Theme/Theme";
import Toast from "../Toast/Toast";

function App() {
  const showFullScreen = useSelector((state) => state.home.fullscreen);
  const showToast = useSelector((state) => state.home.isToast);
  const themeActive = useSelector((state) => state.home.theme.active);
  const themeType = useSelector((state) => state.home.theme.themeType);
  const themeClass = useSelector((state) => state.home.theme.themeClass);

  const headerRef = useRef();
  const contentRef = useRef();
  const thumbRef = useRef();
  const trackRef = useRef();

  const handleScroll = () => {
    const scrollTop = contentRef.current.showHeader();
    thumbRef.current.style.transform = `translateY(${scrollTop}px)`;
    thumbRef.current.style.backgroundColor = `var(--color-alpha-bg)`;
    trackRef.current.style.visibility = "visible";
    trackRef.current.style.opacity = 1;

    if (scrollTop > 10) {
      headerRef.current.style.backgroundColor = "var(--color-layout)";
      headerRef.current.style.boxShadow = "0 1px 1px var(--color-border)";
    } else {
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.boxShadow = "none";
    }
  };

  return (
    <div
      className={clsx("App", `${themeClass}`)}
      style={{ backgroundImage: `url(${themeType})` }}
    >
      <Header ref={headerRef} />
      <Sidebar />

      <Content handleScroll={handleScroll} ref={contentRef} />
      <div className="trackVertical" ref={trackRef}>
        <div className="thumbVertical" ref={thumbRef}></div>
      </div>

      {themeActive && <Theme />}
      {showToast && <Toast />}
      {showFullScreen && <FullScreen />}
      <Footer />
    </div>
  );
}

export default App;
