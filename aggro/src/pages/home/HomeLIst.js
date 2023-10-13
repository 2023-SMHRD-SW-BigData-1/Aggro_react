import React from "react";
import { Link } from "react-router-dom";
import HomeListItem from "./HomeListItem";
const HomeLIst = () => {
  return (
    <div className="homeList-container">
      <div className="community-best__header">
        {/* 커뮤니티 상단 제목 부분 */}
        <Link className="link" to="/community">
          정치인 관련 최고의 커뮤니티 글!!
        </Link>
      </div>
      <HomeListItem />
    </div>
  );
};

export default HomeLIst;
