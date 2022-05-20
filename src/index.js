import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App.jsx";
import Notfound from "./components/Notfound/Notfound";
import KhamPhaPage from "./components/Content/Page/KhamPhaPage";
import ZingchartPage from "./components/Content/Page/ZingchartPage";
import RadioPage from "./components/Content/Page/RadioPage";
import TheoDoiPage from "./components/Content/Page/TheoDoiPage";
import NhacMoiPage from "./components/Content/Page/NhacMoiPage";
import MvPage from "./components/Content/Page/MvPage";
import MV from "./components/Content/MVList/MV";
import CaNhanPage from "./components/Content/Page/CaNhanPage";
import Top100Page from "./components/Content/Page/Top100Page";
import AlbumPage from "./components/Content/Page/AlbumPage";
import Artist from "./components/Content/Artist/Artist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<KhamPhaPage />} />

            <Route path="mymusic" element={<CaNhanPage />} />
            <Route path="zing-chart" element={<ZingchartPage />} />
            <Route path="radio" element={<RadioPage />} />

            <Route path="the-loai-nghe-si" element={<TheoDoiPage />}>
              <Route path="Viet-Nam" element={<Notfound />} />
              <Route path="Nuoc-Ngoai" element={<Notfound />} />
            </Route>

            <Route path="moi-phat-hanh" element={<NhacMoiPage />} />
            <Route path="hub" element={<Notfound />} />
            <Route path="top100" element={<Top100Page />} />

            <Route path="the-loai-video" element={<MvPage />}>
              <Route index element={<MvPage />} />
              <Route path="Viet-Nam" element={<MvPage />}>
                <Route path=":encodeId" element={<MV />} />
              </Route>
              <Route path="Au-My" element={<MvPage />}>
                <Route path=":encodeId" element={<MV />} />
              </Route>
              <Route path="Han-Quoc" element={<MvPage />}>
                <Route path=":encodeId" element={<MV />} />
              </Route>
              <Route path="Khong-Loi" element={<MvPage />}>
                <Route path=":encodeId" element={<MV />} />
              </Route>
            </Route>

            <Route path="album" element={<AlbumPage />}>
              <Route path=":albumLink" element={<AlbumPage />} />
            </Route>
            <Route path="bai-hat" element={<AlbumPage />}>
              <Route path=":baihatLink" element={<AlbumPage />} />
            </Route>
            <Route path="artist" element={<Artist />}>
              <Route path=":artistLink" element={<Artist />} />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
