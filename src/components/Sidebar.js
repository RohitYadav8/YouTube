import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import {
  MdOutlineLocalMovies,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { ImMusic } from "react-icons/im";
import { GiUnderwearShorts } from "react-icons/gi";
// import { SiYoutubegaming } from "react-icons/si"
// import { SiYoutubegaming } from "react-icons/si"
// import { SiYoutubegaming } from "react-icons/si"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  //Subscribe to specific part of store
  const isMenuOpenCheck = useSelector((store) => store.sidebar.isMenuOpen);

  //Early return
  if (!isMenuOpenCheck) {
    return (
      <div className="p-5 shadow-lg">
        <ul className="">
          <Link to="/">
            <AiTwotoneHome className="pr-2 text-2xl" />
          </Link>
          <GiUnderwearShorts className="pr-2 text-2xl" />
          <AiTwotoneHome className="pr-2 text-2xl" />
        </ul>
        <br />
        <hr />
        <ul>
          <ImMusic className="pr-2 text-2xl" />
          <MdOutlineLocalMovies className="pr-2 text-2xl" />
          <SiYoutubegaming className="pr-2 text-2xl" />
          <MdOutlineSportsVolleyball className="pr-2 text-2xl" />
        </ul>
        <br />
        <hr />
        <ul>
          <ImMusic className="pr-2 text-2xl" />
          <MdOutlineLocalMovies className="pr-2 text-2xl" />
          <SiYoutubegaming className="pr-2 text-2xl" />
          <MdOutlineSportsVolleyball className="pr-2 text-2xl" />
        </ul>
      </div>
    );
  }

  return (
    <div className="p-5 shadow-lg">
      <ul className="w-32">
        <li className="flex pr-2 p-1">
          <AiTwotoneHome className="pr-2 text-2xl" />
          <Link to="/">Home</Link>
        </li>
        <li className="flex pr-2 p-1">
          <GiUnderwearShorts className="pr-2 text-2xl" />
          Shorts
        </li>
        <li className="flex pr-2 p-1">
          <AiTwotoneHome className="pr-2 text-2xl" />
          Live
        </li>
      </ul>
      <br />
      <hr />
      <ul>
        <li className="flex pt-5  pr-2 p-1">
          <ImMusic className="pr-2 text-2xl" />
          Music
        </li>
        <li className="flex pr-2 p-1">
          <MdOutlineLocalMovies className="pr-2 text-2xl" />
          Movies
        </li>
        <li className="flex pr-2 p-1">
          <SiYoutubegaming className="pr-2 text-2xl" />
          Gaming
        </li>
        <li className="flex pr-2 p-1">
          <MdOutlineSportsVolleyball className="pr-2 text-2xl" />
          Sports
        </li>
      </ul>
      <br />
      <hr />
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="flex pt-2 pr-2 p-1">
          <ImMusic className="pr-2 text-2xl" />
          Music
        </li>
        <li className="flex pr-2 p-1">
          <MdOutlineLocalMovies className="pr-2 text-2xl" />
          Movies
        </li>
        <li className="flex pr-2 p-1">
          <SiYoutubegaming className="pr-2 text-2xl" />
          Gaming
        </li>
        <li className="flex pr-2 p-1">
          <MdOutlineSportsVolleyball className="pr-2 text-2xl" />
          Sports
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
