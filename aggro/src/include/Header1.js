import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";
import src from '../include/Aggro_white_mini.png'

const Header1 = ({ history }) => {
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?") == true) {
      localStorage.clear();
      console.log(localStorage.getItem("jwtToken"));
    } else {
      return;
    }
  };

  const authCheck = localStorage.getItem("jwtToken") ? (
    <Link to="/#" onClick={logout}>
      {" "}
      로그아웃{" "}
    </Link>
  ) : (
    <Link to="/login">로그인/회원가입</Link>
  );

  const myPage = localStorage.getItem("jwtToken") && (
    <li className="menu__item1">
      <Link to="/community">마이페이지</Link>
    </li>
  );

  const loginCheck = localStorage.getItem("jwtToken") ? (
    <Link to="/community">정기구독</Link> // 로그인 한 곳
  ) : (
    <Link to="/login">정기구독</Link> // 로그인 안된 곳
  )

  return (
    <div className="l-menu1">
      <ul className="menu1">
        <div className="index-logo">
          <div id="logo">
            <Link to="/home"><img
              src={src}
              className="Image"
              title=" Aggro "
              alt=" Aggro "
            /></Link>
          </div>
        </div>

        <li className="menu__item1">
          <Link to="/Intro">소개</Link>
        </li>

        <li className="menu__item1">
          <Link to="/community">커뮤니티</Link>
        </li>

        {myPage}

<<<<<<< HEAD
=======
        <li className="menu__item1">{loginCheck}</li>

>>>>>>> 03731c3ea7d019cb8a352393624aea2d7dd9e701
        <li className="menu__item1">{authCheck}</li>
      </ul>
    </div>
  );
};

export default Header1;
