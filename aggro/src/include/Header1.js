import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";

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

  return (
    <div className="l-menu1">
      <ul className="menu1">
        <li className="menu__item1">
          <Link to="/home">AGGRO.gg</Link>
          
        </li>

        <li className="menu__item1">
          <Link to="/ranking">분석 통계</Link>
        </li>

        <li className="menu__item1">
          <Link to="/community">커뮤니티 페이지</Link>
        </li>
        <li className="menu__item1">{authCheck}</li>
      </ul>
    </div>
  );
};

export default Header1;
