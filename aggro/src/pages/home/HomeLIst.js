import React, { useEffect, useState } from "react";

import { VictoryPie } from "victory";

const HomeLIst = () => {

  const [data, setData] = useState([
    {
      x: "중립",
      y: 50,
      color: "#cfd9df"
    },
    {
      x: "부정",
      y: 30,
      color: "#c2e9fb"
    },
    {
      x: "긍정",
      y: 20,
      color: '#a1c4fd'
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
      let d = Math.random(); // 부정 테스트
      let e = Math.random(); // 부정 테스트

      let data_legacy = [
        {
          x: "중립",
          y: a / (a + b + c + d) * 100,
          color: "#cfd9df"
        },
        {
          x: "부정",
          y: b / (a + b + c + d) * 100,
          color: "#c2e9fb"
        },
        {
          x: "긍정",
          y: c / (a + b + c + d) * 100,
          color: '#a1c4fd'
        },
        {
          x: "긍정",
          y: d / (a + b + c + d) * 100,
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
    <div className="homeList-container">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <VictoryPie
          style={{
            parent: {
              width: '20%',
            }
          }}
          padding={{ top: 5, bottom: 0 }}
          innerRadius={2.5}
          padAngle={2}
          animate={{ duration: 1000 }}
          labelRadius={120}
          cornerRadius={5}
          labels={({ datum }) => ``}
          colorScale={data.map((color) => color.color)}
          data={data}
        />
      </div>
    </div>
  );
};

export default HomeLIst;
