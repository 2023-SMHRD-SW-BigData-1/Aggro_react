import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer2 from "../../include/Footer2";
import Header1 from "../../include/Header1";
import CircularProgressBar from "./CircularProgressBar";
import SearchData from "./SearchData";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Ranking.css";
import styled from "styled-components";
import RankingBar from "./RankingBar";
import WordCloud from "./WordCloud";
import AgreeViewTab from "./AgreeViewTab";

const Ranking = ({ match }) => {
  const [data, setData] = useState([
    { x: "중립", y: 50, color: "#cfd9df" },
    { x: "부정", y: 40, color: "#c2e9fb" },
    { x: "긍정", y: 10, color: '#a1c4fd' }
  ]);

  const pdfRef = useRef(); // This ref is for capturing the App div for pdf generation

  const downloadPDF = () => {
    const input = pdfRef.current; 

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const heightRatio = pdfWidth * (imgHeight / imgWidth);
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, heightRatio);
      pdf.save('Report.pdf');
    });
  };

  let setStateInterval;

  useEffect(() => {
    setStateInterval = setInterval(() => {
      let a = Math.random(); 
      let b = Math.random(); 
      let c = Math.random(); 

      let data_legacy = [
        { x: "중립", y: a / (a + b + c) * 100, color: "#cfd9df" },
        { x: "부정", y: b / (a + b + c) * 100, color: "#c2e9fb" },
        { x: "긍정", y: c / (a + b + c) * 100, color: '#a1c4fd' }
      ].slice().sort((a, b) => a.y - b.y);

      setData(data_legacy);
    }, 2000);

    return () => {
      clearInterval(setStateInterval);
    };
  }, [data]);

  return (
    <>
      <Header1 />
      <div className="btn-box">
        <button className="PDF-btn" onClick={downloadPDF}>다운로드 PDF</button>
      </div>

      <div className="App" ref={pdfRef}>
        <div className="grid-container">
          <div className="grid-item">
              <p className="item-box-item">월간 검색량</p>
              <SearchData className="item-box-item" />
          </div>
          <div className="grid-item">
              <p className="item-box-item">막대그래프</p>
              <RankingBar className="item-box-item" />
          </div>
          <div className="grid-item">
              <p className="item-box-item">워드클라우드</p>
              <RankingBar className="item-box-item" />
               {/*<WordCloud className="item-box-item" />  워드클라우드 컴포넌트로 수정 */}
          </div>
          <div className="grid-item">
              <p className="item-box-item">긍부정</p>
              <CircularProgressBar className="item-box-item" data={data} />
          </div>
          <div className="grid-item merged">
              <p className="item-box-item merged">뷰탭</p>
              <AgreeViewTab className="item-box-item merged" /> {/* 동의보기 컴포넌트로 수정 */}
          </div>


        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default withRouter(Ranking);