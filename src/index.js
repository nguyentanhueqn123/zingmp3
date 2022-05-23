import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App.jsx";
import Notfound from "./components/Notfound/Notfound";
import ExplorePage from "./components/Content/Page/ExplorePage";
import ZingChartPage from "./components/Content/Page/ZingChartPage";
import RadioPage from "./components/Content/Page/RadioPage";
import FollowPage from "./components/Content/Page/FollowPage";
import NewSongPage from "./components/Content/Page/NewSongPage";
import MvPage from "./components/Content/Page/MvPage";
import MV from "./components/Content/MVList/MV";
import PersonalPage from "./components/Content/Page/PersonalPage";
import Top100Page from "./components/Content/Page/Top100Page";
import AlbumPage from "./components/Content/Page/AlbumPage";
import Artist from "./components/Content/Artist/Artist";
import Song from "./components/Content/Album/Song";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ExplorePage />} />

            <Route path="mymusic" element={<PersonalPage />} />
            <Route path="zing-chart" element={<ZingChartPage />} />
            <Route path="radio" element={<RadioPage />} />

            <Route path="the-loai-nghe-si" element={<FollowPage />}>
              <Route path="Viet-Nam" element={<Notfound />} />
              <Route path="Nuoc-Ngoai" element={<Notfound />} />
            </Route>

            <Route path="moi-phat-hanh" element={<NewSongPage />} />
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
            <Route path="bai-hat" element={<Song />}>
              <Route path=":baihatLink" element={<Song />} />
            </Route>
            <Route path="artist" element={<Artist />}>
              <Route path=":artistLink" element={<Artist />} />
            </Route>

            <Route path="baihat" element={<Notfound />} />
            <Route path="playlist" element={<Notfound />} />
            <Route path="ganday" element={<Notfound />} />

            {/* <Route path="*" element={<Notfound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
