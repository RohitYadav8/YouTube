import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// Comments
const Body = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* We either want all our videos to be displayed or our watchPage hence outlet -> It will take body's childern*/}
      <Outlet />
    </div>
  );
};

export default Body;
