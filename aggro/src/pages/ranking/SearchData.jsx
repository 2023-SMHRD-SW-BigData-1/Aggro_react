import React, { useState } from 'react'
import { VictoryAxis, VictoryBrushContainer, VictoryChart, VictoryLine, VictoryZoomContainer } from 'victory'


const SearchData = () => {
    const [state, setState] = useState({
        zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
    })

    const handleZoom = (domain) => {
        setState({ zoomDomain: domain })
    }


    return (
        <>
            <VictoryChart
                padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
                width={600} height={100} scale={{ x: "time" }}
                containerComponent={
                    <VictoryBrushContainer
                        brushDimension="x"
                        brushDomain={state.zoomDomain}
                        onBrushDomainChange={handleZoom.bind(this)}
                    />
                }
            >
                <VictoryAxis
                    tickFormat={(x) => new Date(x).getFullYear()}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "tomato" }
                    }}
                    data={[
                        { key: new Date(1982, 1, 1), b: 125 },
                        { key: new Date(1987, 1, 1), b: 257 },
                        { key: new Date(1993, 1, 1), b: 345 },
                        { key: new Date(1997, 1, 1), b: 515 },
                        { key: new Date(2001, 1, 1), b: 132 },
                        { key: new Date(2005, 1, 1), b: 305 },
                        { key: new Date(2011, 1, 1), b: 270 },
                        { key: new Date(2015, 1, 1), b: 470 }
                    ]}
                    x="key"
                    y="b"
                />
            </VictoryChart>

            <VictoryChart width={600} scale={{ x: "time" }}
                containerComponent={
                    <VictoryZoomContainer
                        zoomDimension='x'
                        zoomDomain={state.zoomDomain}
                        onZoomDomainChange={handleZoom.bind(this)}
                    />
                }
            >
                <VictoryLine
                    style={{
                        data: { stroke: "tomato" }
                    }}

                    data={[
                        { a: new Date(1982, 1, 1), b: 125 },
                        { a: new Date(1987, 1, 1), b: 257 },
                        { a: new Date(1993, 1, 1), b: 345 },
                        { a: new Date(1997, 1, 1), b: 515 },
                        { a: new Date(2001, 1, 1), b: 132 },
                        { a: new Date(2005, 1, 1), b: 305 },
                        { a: new Date(2011, 1, 1), b: 270 },
                        { a: new Date(2015, 1, 1), b: 470 }
                    ]}
                    x="a"
                    y="b"
                />
            </VictoryChart>

        </>
    )
}

export default SearchData