import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

const HomeListItem = () => {
  moment.locale("ko");

  const [communityDtos, setCommunityDtos] = useState([]);
  const [statusCode, setStatusCode] = useState(0);
  const [resp, setResp] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8283/bigdata/community/" + 0)
      .then((response) => {


        let communityDtos = new Array();

        for (let i = 0; i < (response.data.data.length > 5 ? 5 : response.data.data.length); i++) {
          communityDtos.push(response.data.data[i]);
        }

        setCommunityDtos(communityDtos);
        setStatusCode(response.data.statusCode);

      })
      .catch((error) => {
      });
  }, []);

  return (
    <>
      <div className="community-best__content-left">
        {/* <!-- 커뮤니티 ul 태그--> */}

        <ul className="community-article__list community-article__list--popular">
          {/* <!-- 커뮤니티 li 컴포넌트--> */}
          {communityDtos.map(
            (communityDto) =>
              communityDto.type === 1 && (
                <li
                  className="community-article__list__item"
                  key={communityDto.post.noticeSeq}
                >
                  <Link to={"/community/" + communityDto.post.noticeSeq}>
                    <div className="community-article__list__item__rank green">
                      {communityDto.post.id}
                    </div>

                    <div className="community-article__list__item__title">
                      <span>{communityDto.post.title}</span>
                      <em>[{communityDto.post.replies.length}]</em>
                    </div>
                    <div className="community-article__list__item__sub">
                      <div className="community-article__list__item__sub__item">
                        <span>
                          {" "}
                          {moment(communityDto.post.noticeAt)
                            .startOf("second")
                            .fromNow()}
                        </span>
                      </div>
                      <div className="community-article__list__item__sub__item">
                        {communityDto.post.userId.userNick}
                      </div>
                    </div>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default HomeListItem;
