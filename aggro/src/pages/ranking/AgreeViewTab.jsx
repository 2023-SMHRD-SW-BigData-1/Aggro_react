import moment from 'moment'
import React, { useEffect, useState } from 'react'

const AgreeViewTab = ({ searchData, type }) => {

    const [popData, setPopData] = useState([])

    useEffect(() => {

        console.log(type);

        switch (type) {
            case "top":
                if (searchData.length > 0) {
                    const sortedSearchData = searchData.sort((a, b) => b.crawlViewCount - a.crawlViewCount).slice(0, 10);
                    setPopData(sortedSearchData)
                }
                break;

            case "new":
                if (searchData.length > 0) {
                    const sortedSearchData = searchData.sort((a, b) => new Date(b.crawlAt) - new Date(a.crawlAt)).slice(0, 10);
                    setPopData(sortedSearchData)
                }
                break;
        }

    }, [searchData])

    return (
        <div className="item-box-item">
            <table className='item-box-table' >
                <thead className='item-box-tableheader'>
                    <tr>
                        <th className='item-box-rank'>순번</th>
                        <th className='item-box-title'>제목</th>
                        {/* <th className='item-box-content'>본문</th> */}
                        <th className='item-box-at'>
                            {
                                type === "new" ?
                                    "작성일"
                                    : "조회수"
                            }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {popData.map((view, index) => (
                        <tr className='item-box-tablerow' key={index + 1}>
                            <td style={{ backgroundColor: "#5383e8" }}>{index + 1}</td>
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
                            <td className='item-box-tabledata'>

                                {
                                    type === "new" ?

                                        moment().diff(moment(view.crawlAt, moment.ISO_8601), 'days') > 30 ?
                                            moment(view.crawlAt, moment.ISO_8601).format("YY.MM.DD")
                                            : moment(view.crawlAt, moment.ISO_8601).startOf("second").fromNow()
                                        : (view.crawlViewCount).toLocaleString()

                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AgreeViewTab