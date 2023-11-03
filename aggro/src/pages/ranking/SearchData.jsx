import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { VictoryChart, VictoryLine, VictoryScatter, VictoryTooltip, VictoryZoomContainer } from 'victory'


const SearchData = ({ searchData }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        if (searchData.length > 0) {
            // 응답 데이터를 처리
            const processedData = [];
            const dataMap = new Map();

            searchData.forEach((item) => {
                const crawlAtDate = new Date(item.crawlAt);

                // 2021년 1월 1일 이후의 데이터만 처리
                if (crawlAtDate >= new Date(new Date().getFullYear() - 2, 1, 1)) {
                    const crawlAt = crawlAtDate.toISOString().slice(0, 7); // YYYY-MM 형식으로 날짜 포맷 변환

                    if (dataMap.has(crawlAt)) {
                        dataMap.set(crawlAt, dataMap.get(crawlAt) + 1); // 날짜가 이미 있으면 b 값을 증가
                    } else {
                        dataMap.set(crawlAt, 1); // 날짜가 없으면 새로운 날짜로 초기화
                    }
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
        }
    }, [searchData]);

    return (

        <div className="item-box-item" style={{ overflow: "hidden" }}>

            <VictoryChart
                height={200}
                padding={{ top: 40, bottom: 40, left: 50, right: 50 }}
                animate={{
                    duration: 3000,
                    onLoad: { duration: 4000 }
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