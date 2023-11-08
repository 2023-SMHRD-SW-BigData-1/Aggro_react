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
        </g>
    )
}


export default CustomLabel