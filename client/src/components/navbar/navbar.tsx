import React from "react";
// 引入redux
import { useSelector } from "react-redux";
import "./navbar.scss";

const NavBar: React.FC = () => {

    // 获取redux中的数据
    const user = useSelector((state: any) => state.user);

    return (
        <div className="navbar">
            <div className="left">
                <span className="logo">logo</span>
                <span className="icon icon-home"></span>
                <span className="icon icon-moon"></span>
                <span className="icon icon-list"></span>
                <form action="">
                    <label htmlFor="searchbar">
                        <span className="icon-search"></span>
                    </label>
                    <input type="text" id="searchbar" placeholder="Search" />
                </form>
            </div>
            <div className="right">
                {/* <span className="icon icon-mail-envelope-closed1"></span> */}
                <span className="icon icon-notifications-outline"></span>
                <span className="icon icon-mobile"></span>
                {
                    user.isLogin ? <>
                        <img src="" alt="avatar" />
                        <div className="logoutbtn">
                            <span className="icon icon-exit"></span>
                            log out
                        </div>
                        <span className="icon-share2"></span>
                    </> : <>
                        <div className="loginbtn">
                            <span className="icon icon-enter"></span>
                            login
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default NavBar;