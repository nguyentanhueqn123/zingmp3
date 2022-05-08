import React from "react";
import { useSelector } from "react-redux";
import Playlist from "./Playlist";
import LoadingList from "./LoadingList";

const PlayLists = () => {
  const title1 = useSelector((state) => state.khampha.titles.title1);
  const title2 = useSelector((state) => state.khampha.titles.title2);
  const title3 = useSelector((state) => state.khampha.titles.title3);
  const playlist1 = useSelector((state) => state.khampha.playlists.playlist1);
  const playlist2 = useSelector((state) => state.khampha.playlists.playlist2);
  const playlist3 = useSelector((state) => state.khampha.playlists.playlist3);
  // console.log(playlist1, playlist2, playlist3);

  const handleCheckLoading = (title, playlist) => {
    if (Object.keys(title1).length === 0 && Object.keys(playlist1).length === 0)
      return true;
  };

  return (
    <>
      {handleCheckLoading(title1, playlist1) ? (
        <LoadingList />
      ) : (
        <Playlist title={title1} playlist={playlist1} />
      )}
      {handleCheckLoading(title2, playlist2) ? (
        <LoadingList />
      ) : (
        <Playlist title={title2} playlist={playlist2} />
      )}
      {handleCheckLoading(title3, playlist3) ? (
        <LoadingList />
      ) : (
        <Playlist title={title3} playlist={playlist3} />
      )}
    </>
  );
};
export default PlayLists;
