import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import LeftBar from "../../components/leftbar/leftbar";
import RightBar from "../../components/rightbar/rightbar";


const HomePage: React.FC = () => {
    return (
        <div>
            <NavBar></NavBar>
            <LeftBar></LeftBar>
            <Outlet></Outlet>
            <RightBar></RightBar>
        </div>
    )
}

export default HomePage;