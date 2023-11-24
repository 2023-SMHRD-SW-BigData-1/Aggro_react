import React from 'react';
import ReactWordcloud from 'react-wordcloud';


const MapWord = ({ wordMap }) => {
  const options = {
    enableTooltip: false,       // 툴팁 활성화 여부
    deterministic: true,       // 레이아웃의 결정론적 생성 여부
    rotations: 0,              // 회전 횟수
    rotationAngles: [0],       // 회전 각도
    transitionDuration: 3000,  // 전환 지속 시간
    fontFamily: 'AggroLight',  // 사용할 글꼴
    fontWeight: '800',         // 글꼴의 굵기
    fontSizes: [20, 70],       // 최소 및 최대 폰트 크기 설정
    padding: 10,               // 단어 간의 여백
    maxWords: 50               // 최대 단어 수 설정
  };

  return (
    <div className='item-box-item'>
      <div className="mapword-styled">
        <ReactWordcloud
          words={wordMap}
          options={options}
        />
      </div>
    </div>
  );
}

export default MapWord;