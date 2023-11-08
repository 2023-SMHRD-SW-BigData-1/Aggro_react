import React from 'react';
import ReactWordcloud from 'react-wordcloud';


const MapWord = ({ wordMap }) => {
  const options = {
    enableTooltip: false,       // 툴팁 활성화 여부. 현재는 비활성화 상태
    deterministic: true,       // 레이아웃의 결정론적 생성 여부. true로 설정하면 항상 동일한 레이아웃을 생성
    rotations: 0,              // 회전 횟수.
    rotationAngles: [0],       // 회전 각도. 현재는 0도만 사용
    transitionDuration: 3000,  // 전환 지속 시간. 1로 설정하여 전환 효과의 지속 시간을 짧게 설정
    fontFamily: 'AggroLight',  // 사용할 글꼴
    fontWeight: '800',         // 글꼴의 굵기.
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
          // 콜백은 이제 빈 객체를 전달하거나 속성 자체를 생략
        />
      </div>
    </div>
  );
}

export default MapWord;