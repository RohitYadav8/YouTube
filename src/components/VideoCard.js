import React from "react";
import { getViews } from "../utils/constants";
const VideoCard = ({ info }) => {
  // console.log(info);
  //Extract values from info
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  //To show '...' in the title if length is very long
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  }
  const maxLength = 50;

  const truncatedString = truncateString(title, maxLength);
  console.log(truncatedString);

  return (
    <div className="p-2 m-2 w-72 h-80">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{truncatedString}</li>
        <li>{channelTitle}</li>
        <li>{getViews(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
