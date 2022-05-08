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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<KhamPhaPage />} />

            <Route path="/mymusic" element={<Notfound />} />
            <Route path="/zing-chart" element={<ZingchartPage />} />
            <Route path="/radio" element={<RadioPage />} />
            <Route path="/the-loai-nghe-si" element={<TheoDoiPage />}>
              <Route path="Viet-Nam" element={<Notfound />} />
              <Route path="Nuoc-Ngoai" element={<Notfound />} />
            </Route>
            <Route path="/moi-phat-hanh" element={<NhacMoiPage />} />
            <Route path="/hub" element={<Notfound />} />
            <Route path="/top100" element={<Notfound />} />
            <Route path="/the-loai-video" element={<MvPage />}>
              <Route path="Viet-Nam" element={<Notfound />} />
              <Route path="Au-My" element={<Notfound />} />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
