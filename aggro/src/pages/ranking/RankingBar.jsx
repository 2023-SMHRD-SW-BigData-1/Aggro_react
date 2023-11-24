import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';


const RankingBar = ({ wordMap }) => {
    const BLACK_COLOR = '#5383e8';

    return (
        <div className="item-box-item">
            <VictoryChart
                animate={{
                    duration: 500
                }}
            >
                <VictoryAxis
                    style={{
                        axis: {
                            stroke: "none"
                        }
                    }}
                />
                <VictoryBar
                    style={{ data: { fill: BLACK_COLOR, width: 50, padding: 5 },
                    parent: { fontFamily: "AggroLight" } }}
                    data={wordMap.slice(0, 5)}
                    x="text"
                    y="value"
                    labels={({ datum }) => `${datum.value}`}
                    labelComponent={
                        <VictoryTooltip
                            constrainToVisibleArea
                        />
                    }
                />
            </VictoryChart>
        </div>
    )
}

export default RankingBar;