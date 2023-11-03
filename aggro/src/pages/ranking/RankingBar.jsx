import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';


const RankingBar = ({ wordMap }) => {
    const BLACK_COLOR = '#5383e8';

    return (
        <div className="item-box-item">
            {/* 부모 요소에 대한 스타일을 설정합니다. 
                차트의 가로 크기를 부모 요소의 100%로 설정합니다. */}
            <VictoryChart
                style={{
                    parent: {
                        width: '95%'
                    }
                }}
                // 차트 애니메이션 효과를 설정합니다. 애니메이션 지속 시간은 2000ms입니다.
                animate={{
                    duration: 1000
                }}
            >
                <VictoryAxis
                    style={{
                        axis: {
                            stroke: "none"
                        }
                    }}
                />
                {/* VictoryBar 컴포넌트의 스타일과 데이터를 설정합니다. */}
                <VictoryBar
                    // 상단 패딩을 0으로 설정하여 차트의 여백을 없앱니다.
                    // 바의 스타일을 설정합니다. 여기서는 바의 색상을 검정색으로 설정하고 있습니다.
                    // 또한, 부모 요소에 대해 'AggroLight' 폰트를 적용합니다.
                    style={{ data: { fill: BLACK_COLOR, width: 27, padding: 0 }, parent: { fontFamily: "AggroLight" } }}
                    // wordMap의 처음 10개 데이터를 사용합니다.
                    data={wordMap.slice(0, 5)}
                    // x축은 'text' 프로퍼티를, y축은 'value' 프로퍼티를 사용합니다.
                    x="text"
                    y="value"
                />
            </VictoryChart>
        </div>
    )
}

export default RankingBar;