import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryLine, VictoryScatter, VictoryTooltip, VictoryZoomContainer } from 'victory'
import SearchLabel from './SearchLabel'
import moment from 'moment'


const SearchData = ({ searchData }) => {
    const [state, setState] = useState({
        zoomDomain: {
            x: [
                new Date().setFullYear(new Date().getFullYear() - 3),
                new Date()
            ]
        }
    })

    const handleZoom = (domain) => {
        setState({ zoomDomain: domain })
    }

    const [data, setData] = useState([])

    useEffect(() => {
        if (searchData.length > 0) {
            // 응답 데이터를 처리
            const processedData = [];
            const dataMap = new Map();

            searchData.forEach((item) => {
                const crawlAt = new Date(item.crawlAt).toISOString().slice(0, 7); // YYYY-MM-DD 형식으로 날짜 포맷 변환

                if (dataMap.has(crawlAt)) {
                    dataMap.set(crawlAt, dataMap.get(crawlAt) + 1); // 날짜가 이미 있으면 b 값을 증가
                } else {
                    dataMap.set(crawlAt, 1); // 날짜가 없으면 새로운 날짜로 초기화
                }
            });

            dataMap.forEach((value, key) => {
                processedData.push({
                    a: new Date(key),
                    b: value,
                });
            });

            // 데이터를 상태로 설정
            setData(processedData);
            setState({
                zoomDomain: {
                    x: [
                        new Date().setFullYear(new Date().getFullYear() - 3),
                        new Date()
                    ]
                }
            })

        } else {
            setData([
                { a: new Date(1982, 1, 1), b: 125 },
                { a: new Date(1987, 1, 1), b: 257 },
                { a: new Date(1993, 1, 1), b: 345 },
                { a: new Date(1997, 1, 1), b: 515 },
                { a: new Date(2001, 1, 1), b: 132 },
                { a: new Date(2005, 1, 1), b: 305 },
                { a: new Date(2011, 1, 1), b: 270 },
                { a: new Date(2015, 1, 1), b: 470 }
            ])
        }
    }, [searchData])

    return (

        <div className="item-box-item" style={{ overflow: "hidden" }}>

            <VictoryChart
                padding={{ top: 0, bottom: 40, left: 50, right: 50 }}
                containerComponent={
                    <VictoryZoomContainer
                        zoomDomain={state.zoomDomain}
                        onZoomDomainChange={handleZoom.bind(this)}
                        allowZoom={false}

                    />
                }
            >

                <VictoryLine
                    style={{
                        data: { stroke: "tomato" },

                    }}
                    data={data}
                    x="a"
                    y="b"

                />
                <VictoryScatter
                    style={{
                        data: { fill: "tomato" },

                    }}
                    data={data}
                    x="a"
                    y="b"
                    labels={({ datum }) => `일시: ${moment(datum.a).format("YY년 MM월")}\n검색량:${datum.b}`}
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


export default SearchData