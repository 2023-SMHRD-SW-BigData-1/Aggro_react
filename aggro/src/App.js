import logo from './logo.svg';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const axiosTest = () => {
    axios.get('bigdata/test')
      .then((res) => {
        console.log(res)
      })
      .catch(() => { })
  }

  const idRef = useRef();
  const pwRef = useRef();
  const nickRef = useRef();

  const [userData, setUserData] = useState({})

  const handleAxios = (e) => {
    e.preventDefault();

    setUserData({
      user_id: idRef.current.value,
      user_pw: pwRef.current.value,
      user_nick: nickRef.current.value,
      user_class: "0",
    })
  }

  useEffect(() => {
    userData.user_id !== undefined && 
      axios.post("bigdata/form", userData)
        .then((res) => {
          console.log(res);
        })
        .catch(() => {

        })
  }, [userData])

  return (
    <div className="">
      <button onClick={axiosTest}>
        통신 테스트 버튼
      </button>

      <form onSubmit={handleAxios}>
        <input type='text' placeholder='Id' ref={idRef} />
        <br />
        <input type='password' placeholder='Pw' ref={pwRef} />
        <br />
        <input type='text' placeholder='Nick' ref={nickRef} />
        <br />
        <input type='submit' value="form 타입 테스트" />
      </form>
    </div>
  );
}

export default App;
