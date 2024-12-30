import React, { useState } from 'react'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'



const About = () => {
    const [skills,setskills]=useState(true)
    const [education,seteducation] =useState(false)
    const [experience,setexperience]=useState(false)

    const getSkills=()=>{
        setskills(true)
        seteducation(false)
        setexperience(false)
    }
    const getEducation=()=>{
        setskills(false)
        seteducation(true)
        setexperience(false)
    }
    const getExperience=()=>{
        setskills(false)
        seteducation(false)
        setexperience(true)
    }

    return (
        <div id='about'>
            <div className="mt-3">
                <h1 className='text-center'>About Me</h1>
                <div className="d-flex w-100 align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                    <div  className='shadow rounded p-5 mt-5 mb-5 w-75'>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                            <a href="#skills"><button onClick={getSkills} className='btn btn-secondary me-3'>Skills</button></a>
                            <a href="#education"><button onClick={getEducation} className='btn btn-secondary me-3'>Education</button></a>
                            <a href="#experience"><button onClick={getExperience} className='btn btn-secondary'>Experience</button></a>
                        </div>
                        <> 
                        {skills ? <Skills /> : null} 
                        {education ? <Education /> : null}
                         {experience ? <Experience /> : null} </>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
