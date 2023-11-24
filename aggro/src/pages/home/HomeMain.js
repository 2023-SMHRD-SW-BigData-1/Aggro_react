import React from "react";
import "./Home.css";
import HomeLIst from "./HomeLIst";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const HomeMain = ({ history }) => {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username != undefined && username !== "") {
      history.push("/ranking/" + username);
    }else{
      alert("검색어를 입력해주세요.")
    }
  };

  return (
    <div className="homeMain-container">
      <div className="l-container">
        <HomeLIst />
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
            <img src="img/Aggro_blue_mini.png" alt="검색" className="btnImg" />
          </button>
        </form>
        {/* 커뮤니티 글목록 부분    */}
      </div>
    </div>
  );
};

export default withRouter(HomeMain);
