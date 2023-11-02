import React from 'react';
import './Intro.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Footer2 from "../../include/Footer2";
import Header1 from "../../include/Header1";

import img1 from "./1.jpg"
import img2 from "./2.jpg"
import logo from "./Aggro_blue.png"



function Intro() {
  return (
    <>
      <Header1 />
      <div className="intro-container">
        <h1 className='text merged fw'>세상의 모든 관심</h1>
        
        <div className="pic merged"><img src={logo} alt="Aggor_blue" /></div>
        {/* <h1 className='text merged fw'>' Aggro '</h1> */}
        <div>
          <div className="pic"><img src={img2} alt="image2" /></div>
        </div>

        <div>
          <div className='text fw'>혼자서도 <br></br>
          Even when alone</div>


        </div>

        <div>
          <div className='text fw'>전문적으로 <br></br>Professionally</div>
        </div>

        <div>
          <div className="pic"><img src={img1} alt="image1" /></div>
        </div>

      </div>
      <Footer2 />
    </>
  );
}

export default Intro;