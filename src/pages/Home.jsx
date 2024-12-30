import React from 'react'
import coding from '../assets/coding.gif'
import './styles.css';
import About from './About';

import Projects from './Projects';



const Home = () => {
  return (
    <div id='home'>
      <div className="row mt-5">
        <div className="col-lg-1">

        </div>
        <div className="col-lg-4 img-container">
        <img className='img-fluid zoom-animation' src={coding} alt="" />
        </div>
        <div className="col-lg-2">

        </div>
        <div className="col-lg-4 text-center">
            <p className='fs-4'>Hi,<br/>  I am  <span className='fs-2 p-2'>Ashitha Raj</span></p>
            <h1 className='text-info'>System Engineer</h1>
            <h5>As a System Engineer with experience in front-end development, application support, and cloud technologies, I specialize in leveraging tools like Docker, Kubernetes, and Azure. A special focus on designing user-friendly interfaces.</h5>
        </div>
        <div className="col-lg-1">
          
        </div>
      </div>
      <About/>
      <Projects/>
    </div>
    
  )
}

export default Home
