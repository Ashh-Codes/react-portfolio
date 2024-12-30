import React from 'react'
import html from '../assets/html.png'
import bootsrap from '../assets/bootsrap.png'
import javascript from '../assets/javascript.png'
import docker from '../assets/docker.png'
import npm from '../assets/npm.png'
import react from '../assets/react.png'
import git from '../assets/git.png'
import azure from '../assets/azure.png'
import mongodb from '../assets/mongodb.png'



const Skills = () => {
    return (
        <div id='skills'>
            <div className="row mt-5">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-3 ">
                    <h4 className='text-info text-center'>MARKUP / STYLING LANGUAGE</h4>
                    
                        <img className='img-fluid me-5' width={'200px'} height={'200px'} src={html} alt="" />
                        <h5 className='text-center'>HTML <span className='ms-5'>CSS</span> </h5>
                </div>
                <div className="col-lg-3 ms-4">
                    <h4 className='text-info text-center ms-3'>CSS FRAMEWORK</h4>
                    
                        <img className='img-fluid ms-3' width={'200px'} height={'200px'} src={bootsrap} alt="" />
                        <h5 className='text-center'>BOOTSTRAP</h5>

                </div>
                <div className="col-lg-3 ms-4">
                    <h4 className='text-info text-center'>FRONT-END LANGUAGE</h4>
                    
                        <img className='img-fluid ms-3' width={'200px'} height={'200px'} src={javascript} alt="" />
                        <h5 className='text-center'>JAVASCRIPT</h5>
                </div>
                <div className="col-lg-1">

                </div>
            </div>
            <div className="row mt-1">
               
                <div className="col-lg-4 ">
                    <h4 className='text-info text-center'>JAVASCRIPT FRAMEWORK</h4>
                   
                        <img className='img-fluid ms-2' width={'200px'} height={'200px'} src={react} alt="" />
                     

                </div>
                <div className="col-lg-4  ">
                    <h4 className='text-info text-center'>PACKAGE MANAGER</h4>
                   
                        <img className='img-fluid mt-5 ms-5' width={'200px'} height={'200px'} src={npm} alt="" />
                        
                </div>
                <div className="col-lg-4 ">
                    <h4 className='text-info text-center'>DATABASE MANAGEMENT</h4>
                    
                        <img className='img-fluid' width={'200px'} height={'200px'} src={mongodb} alt="" />
                     
                </div>
                
            </div>
            <div className="row mt-1">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-3">
                    <h4 className='text-info text-center'>VERSION CONTROL</h4>
                   
                        <img className='img-fluid' width={'200px'} height={'200px'} src={git} alt="" />
                        <h5 className='text-center'>GIT</h5>
                </div>
                <div className="col-lg-3 ms-3">
                    <h4 className='text-info text-center'>CLOUD PLATFORMS</h4>
             
                        <img className='img-fluid' width={'200px'} height={'200px'} src={azure} alt="" />
                        <h5 className='text-center'>AZURE</h5>

                </div>
                <div className="col-lg-3 ms-3">
                    <h4 className='text-info text-center'>PLATFORM SKILLS</h4>
                   
                        <img className='img-fluid' width={'200px'} height={'200px'} src={docker} alt="" />
                        <h5 className='text-center mt-4'  >DOCKER + KUBERNETES</h5>
                </div>
          
            </div>
        </div>
    )
}

export default Skills
