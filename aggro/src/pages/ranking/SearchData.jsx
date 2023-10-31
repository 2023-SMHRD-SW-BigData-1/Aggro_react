import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VictoryAxis, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryLine, VictoryTooltip, VictoryZoomContainer } from 'victory'
import SearchLabel from './SearchLabel'


const SearchData = ({ searchName }) => {
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
        if (searchName) {
            axios
                .get("http://localhost:8283/bigdata/ranking/detail/" + searchName)
                .then((response) => {
                    // 응답 데이터를 처리
                    const processedData = [];
                    const dataMap = new Map();

                    response.data.forEach((item) => {
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
                })
                .catch((error) => {
                    console.log(error);
                });
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
    }, [searchName])

    return (

        <div className="item-box-item" style={{ overflow: "hidden" }}>

            <VictoryChart
                width="100%"
                padding={{ top: 0, left: 50, right: 50, bottom: 40 }}
                style={{
                  parent: {
                    width: '100%'
                  }
                }}
            >

                <VictoryLine
                    style={{
                        data: { stroke: "tomato" },

                    }}
                    data={data}
                    x="a"
                    y="b"

                />
            </VictoryChart>


        </div>
    )
}


export default SearchData