// import style from "./App.scss";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import FullScreen from "../FullScreen/FullScreen";
import "./App.scss";

function App() {
  const showfullscreen = useSelector((state) => state.home.fullscreen);
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
        <Content />
      </div>
      {showfullscreen && <FullScreen />}
      <Footer />
    </>
  );
}

export default App;
