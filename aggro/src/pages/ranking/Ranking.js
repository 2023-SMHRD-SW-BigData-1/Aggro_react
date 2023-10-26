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


const Ranking = ({ history }) => {
  // 데이터 상태 설정
  const [data, setData] = useState([
    {
      x: "중립",
      y: 50,
      color: "#cfd9df"
    },
    {
      x: "부정",
      y: 40,
      color: "#c2e9fb"
    },
    {
      x: "긍정",
      y: 10,
      color: '#a1c4fd'
    }
  ]);

  const pdfRef = useRef();

  // PDF 다운로드 함수
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Report.pdf');
    });
  };

  let setStateInterval;

  // 데이터 업데이트 및 정렬을 수행하는 useEffect
  useEffect(() => {
    setStateInterval = setInterval(() => {
      let a = Math.random(); // 긍정 테스트
      let b = Math.random(); // 중립 테스트
      let c = Math.random(); // 부정 테스트

      let max = Math.round((Math.max(a, b + c) == a) ? a : b + c);

      let data_legacy = [
        {
          x: "중립",
          y: a / (a + b + c) * 100,
          color: "#cfd9df"
        },
        {
          x: "부정",
          y: b / (a + b + c) * 100,
          color: "#c2e9fb"
        },
        {
          x: "긍정",
          y: c / (a + b + c) * 100,
          color: '#a1c4fd'
        }
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
      <div className="item-box-container" ref={pdfRef}>
        <div className="item-box-card">
          <p className="item-box-item">긍부정</p>
          <CircularProgressBar className="item-box-item" data={data} />
        </div>
        <div className="item-box-card">
          <p className="item-box-item">월간 검색량</p>
          <SearchData className="item-box-item" />
        </div>
        <div className="item-box-card">
          <p className="item-box-item">막대그래프</p>
          <RankingBar className="item-box-item" />
        </div>
        <div className="item-box-card">
        <p className="item-box-item">워드클라우드</p>
          
          <SearchData />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default withRouter(Ranking);