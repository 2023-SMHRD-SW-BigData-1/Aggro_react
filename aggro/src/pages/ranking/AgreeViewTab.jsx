import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { a } from 'react-router-dom/cjs/react-router-dom.min'

const AgreeViewTab = ({ searchData }) => {

    const [data, setData] = useState([
        { rank: 1, crawlTitle: '홍준표 "국회의원 80명이면 돼... 합의하면 지도부 퇴진운동" VS "이재명 외 대안 없다" 발언에...', crawlContent: "홍준표 대구 시장은 여야가 선거제도 개편안을 전원위원회 논의 안건으로 정한 것과 관련해", crawlAt: "2023.03.14" },
        { rank: 2, crawlTitle: "이재명", crawlContent: "", crawlAt: "2023.03.13" },
        { rank: 3, crawlTitle: "윤영찬", crawlContent: "", crawlAt: "2023.04.28" },
        { rank: 4, crawlTitle: "홍준표?", crawlContent: "", crawlAt: "2033.01.01" },
        { rank: 5, crawlTitle: "홍준표..", crawlContent: "", crawlAt: "1900.01.01" },
        { rank: 6, crawlTitle: "죄다 홍준표", crawlContent: "", crawlAt: "0000.01.01" },
        { rank: 7, crawlTitle: "이재명", crawlContent: "", crawlAt: "9999.12.31" },
    ])

    useEffect(() => {
        const sortedSearchData = searchData.sort((a, b) => b.crawlViewCount - a.crawlViewCount).slice(0, 7);
        console.log(sortedSearchData);
        setData(sortedSearchData)
    }, [searchData])

    return (
        <div className="item-box-item">
            <table className='item-box-table' >
                <thead className='item-box-tableheader'>
                    <tr>
                        <th className='item-box-rank'>순번</th>
                        <th className='item-box-title'>제목</th>
                        <th className='item-box-content'>본문</th>
                        <th className='item-box-at'>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((view, index) => (
                        <tr className='item-box-tablerow' key={index + 1}>
                            <td style={{ backgroundColor: "#5e729e" }}>{index + 1}</td>
                            <td className='item-box-tabledata' title={view.crawlTitle}>
                                <a
                                    href={view.crawlUrl}
                                    target='_blank'
                                    style={{
                                        color: "black"
                                    }}
                                >
                                    {view.crawlTitle}
                                </a>
                            </td>
                            <td className='item-box-tabledata' title={view.crawlContent}>
                                <a
                                    href={view.crawlUrl}
                                    target='_blank'
                                    style={{
                                        color: "black"
                                    }}
                                >
                                    {view.crawlContent}
                                </a>
                            </td>
                            <td className='item-box-tabledata'>{
                                moment().diff(moment(view.crawlAt, moment.ISO_8601), 'days') > 7 ?
                                    moment(view.crawlAt, moment.ISO_8601).format("YY.MM.DD")
                                    : moment(view.crawlAt, moment.ISO_8601).startOf("second").fromNow()
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AgreeViewTab