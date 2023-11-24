import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryTooltip } from 'victory';


const SearchData = ({ searchData }) => {

    const [data, setData] = useState([])

    useEffect(() => {

        if (searchData.length > 0) {
            const processedData = [];
            const dataMap = new Map();
            searchData.forEach((item) => {
                const crawlAtDate = new Date(item.crawlAt);
                // 기간지정
                if (crawlAtDate >= new Date(new Date().getFullYear() - 2, 1, 1)) {
                    const crawlAt = crawlAtDate.toISOString().slice(0, 7); 
                    if (dataMap.has(crawlAt)) {
                        dataMap.set(crawlAt, dataMap.get(crawlAt) + 1);
                    } else {
                        dataMap.set(crawlAt, 1);
                    }
                }
            });

            dataMap.forEach((value, key) => {
                processedData.push({
                    a: new Date(key),
                    b: value,
                });
            });
            setData(processedData);
        }
    }, [searchData]);

    return (
        <div className="item-box-item" style={{ overflow: "hidden" }}>
            <VictoryChart
                height={200}
                padding={{ top: 10, bottom: 30, left: 70, right: 20 }}
                animate={{
                    duration: 3000,
                    onLoad: { duration: 4000 }
                }}
            >
                <VictoryAxis
                    tickValues={[
                        new Date(new Date().getFullYear() - 2, 0, 1),
                        new Date(new Date().getFullYear() - 1, 0, 1),
                        new Date(new Date().getFullYear(), 0, 1)]
                    }
                    tickFormat={(x) => moment(x).format("YYYY")}
                    style={{
                        axis: { stroke: "black" },
                        grid: {
                            stroke: "#eaeaea",
                        }
                    }}
                />
                <VictoryAxis
                    dependentAxis 
                    tickFormat={(y) => y} 
                />
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