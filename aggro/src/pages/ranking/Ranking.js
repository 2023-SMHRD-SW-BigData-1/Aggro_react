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

const Ranking = ({ history, match }) => {

  const userNameRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();


    const searchName = userNameRef.current.value

    history.push("/ranking/" + searchName);

    userNameRef.current.value = ""
  };

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;

    // html2canvas 라이브러리를 사용하여 HTML 요소를 캔버스로 변환
    html2canvas(input, {
      scale: 1,
      useCORS: true,
      scrollY: -window.scrollY, // 스크롤 문제를 해결하기 위해 추가
      windowWidth: input.clientWidth,  // 클라이언트 너비를 사용
      windowHeight: input.clientHeight  // 클라이언트 높이를 사용
    }).then((canvas) => {
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
    { x: "부정", y: 40, color: "#f76d6d" },
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

        const total = Number(jsonObject.nagative) + Number(jsonObject.positive)

        pieData.map((data) => {
          switch (data.x) {
            case "부정":
              data.y = jsonObject.nagative / total * 100
              break;

            case "긍정":
              data.y = jsonObject.positive / total * 100

              break;

          }

        })
        setPieData(pieData.slice().sort((a, b) => a.y - b.y))
      })
      .catch((error) => {
        console.log(error);
      })

  }, [searchName])

  const [wordMap, setWordMap] = useState([])
  const [barData, setBarData] = useState([])

  // 워드클라우드 처리
  useEffect(() => {
    Axios
      .get("http://localhost:8283/bigdata/ranking/analyOpinion/" + searchName)
      .then((response) => {

        wordMap.splice(0) // 기존 데이터 삭제
        barData.splice(0)

        const keys = Object.keys(response.data) // 키 값을 text 에 넣기 위한 key 분리

        setWordMap((preWordMap) => {
          const newWordMap = keys.map((key) => ({
            text: key,
            value: Number(response.data[key])
          }))

          return [...preWordMap, ...newWordMap];
        })

        setBarData((preBarData) => {

          const newBarData = keys.map((key) => ({
            "x": key,
            "y": Number(response.data[key])
          }))

          return [...preBarData, ...newBarData]
        })
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
            ref={userNameRef}
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
        <div className="grid-containertext mt mb brone padding">
          `{searchName}` 에 대한 검색 결과입니다.
        </div>



        <div className="top-container">
          <div className="grid-item merged br1 blg">월간 검색량</div>
          <div className="grid-item br1"> 호감도 </div>
        </div>

        <div className="grid-containertwo">
          <div className="grid-item merged">
            {/* <p className="item-box-item_title title">월간 검색량</p> */}
            <SearchData className="item-box-item merged" searchData={searchData} />
          </div>


          <div className="grid-item">
            {/* <p className="item-box-item_title title bline">긍부정</p> */}
            <CircularProgressBar className="item-box-item" data={pieData} />
          </div>
        </div>

        <div className="middle-container">
          <div className="grid-item text blg" > 키워드별 검색량 </div>
          <div className="grid-item text blg"> 키워드별 검색량 </div>
          <div className="grid-item text merged blg"> 워드 클라우드 </div>
        </div>

        <div className="grid-container">
          <div className="grid-item ">
            {/* <RankingBar className="item-box-item " barData={barData} /> */}
          </div>
          <div className="grid-item ">
            <RankingBar className="item-box-item " barData={barData} />
          </div>
          <div className="grid-item merged">
            <MapWord className="item-box-item merged" wordMap={wordMap} />
          </div>
        </div>
        <div className="grid-containertext mb rd padding">
          View Tab
        </div>

        <div className="middle-container ">
          <div className="grid-item text merged blg">
            최신순
          </div>
          <div className="grid-item text merged blg">
            TOP 10
          </div>
        </div>
        <div className="view-grid-container">

          <div className="grid-item merged">
            {/* <p className="item-box-item_title title bline">뷰탭 </p> */}
            {/* 최신순 */}
            <AgreeViewTab className="item-box-item merged" type={"new"} searchData={searchData} />
          </div>

          <div className="grid-item merged">
            {/* <p className="item-box-item_title title bline">뷰탭 </p> */}
            {/* TOP 10 */}
            <AgreeViewTab className="item-box-item merged" type={"top"} searchData={searchData} />
          </div>
        </div>
      </div >
      <Footer2 />
    </>
  );
};

export default withRouter(Ranking);