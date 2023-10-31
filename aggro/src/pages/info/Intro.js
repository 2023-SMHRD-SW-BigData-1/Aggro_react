import React from 'react';
import './Intro.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Footer2 from "../../include/Footer2";
import Header1 from "../../include/Header1";

function Intro() {
  return (
<>
<Header1 />
    <div className="intro-container">
      <h1>test!</h1>
      <p>
       test1
      </p>
    </div>
<Footer2 />
</>
  );

}

export default Intro;