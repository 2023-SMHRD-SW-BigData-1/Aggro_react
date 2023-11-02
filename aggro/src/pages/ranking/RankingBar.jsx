import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

const RankingBar = () => {
    const BLACK_COLOR = '#000000';

    return (
        <div className="item-box-item">
            <VictoryChart
                domainPadding={{ x: 100 }}
                style={{
                    parent: {
                        width: '100%' // 차트의 가로 크기를 부모 요소의 100%로 설정합니다.
                    }
                }}
            >
                <VictoryBar
                    barWidth={50}
                    padding={{ top: 0 }}
                    animate={{
                        duration: 3000,  // 애니메이션의 지속 시간입니다.
                    }}
                    style={{ data: { fill: BLACK_COLOR } }}  // 바의 색상을 검정색으로 설정합니다.
                    data={[
                        { x: "x1", y: 2 }, { x: "x2", y: 4 }, { x: 'x3', y: 6 }, { x: 'x4', y: 8 }
                    ]}
                    x={"x"}
                    y="y"
                />
            </VictoryChart>
        </div>
    )
}

export default RankingBar

// import React, { useEffect, useState } from 'react'
// import { VictoryBar, VictoryChart, VictoryTheme } from 'victory'

// const RankingBar = () => {
//     // 랜덤한 색상을 반환하는 함수입니다.
//     const getRandomColor = () => {
//         return '#' + Math.floor(Math.random() * 16777215).toString(16);
//     }

//     // 상태로 RGB 색상 값을 저장합니다.
//     const [rgb, setRgb] = useState(getRandomColor)

//     let setStateInterval;

//     useEffect(() => {
//         // 3초마다 새로운 랜덤 색상을 설정합니다.
//         setStateInterval = setInterval(() => {
//             setRgb(getRandomColor())
//         }, 3000)

//         // 컴포넌트가 언마운트될 때 setInterval을 정리합니다.
//         return () => {
//             clearInterval(setStateInterval)
//         }

//     }, [rgb])

//     return (
//         <div className="item-box-item">
//             <VictoryChart
//                 domainPadding={{ x: 15 }}
//                 style={{
//                     parent:{
//                         width: '100%' // 차트의 가로 크기를 부모 요소의 100%로 설정합니다.
//                     }
//                 }}
//             >
//                 <VictoryBar
//                     padding={{ top: 0 }}
//                     animate={{
//                         duration: 100,  // 애니메이션의 지속 시간입니다.
//                     }}
//                     style={{ data: { fill: rgb } }}  // 바의 색상을 랜덤 색상으로 설정합니다.
//                     data={[
//                         { x: "x1", y: 2 }, { x: "x2", y: 4 }, { x: 'x3', y: 6 }, { x: 'x4', y: 8 }
//                     ]}
//                     x={"x"}
//                     y="y"
//                 />
//             </VictoryChart>
//         </div>
//     )
// }

// export default RankingBar

