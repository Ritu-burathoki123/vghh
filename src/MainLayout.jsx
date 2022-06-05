import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
function MainLayout(props) {
    return (
        <div className="flex items-stretch  h-screen">
            <SideBar />
            <div className=" grow p-10 bg-yellow-600"><Outlet /></div>
        </div>
    );
}

export default MainLayout;