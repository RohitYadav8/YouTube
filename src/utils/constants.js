import GOOGLE_API_KEY from "./apikey";

const GOOGLE_APIKEY = GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_APIKEY;

export const SPLICE_Value = 20;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const getViews = (views) => {
  try {
    if (views < 1000) return views + " views";
    if (views > 999 && views < 1000000) {
      return (views / 1000).toPrecision(3) + "K";
    }
    if (views > 999999 && views < 100000000) {
      return (views / 1000000).toPrecision(3) + "M";
    }
    return (views / 10000000).toPrecision(3) + "B";
  } catch {
    return null;
  }
};
