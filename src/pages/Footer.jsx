import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="w-100 text-center bg-dark shadow ">
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center text-primary mb-4 mt-3' >
        <a href="https://www.linkedin.com/in/ashitha-raj-4870421b3" target='_blank'><i className="fa-brands fa-linkedin text-info me-5 me-md-5 fs-2 fs-md-1"></i></a>
        <a href="https://github.com/Ashh-Codes" target='_blank'><i className="fa-brands fa-github text-info  me-5 me-md-5 fs-2 fs-md-1"></i></a>
          <a href="https://www.gmail.com" target='_blank'><i className="fa-solid fa-envelope text-info  me-5 me-md-5 fs-2 fs-md-1"></i></a>
          
        </div>
        <h5>
          Designed and developed by Ashitha Raj
        </h5>
        <h5>
        &copy; Copyright 2024 ,All rights reserved
        </h5>
      </div>
      <div className='d-flex justify-content-end '>
      <a href="#home" ><button className='btn '><i className="fa-solid fa-angle-up brands"></i></button></a>

      </div>
    </div>
  )
}

export default Footer
