import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const axiosTest = () => {
      axios.get('/bigdata/test')
      .then((res)=>{
        console.log(res)
      })
      .catch(()=>{})
  }

  return (
    <div className="">
      <button onClick={axiosTest}>
        통신 테스트 버튼
      </button>
    </div>
  );
}

export default App;
