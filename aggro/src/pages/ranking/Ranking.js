import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer2 from "../../include/Footer2";
import Header1 from "../../include/Header1";
import CircularProgressBar from "./CircularProgressBar";
import SearchData from "./SearchData";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Ranking.css";
import RankingBar from "./RankingBar";
import WordCloud from "./WordCloud";
import AgreeViewTab from "./AgreeViewTab";
import imgSearch from "./Aggro_blue_mini.png";
import MapWord from "./MapWord";
import BarChartComponent from './BarChartComponent';

const Ranking = ({ history, match }) => {
  const [data, setData] = useState([
    { x: "중립", y: 50, color: "#cfd9df" },
    { x: "부정", y: 40, color: "#c2e9fb" },
    { x: "긍정", y: 10, color: '#a1c4fd' }
  ]);

  const searchName = match.params.userName

  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/ranking/" + username);
  };

  const pdfRef = useRef();

  const downloadPDF = () => {
    // PDF 생성을 위한 참조 (DOM 요소)
    const input = pdfRef.current;
  
    // html2canvas 라이브러리를 사용하여 HTML 요소를 캔버스로 변환
    html2canvas(input, {
      scale: 1, // 스케일 설정
      useCORS: true, // CORS 문제를 해결하기 위한 설정
      scrollY: -window.scrollY, // 현재 스크롤 위치를 고려하여 캡처
      windowWidth: input.clientWidth, // 캡처할 요소의 너비 사용
      windowHeight: input.clientHeight // 캡처할 요소의 높이 사용
    }).then((canvas) => {
      // 캔버스를 이미지 데이터로 변환
      const imgData = canvas.toDataURL('image/png');
  
      // jsPDF 인스턴스 생성 (가로 방향, 단위는 'mm', A4 크기, 높은 해상도로 설정)
      const pdf = new jsPDF('landscape', 'mm', 'a4', true);
  
      // PDF 페이지의 너비 계산
      const pdfWidth = pdf.internal.pageSize.getWidth();
  
      // 캔버스의 너비와 높이 계산
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      // 이미지의 높이와 너비 비율을 계산
      const heightRatio = pdfWidth * (imgHeight / imgWidth);
  
      // PDF 내 이미지의 위치와 크기를 설정하기 위한 여백 값
      const margin = 30;
  
      // 이미지를 PDF에 추가
      pdf.addImage(imgData, 'PNG', margin, margin, pdfWidth - 2 * margin, heightRatio - 2 * margin);
  
      // 'Report.pdf' 이름으로 PDF 저장
      pdf.save('Report.pdf');
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      let a = Math.random();
      let b = Math.random();
      let c = Math.random();

      const newData = [
        { x: "중립", y: a / (a + b + c) * 100, color: "#cfd9df" },
        { x: "부정", y: b / (a + b + c) * 100, color: "#c2e9fb" },
        { x: "긍정", y: c / (a + b + c) * 100, color: '#a1c4fd' }
      ].sort((a, b) => a.y - b.y);

      setData(newData);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header1 />

      <div className="btn-box">
        <form onSubmit={handleSubmit} className="summoner-search-form">
          <input
            type="text"
            name="username"
            onChange={handleInput}
            className="summoner-search-form__text__suggest"
            placeholder="검색어를 입력해주세요."
          />
          <button type="submit" className="summoner-search-form__button">
            <img src={imgSearch} alt="검색" className="btnImg" />
          </button>
        </form>





        <div className="searchbar"></div>


        <button className="PDF-btn" onClick={downloadPDF}>다운로드 PDF</button>
      </div>



      <div className="App" ref={pdfRef}>
        <div className="grid-container">
          <div className="grid-item">
            <p className="item-box-item">map 1</p>
            <MapWord className="item-box-item mapword-styled" />
          </div>
          <div className="grid-item">
          <p className="item-box-item">가제 2</p>
          <RankingBar className="item-box-item" /> {/* 이 부분을 수정했습니다. */}
        </div>
          <div className="grid-item">
            <p className="item-box-item">키워드별 검색량</p>
            <RankingBar className="item-box-item" />
          </div>

          <div className="grid-item merged">
            <p className="item-box-item merged">월간 검색량</p>
            <SearchData className="item-box-item merged" searchName = {searchName}/>
          </div>

          <div className="grid-item">
            <p className="item-box-item">워드클라우드</p>
            <WordCloud className="item-box-item" />
          </div>
          <div className="grid-item">
            <p className="item-box-item">긍부정</p>
            <CircularProgressBar className="item-box-item" data={data} />
          </div>
          <div className="grid-item merged">
            <p className="item-box-item merged">뷰탭</p>
            <AgreeViewTab className="item-box-item merged" />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default withRouter(Ranking);