import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const AgreeViewTab = () => {

    const data = [
        { rank: 1, userNick: "더 나은 나 더 나은 세상", title: '홍준표 "국회의원 80명이면 돼... 합의하면 지도부 퇴진운동" VS "이재명 외 대안 없다" 발언에...', content: "홍준표 대구 시장은 여야가 선거제도 개편안을 전원위원회 논의 안건으로 정한 것과 관련해", noticeAt: "2023.03.14" },
        { rank: 2, userNick: "✔류리식스✔", title: "이재명", content: "", noticeAt: "2023.03.13" },
        { rank: 3, userNick: "여행의 사고", title: "윤영찬", content: "", noticeAt: "2023.04.28" },
        { rank: 4, userNick: "녹강천연물농법", title: "홍준표?", content: "", noticeAt: "2033.01.01" },
        { rank: 5, userNick: "대구는 요즘 어때?", title: "홍준표..", content: "", noticeAt: "1900.01.01" },
        { rank: 6, userNick: "세상몽!", title: "죄다 홍준표", content: "", noticeAt: "0000.01.01" },
        { rank: 7, userNick: "유무둥둥인", title: "이재명", content: "", noticeAt: "9999.12.31" },
    ]



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
                    {data.map((view) => (
                        <tr className='item-box-tablerow' key={view.rank}>
                            <td style={{backgroundColor:"#5e729e"}}>{view.rank}</td>
                            <td className='item-box-tabledata' title={view.title}>{view.title}</td>
                            <td className='item-box-tabledata' title={view.content}>{view.content}</td>
                            <td className='item-box-tabledata'>{
                                moment().diff(moment(view.noticeAt, "YYYY.MM.DD"), 'days') > 7 ?
                                    view.noticeAt
                                    : moment(view.noticeAt, "YYYY.MM.DD").startOf("second").fromNow()
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AgreeViewTab