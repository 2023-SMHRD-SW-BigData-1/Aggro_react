import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart } from 'victory';

const RankingBar = ({ wordMap }) => {

    const BLACK_COLOR = '#000000';



    return (
        <div className="item-box-item">
            <VictoryChart
                style={{
                    parent: {
                        width: '100%' // 차트의 가로 크기를 부모 요소의 100%로 설정합니다.
                    }
                }}
                animate={{
                    duration: 2000
                }}
            >
                <VictoryBar
                    padding={{ top: 0 }}
                    style={{ data: { fill: BLACK_COLOR } }}  // 바의 색상을 검정색으로 설정합니다.
                    data={wordMap.slice(0, 10)}
                    x="text"
                    y="value"
                />
            </VictoryChart>
        </div>
    )
}

export default RankingBar