import React, {useState, useCallback} from 'react';
import ReactWordcloud from 'react-wordcloud';
import "./Ranking.css";

const words = [
  { text: 'React', value: 1 },
  { text: 'JavaScript', value: 1 },
  { text: 'Node', value: 1 },
  { text: 'Express', value: 1 },
  { text: 'HTML', value: 1 },
  { text: 'React', value: 1 },
  { text: 'JavaScript', value: 1 },
  { text: 'Node', value: 1 },
  { text: 'Express', value: 1 },
  { text: 'HTML', value: 1 },
  { text: 'React', value: 1 },
  { text: 'JavaScript', value: 1 },
  { text: 'Node', value: 1 },
  { text: 'Express', value: 1 },
  { text: 'HTML', value: 1 },
  { text: 'React', value: 1 },
  { text: 'JavaScript', value: 1 },
  { text: 'Node', value: 1 },
  { text: 'Express', value: 1 },
  { text: 'HTML', value: 1 },
  { text: 'React', value: 1 },
  { text: 'JavaScript', value: 1 },
  { text: 'Node', value: 1 },
  { text: 'Express', value: 1 },
  { text: 'HTML', value: 1 },
  { text: 'React', value: 1 },
  { text: 'JavaScript', value: 1 },
  { text: 'Node', value: 1 },
  { text: 'Express', value: 1 },
  { text: 'HTML', value: 1 },
  // ... 기타 단어 및 빈도수를 추가할 수 있습니다.
];

function MapWord() {
  // 현재 호버된 단어
  const [hoveredWord, setHoveredWord] = useState(null);

  const options = {
    enableTooltip: false,
    deterministic: true,
    rotations: 1,
    rotationAngles: [0],
    transitionDuration: 1,
    fontFamily: 'sans-serif',
    fontWeight: '700',
    padding: 3,
    // 각 단어의 색상을 동적으로 결정
    colors: (word) => word.text === hoveredWord ? 'black' : 'white',
  };

  // 단어 위에 마우스가 올라갔을 때와 나갈 때의 콜백 함수
  const callbacks = {
    onWordMouseOver: useCallback((event) => setHoveredWord(event.text), []),
    onWordMouseOut: useCallback(() => setHoveredWord(null), []),
  };

  return (
    <div className="mapword-styled" style={{background: 'url(background_image_URL_here) center/cover'}}>
      <ReactWordcloud words={words} options={options} callbacks={callbacks} />
    </div>
  );
}

export default MapWord;