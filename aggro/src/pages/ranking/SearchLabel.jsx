import React from 'react'
import { VictoryLabel, VictoryTooltip } from 'victory'

const SearchLabel = (props) => {

    const text = props.datum.b
    return (
        <g>
            <VictoryLabel {...props} />
            <VictoryTooltip
                {...props}
                text={text}
                orientation="top"
            />
        </g>
    )
}

export default SearchLabel