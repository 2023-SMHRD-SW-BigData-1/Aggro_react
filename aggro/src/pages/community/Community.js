import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import React, { useEffect, useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Footer2 from "./../../include/Footer2";
import Header1 from "./../../include/Header1";
import "./Community.css";

export const CommunityWrap = styled.div`
  margin: 0 auto;
  vertical-align: middle;
  justify-content: center;
  max-width: 1044px;

  .community-container {
    text-align: center;
  }
`;

const ContentBox = styled.div`
  max-width: 1044px;

  .content-header {
    position: relative;
    margin-bottom: 8px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
  .content-header-wrap {
    display: flex;
    padding-top: 18px;
    padding-bottom: 0px;
    justify-content: space-between;
  }

  .header-text {
    padding-left: 16px;
    line-height: 21px;
    font-size: 18px;
    color: #1e2022;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .article-box {
    display: flex;
    margin-top: 0;
    border-top: 1px solid #ebeef1;
    background: #ffffff;

    line-height: 18px;
    font-size: 14px;
    color: #7b858e;
    min-height: 76px;
  }

  .article-list-item:first-child {
    border-top: none;

    .article-list-item__content {
      vertical-align: middle;
    }

    .article-list-item__title {
      display: flex;
      overflow: auto;
      vertical-align: top;
      line-height: 15px;
      font-size: 14px;
      color: #1e2022;
      word-break: break-all;
    }
    .article-item {
      display: flex;
      border-top: 1px solid #ebeef1;
      background-color: #fff;
    }
    .article-list-item__title .post-title {
      display: block;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .article-number {
      vertical-align: middle;
      margin-top: 5px;
      line-height: 17px;
      font-size: 14px;
      color: #7b858e;
    }
  }

  .post-title {
    color: black;
    padding-right: 5px;
  }

  .article-list-item-meta {
    display: flex;
    justify-content: space-between;
  }

  .article-list-author {
    display: inline-block;
    line-height: 18px;
    font-size: 14px;
    color: #98a0a7;
    padding-left: 8px;
  }

  .sub-search-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 6px;
    margin-bottom: 6px;
  }

  .sub-header-search__select {
    float: left;
    width: 122px;
    padding: 9px 0 8px 15px;
    box-sizing: border-box;
    border: 1px solid #ebeef1;
    border-radius: 4px 0 0 4px;
    line-height: 17px;
    font-size: 14px;
    color: #98a0a7;
    background-image: url("/img/iconDropdown.png");
    background-size: 24px;
    background-position: top 5px right 5px;
    background-repeat: no-repeat;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  .sub-header-search__input {
    float: left;
    border: none;
    width: 200px;
    box-sizing: border-box;
    padding: 10px 32px 9px 16px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #ebeef1;
    line-height: 17px;
    font-size: 14px;
  }

  .sub-header-search__button {
    float: left;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 4px;
    margin-right: 4px;
    border-width: 0px;
    cursor: pointer;
  }

  .sub-header-search__img {
    width: 24px;
    height: 24px;
  }

  .article-list-paging {
    height: 64px;
    background: #f8f9fa;
  }

  .article-list-paging__button {
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dddfe4;
    width: 77px;
    height: 40px;
    margin-top: 12px;
  }

  .article-list-author {
    margin-left: 5px;
  }
`;

const Community = ({ history }) => {
  moment.locale("ko");

  const [communityDtos, setCommunityDtos] = useState([]);
  const [postPage, setPostPage] = useState(0);
  const [statusCode, setStatusCode] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const inputValueRef = useRef();
  const searchOption = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:8283/bigdata/community/" + postPage)
      .then((response) => {

        setCommunityDtos(response.data.data);
        setStatusCode(response.data.statusCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevPage = () => {
    let prevPage = postPage - 1;
    if (postPage < 0) {
      return;
    }
    axios
      .get("http://localhost:8283/bigdata/community/" + prevPage)
      .then((response) => {
        setCommunityDtos(response.data.data);
        setStatusCode(response.data.statusCode);

        setPostPage(postPage - 1);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleNextPage = () => {
    let nextPage = postPage + 1;

    axios
      .get("http://localhost:8283/bigdata/community/" + nextPage)
      .then((response) => {
        setCommunityDtos(response.data.data);
        setStatusCode(response.data.statusCode);
        setPostPage(postPage + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8283/bigdata/community/find/" + (inputValueRef.current.value.trim() === "" ? "04846" : inputValueRef.current.value) + "?searchOption=" + searchOption.current.value)
      .then((response) => {
        setCommunityDtos(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = (e) => {

    setInputValue(inputValueRef.current.value);
    const search = async () => {
      await axios
        .get("http://localhost:8283/bigdata/community/find/" + (inputValueRef.current.value.trim() === "" ? "04846" : inputValueRef.current.value) + "?searchOption=" + searchOption.current.value)
        .then((response) => {

          setCommunityDtos(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    setTimeout(400);
    search();
  };

  return (
    <div>
      <Header1 />
      <CommunityWrap>
        <div className="community-container">

          <ContentBox>
            <div className="content-header">
              <div className="content-header-wrap">
                <h2 className="header-text">게시글</h2>
                <div style={{ marginRight: "24px" }}>
                  {localStorage.getItem("jwtToken") !== null &&
                    localStorage.getItem("jwtToken") !== undefined && (
                      <Link to="/write">
                        <img
                          src="img/iconWrite.png"
                          style={{ width: "24px" }}
                          alt="글쓰기"
                        />
                      </Link>
                    )}
                </div>
              </div>

              <div
                className="content-header-sub"
                style={{ height: "48px", position: "relative" }}
              >
                <div className="sub-search-wrap">
                  <form className="sub-search" onSubmit={handleOnSubmit}>
                    <select className="sub-header-search__select" ref={searchOption}>
                      <option value={"title"}>제목</option>
                      <option value={"titleAndDetails"}>제목+내용</option>
                      <option value={"writer"}>작성자</option>
                    </select>
                    <input
                      onKeyUp={handleOnChange}
                      tpye="text"
                      ref={inputValueRef}
                      className="sub-header-search__input"
                      placeholder="검색"
                    />
                    <button className="sub-header-search__button">
                      <img
                        className="sub-header-search__img"
                        src="img/iconSearch.png"
                        alt="검색"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="article-list">
              {/* 여기서 부터 반복 */}
              {communityDtos.map(
                (communityDto) =>
                  communityDto.type === 1 && (
                    <div className="article-box" key={communityDto.post.noticeSeq}>
                      <div
                        className="article-item"
                        style={{ display: "contents" }}
                      >
                        <div
                          className="article-number"
                          style={{ alignSelf: "center", width: "72px" }}
                        >
                          {communityDto.post.noticeSeq}
                        </div>
                        <div
                          className="article-list-item__content"
                          style={{ alignSelf: "center" }}
                        >
                          <Link
                            to={"/community/" + communityDto.post.noticeSeq} // noticeSeq
                            style={{ cursor: "pointer" }}
                          >
                            <div
                              className="aritcle-list-item__title"
                              style={{ textAlign: "left" }}
                            >
                              <span className="post-title">
                                {communityDto.post.title}
                              </span>
                              <em
                                style={{
                                  color: "#16ae81",
                                  fontStyle: "normal",
                                }}
                              >
                                [{communityDto.post.replies.length}]
                              </em>
                            </div>
                          </Link>
                          <div className="article-list-item-meta">
                            <div className="article-list-item-meta__item">
                              <span style={{ color: "#98a0a7" }}>
                                {moment(communityDto.post.noticeAt) // noticeAt
                                  .startOf("second")
                                  .fromNow()}
                              </span>
                              <span className="article-list-author">
                                {communityDto.post.userId.userNick}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}

              <div>
                <div className="article-list-paging">
                  <div>
                    {postPage > 0 && (
                      <div style={{ display: "inline-block" }}>
                        <button
                          style={{ marginRight: "6px" }}
                          onClick={handlePrevPage}
                          className="article-list-paging__button"
                        >
                          <img
                            src="img/iconArrowLeft.png"
                            alt="이전"
                            style={{
                              width: "24px",
                              height: "24px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          />
                          이전
                        </button>
                      </div>
                    )}

                    {statusCode !== 204 ? (
                      <div style={{ display: "inline-block" }}>
                        <button
                          style={{ marginLeft: "6px" }}
                          onClick={handleNextPage}
                          className="article-list-paging__button"
                        >
                          다음
                          <img
                            src="img/iconArrowRight.png"
                            alt="다음"
                            style={{
                              width: "24px",
                              height: "24px",
                              verticalAlign: "middle",
                              cursor: "pointer",
                            }}
                          />
                        </button>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ContentBox>
        </div>
      </CommunityWrap>
      <Footer2 />
    </div>
  );
};

export default withRouter(Community);
