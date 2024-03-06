import React from "react";
import SideNav from "../templates/SideNav";
import Body from "../templates/Body";
import Navbar from "../templates/Navbar";

const Home = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
    <Navbar/>
      <div className=" flex h-[90%] w-full">
        <SideNav />
        <Body />
      </div>
    </div>
  );
};

export default Home;
