import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer2 from "../../include/Footer2";
import Header1 from "../../include/Header1";
import "./Ranking.css"


const Ranking = ({ history }) => {

  const [data, setData] = useState([
    {
      x: "중립",
      y: 50,
      color: "#cfd9df"
    },
    {
      x: "부정",
      y: 40,
      color: "#c2e9fb"
    },
    {
      x: "긍정",
      y: 10,
      color: '#a1c4fd'
    }

  ])
  let setStateInterval;

  useEffect(() => {
    setStateInterval = setInterval(() => {
      let a = Math.random(); // 긍정 테스트
      let b = Math.random(); // 중립 테스트
      let c = Math.random(); // 부정 테스트

      let max = Math.round((Math.max(a, b + c) == a) ? a : b + c)

      let data_legacy = [
        {
          x: "중립",
          y: a / (a + b + c) * 100,
          color: "#cfd9df"
        },
        {
          x: "부정",
          y: b / (a + b + c) * 100,
          color: "#c2e9fb"
        },
        {
          x: "긍정",
          y: c / (a + b + c) * 100,
          color: '#a1c4fd'
        }

      ].slice().sort((a, b) => a.y - b.y)

      setData(data_legacy);
    }, 2000)

    return () => {
      clearInterval(setStateInterval)
    }
  }, [data])

  return (
    <>
      <Header1 />
      <div className="item-box-outline">
        <div className="item-box-container">
          <div className="item-box-card">
          </div>
          <div className="item-box-card">
          </div>
          <div className="item-box-card">
          </div>
          <div className="item-box-card">
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default withRouter(Ranking);
