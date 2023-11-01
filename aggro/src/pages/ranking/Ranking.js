import Axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer2 from "../../include/Footer2";
import Header1 from "../../include/Header1";
import imgSearch from "./Aggro_blue_mini.png";
import AgreeViewTab from "./AgreeViewTab";
import CircularProgressBar from "./CircularProgressBar";
import MapWord from "./MapWord";
import "./Ranking.css";
import RankingBar from "./RankingBar";
import SearchData from "./SearchData";
import WordCloud from "./WordCloud";

const Ranking = ({ history, match }) => {

  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
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

  // 긍부정 데이터

  const [pieData, setPieData] = useState([
    { x: "중립", y: 50, color: "#cfd9df" },
    { x: "부정", y: 40, color: "#c2e9fb" },
    { x: "긍정", y: 10, color: '#a1c4fd' }
  ]);

  // 긍부정 데이터 가공 끝

  // 서치데이터 처리

  const searchName = match.params.searchName

  const [searchData, setSearchData] = useState([]) // 특정 키워드로 가져온 데이터

  useEffect(() => {
    if (searchName) {
      Axios
        .get("http://localhost:8283/bigdata/ranking/detail/" + searchName)
        .then((response) => {

          setSearchData(response.data)
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [searchName])
  // 서치데이터 가공 처리 끝

  // api 테스트
  useEffect(() => {
    Axios
      .post(
        `http://localhost:8283/bigdata/api/analyzeSentiment`, { content: searchName })
      .then((response) => {
        const jsonObject = JSON.parse(response.data.sentDetails)

        pieData.map((data) => {
          switch (data.x) {
            case "부정":
              data.y = jsonObject["negative"]
              break;

            case "긍정":
              data.y = jsonObject["positive"]

              break;

            case "중립":
              data.y = jsonObject["neutral"]
              break;

          }

        })
        setPieData(pieData.slice().sort((a, b) => a.y - b.y))
      })
      .catch((error) => {
        console.log(error);
      })


  }, [searchName])


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
            <SearchData className="item-box-item merged" searchData={searchData} />
          </div>


          <div className="grid-item">
            <p className="item-box-item">워드클라우드</p>
            <WordCloud className="item-box-item" />
          </div>
          <div className="grid-item">
            <p className="item-box-item">긍부정</p>
            <CircularProgressBar className="item-box-item" data={pieData} />
          </div>
          <div className="grid-item merged">
            <p className="item-box-item merged">뷰탭</p>
            <AgreeViewTab className="item-box-item merged" searchData={searchData} />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default withRouter(Ranking);