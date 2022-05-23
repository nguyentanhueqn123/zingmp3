import React from "react";
import { useSelector } from "react-redux";
import Playlist from "./Playlist";
import SkeletonLoading from "../Loading/SkeletonLoading";

const PlayLists = () => {
  const title1 = useSelector((state) => state.explore.titles.title1);
  const title2 = useSelector((state) => state.explore.titles.title2);
  const title3 = useSelector((state) => state.explore.titles.title3);
  const playlist1 = useSelector((state) => state.explore.playlists.playlist1);
  const playlist2 = useSelector((state) => state.explore.playlists.playlist2);
  const playlist3 = useSelector((state) => state.explore.playlists.playlist3);
  // console.log(playlist1, playlist2, playlist3);

  const handleCheckLoading = (title, playlist) => {
    if (Object.keys(title1).length === 0 && Object.keys(playlist1).length === 0)
      return true;
  };

  return (
    <>
      {handleCheckLoading(title1, playlist1) ? (
        <SkeletonLoading
          laptop="l-2-4"
          tablet="m-3"
          mobile="c-4"
          num="5"
          mt="mt-4"
        />
      ) : (
        <Playlist title={title1} playlist={playlist1} />
      )}
      {handleCheckLoading(title2, playlist2) ? (
        <SkeletonLoading
          laptop="l-2-4"
          tablet="m-3"
          mobile="c-4"
          num="5"
          mt="mt-4"
        />
      ) : (
        <Playlist title={title2} playlist={playlist2} />
      )}
      {handleCheckLoading(title3, playlist3) ? (
        <SkeletonLoading
          laptop="l-2-4"
          tablet="m-3"
          mobile="c-4"
          num="5"
          mt="mt-4"
        />
      ) : (
        <Playlist title={title3} playlist={playlist3} />
      )}
    </>
  );
};
export default PlayLists;
