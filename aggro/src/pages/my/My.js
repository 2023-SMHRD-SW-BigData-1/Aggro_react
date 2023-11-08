import React from 'react'
import Header1 from '../../include/Header1'
import Footer2 from '../../include/Footer2'

const My = () => {
  return (
    <>
    <Header1/>
    <div className="intro-container">
        <h1 className='introtext merged fw'>세상의 모든 관심 💬</h1>
        <div>
          <div className='introtext fw'>혼자서도 🤔<br></br>
          Even when alone</div>
        </div>
        <div>
          <div className='introtext fw'>전문적으로 😎<br></br>Professionally</div>
        </div>
      </div>
      <div className="intro-container">
        <h1 className='introtext merged fw'>세상의 모든 관심 💬</h1>
        <div>
          <div className='introtext fw'>혼자서도 🤔<br></br>
          Even when alone</div>
        </div>
        <div>
          <div className='introtext fw'>전문적으로 😎<br></br>Professionally</div>
        </div>
      </div>
    <Footer2/>
    </>
  )
}

export default My