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
const StyledMapWord = styled(MapWord)`
  width: 100%;  // 전체 그리드 항목의 너비에 맞게
  height: 100%; // 전체 그리드 항목의 높이에 맞게
  border: 1px solid #e0e0e0;  // 경계선 추가
  border-radius: 10px;  // 모서리 둥글게
  overflow: hidden;  // 넘치는 내용 숨기기

  // 추가적인 스타일링은 이곳에
`;

function MapWord() {
  return (
      <ReactWordcloud words={words} />
  );
}

export default MapWord;