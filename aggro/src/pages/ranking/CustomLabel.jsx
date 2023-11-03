import React from 'react'
import { VictoryLabel, VictoryTooltip } from 'victory'

const CustomLabel = (props) => {
    return (
        <g>
            <VictoryLabel {...props}
                style={{
                    fill: "white",
                    fontSize: "24",
                    fontFamily: "AggroMedium"
                }}
            />
            <VictoryTooltip
                {...props}
                text={`${props.datum.x}: ${Math.round(props.datum.y)}%`}
                x={200}
                y={250}
                style={{
                    fill: "white",
                    fontSize: "18",
                    fontFamily: "AggroBold"
                }}
                orientation="top"
                pointerLength={0}
                cornerRadius={50}
                flyoutStyle={{ fill: props.datum.color, stroke: "white" }}
            />
        </g>
    )
}


export default CustomLabel