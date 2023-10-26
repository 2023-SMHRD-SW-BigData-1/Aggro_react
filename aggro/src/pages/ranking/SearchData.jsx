import React, { useState } from 'react'
import { VictoryAxis, VictoryBrushContainer, VictoryChart, VictoryLine, VictoryZoomContainer } from 'victory'


const SearchData = () => {
    const [state, setState] = useState({
        zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
    })

    const handleZoom = (domain) => {
        setState({ zoomDomain: domain })
    }

    const [data, setData] = useState([
        { a: new Date(1982, 1, 1), b: 125 },
        { a: new Date(1987, 1, 1), b: 257 },
        { a: new Date(1993, 1, 1), b: 345 },
        { a: new Date(1997, 1, 1), b: 515 },
        { a: new Date(2001, 1, 1), b: 132 },
        { a: new Date(2005, 1, 1), b: 305 },
        { a: new Date(2011, 1, 1), b: 270 },
        { a: new Date(2015, 1, 1), b: 470 }
    ])

    return (

        <div className="item-box-item" style={{ overflow: "hidden" }}>

            <VictoryChart scale={{ x: "time" }}
                padding={{ top: 0, bottom: 40, left: 50, right: 50 }}
                style={{
                    parent: {
                    }
                }}
                containerComponent={
                    <VictoryZoomContainer
                        zoomDimension='x'
                        zoomDomain={state.zoomDomain}
                        onZoomDomainChange={handleZoom.bind(this)}
                        allowResize={false}

                    />
                }
            >
                <VictoryLine
                    style={{
                        data: { stroke: "tomato" },

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
            <VictoryChart
                padding={{ top: 0, left: 50, right: 50, bottom: 40 }}
                height={3500}
                scale={{ x: "time" }}
                style={{
                    parent: {
                        width: "10%"
                    }
                }}
                containerComponent={
                    <VictoryBrushContainer
                        brushDimension="x"
                        brushDomain={state.zoomDomain}
                        onBrushDomainChange={handleZoom.bind(this)}
                        allowResize={false}
                        allowDrag={true}
                    />
                }
            >
                <VictoryAxis
                    tickFormat={(x) => new Date(x).getFullYear()}
                />
                <VictoryLine horizontal
                    style={{
                        data: { stroke: "tomato" },
                        parent: {
                        }
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

        </div>
    )
}

export default SearchData