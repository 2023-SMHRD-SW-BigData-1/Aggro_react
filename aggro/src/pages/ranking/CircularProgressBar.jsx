import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';
import CustomLabel from './CustomLabel';

const CircularProgressBar = ({ data }) => {
    return (
        <div className="item-box-item">
            <VictoryPie
                style={{
                    labels: { fill: "black" },
                    parent: {
                        width: ''
                    }
                }}
                padding={0}
                innerRadius={2}
                animate={{ duration: 1000 }}
                labelRadius={120}
                cornerRadius={5}
                padAngle={1.5}
                labels={({ datum }) => `${datum.x}\n${Math.round(datum.y)}%`}
                colorScale={data.map((color) => color.color)}
                labelComponent={<CustomLabel />}
                data={data}
            />
        </div>
    );

}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

export default CircularProgressBar

