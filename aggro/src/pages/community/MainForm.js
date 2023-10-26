import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export const MainFormBox = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  .icon-form {
    margin-left: 30px;
    justify-content: flex-start;
    margin-top: 28px;

    align-items: center;
  }
  .icon-text {
    display: inline-block;
    vertical-align: middle;
    line-height: 39px;
    margin-bottom: 46px;
    margin-left: 8px;
    font-size: 32px;
    color: #fff;
    font-weight: bold;
  }
  /* 로고 이미지 크기 */
  .community-icon {
    width: 256px;
    height: 64px;
  }
  
`;

export const SearchForm = styled.div`
  position: relative;
  justify-content: flex-end;
  .main-input {
    border-radius: 2px;
    background: #fff;
    border: none;
    width: 268px;
    line-height: 17px;
    font-size: 14px;
    padding: 12px 62px 11px 12px;
    box-sizing: border-box;
    height: 40px;
    margin-right: 8px;
  }

  .mainBtn {
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 15px;
    position: absolute;
    background: none;
    border-width: 0px;
  }


`;

const MainForm = ({ history }) => {
  const [username, setUsername] = useState("");

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/summoner/" + username);
  };

  return (
    <MainFormBox>
      <Link to="/community">
        <div className="icon-form">
        <Link to={"/home"}>
              
          <img
            className="community-icon"
            src="/img/Aggro_white.png"
            alt="아이콘"
          />
              
            </Link>
          {/* <div className="icon-text">리그오브레전드</div> */}
        </div>
      </Link>
      <SearchForm>
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleOnChange}
            type="text"
            className="main-input"
            placeholder="내용"
          />
          <button className="mainBtn" type="submit">
            <img className="btnImg" src="img/Aggro_blue_mini.png" alt="검색" />
          </button>
        </form>
      </SearchForm>
    </MainFormBox>
  );
};

export default withRouter(MainForm);
