import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
  { text: 'React', value: 100 },
  { text: 'JavaScript', value: 80 },
  { text: 'Node', value: 50 },
  { text: 'Express', value: 40 },
  { text: 'HTML', value: 30 },
  // ... 기타 단어 및 빈도수를 추가할 수 있습니다.
];

function MapWord() {
  return (
    <div style={{ width: '600px', height: '400px' }}>
      <ReactWordcloud words={words} />
    </div>
  );
}

export default MapWord;