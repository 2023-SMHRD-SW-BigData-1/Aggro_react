import React, { useEffect, useState } from 'react'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory'

const RankingBar = () => {
    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const [rgb, setRgb] = useState(getRandomColor)

    let setStateInterval;

    useEffect(() => {
        setStateInterval = setInterval(() => {
            setRgb(
                getRandomColor()
            )
        }, 3000)

        return () => {
            clearInterval(setStateInterval)
        }

    }, [rgb])
    return (

        <div className="item-box-item">
            <VictoryChart
                domainPadding={{ x: 15 }}
                style={{
                    parent:{
                        width: ''
                    }
                }}
            >
                <VictoryBar
                    padding={{ top: 0 }}
                    animate={{
                        duration: 3000,
                    }}
                    style={{ data: { fill: rgb } }}
                    data={[
                        { x: "x1", y: 2 }, { x: "x2", y: 4 }, { x: 'x3', y: 6 }, { x: 'x4', y: 8 }
                    ]}
                    x={"x"}
                    y="y"
                />
            </VictoryChart>
        </div>
    )
}

export default RankingBar