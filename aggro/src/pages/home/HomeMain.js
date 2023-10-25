import React from "react";
import "./Home.css";
import HomeLIst from "./HomeLIst";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const HomeMain = ({ history }) => {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    history.push("/summoner/" + username);
  };

  return (
    <div className="homeMain-container">
      <div className="l-container">
        <div className="index-logo">
          <div id="logo">
            <img
              src="img/Aggro_white.png"
              className="Image"
              title=" Aggro "
              alt=" Aggro "
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="summoner-search-form"
          autoComplete="off"
        >
          <input
            type="text"
            name="username"
            onChange={handleInput}
            className="summoner-search-form__text__suggest"
            placeholder="검색어를 입력해주세요."
            autoComplete="off"
          />
          {/* 검색 버튼 부분 */}
          <button type="submit" className="summoner-search-form__button">
            <img src="img/searchBtn.gif" alt="검색" className="btnImg" />
          </button>
        </form>
        {/* 커뮤니티 글목록 부분    */}
        <HomeLIst />
      </div>
    </div>
  );
};

export default withRouter(HomeMain);
