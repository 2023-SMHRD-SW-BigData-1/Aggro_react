import React from 'react'
import { VictoryLabel, VictoryTooltip } from 'victory'

const CustomLabel = (props) => {

    return (
        <g>
            <VictoryLabel {...props} />
            <VictoryTooltip
                {...props}
                text={`${props.datum.x}: ${Math.round(props.datum.y)}%`}
                x={200}
                y={250}
                orientation="top"
                pointerLength={0}
                cornerRadius={50}
                flyoutStyle={{ fill: props.datum.color }}
            />
        </g>
    )
}


export default CustomLabel