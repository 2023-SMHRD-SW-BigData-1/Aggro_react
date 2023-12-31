import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";
import src from '../include/Aggro_white_mini.png'

const Header1 = ({ history }) => {
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?") == true) {
      localStorage.clear();
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
      <Link to="/mypage">마이페이지</Link>
    </li>
  );



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



        <li className="menu__item1">{authCheck}</li>
      </ul>
    </div>
  );
};

export default Header1;
