import React, { useCallback, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';

const MapWord = ({ wordMap }) => {
  // 현재 호버된 단어
  const [hoveredWord, setHoveredWord] = useState(null);

  const options = {
    enableTooltip: false,       // 툴팁 활성화 여부. 현재는 비활성화 상태
    deterministic: true,       // 레이아웃의 결정론적 생성 여부. true로 설정하면 항상 동일한 레이아웃을 생성
    rotations: 0,              // 회전 횟수. 
    rotationAngles: [0],       // 회전 각도. 현재는 0도만 사용
    transitionDuration: 2000,     // 전환 지속 시간. 1로 설정하여 전환 효과의 지속 시간을 짧게 설정
    fontFamily: 'AggroLight',  // 사용할 글꼴
    fontWeight: '700',         // 글꼴의 굵기. 
    padding: 0.5,                // 단어 간의 여백
    // 각 단어의 색상을 동적으로 결정. 현재 마우스 오버된 단어는 'black', 그렇지 않으면 'white'로 설정
  };

  // 단어 위에 마우스가 올라갔을 때와 나갈 때의 콜백 함수
  const callbacks = {
    onWordMouseOver: useCallback((event) => setHoveredWord(event.text)),
    onWordMouseOut: useCallback(() => setHoveredWord(null), []),
  };

  return (
    <div className='item-box-item'>
      <div className="mapword-styled" >
        <ReactWordcloud
          words={wordMap}
          options={options}
          callbacks={callbacks}
        />
      </div>
    </div>
  );
}

export default MapWord;