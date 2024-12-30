import React from 'react'

const Experience = () => {
  return (
    <div id='experience'>
      <h4 className='text-info mt-5'>System Engineer at Infosys 2021-Present</h4>
      <div className="row">
        <div className="col-lg-6">
        <h5 className='mt-3'>July 2024 -Present</h5>
        <ul>
            <li>Developed and maintained containerized applications using Docker.</li>
            <li>Azure Kubernetes Service (AKS): Implemented and managed AKS clusters for orchestrating containerized applications</li>
            <li>Cluster Management: Monitored and optimized Kubernetes clusters, handling node scaling, resource allocation, and persistent storage configurations.</li>
            <li>Azure Application Gateway: Configured and managed Azure Application Gateway for load balancing</li>
        </ul>
        </div>
        <div className="col-lg-6">
        <h5>December 2021– July 2024</h5>
        <ul>
            <li>Built dynamic and interactive web pages using HTML, CSS, JavaScript and React.</li>
            <li>Fixing of bugs detected by QA</li>
            <li>Developed and maintained robust web applications using React, Redux, and Java
            script</li>
            <li>Integrated RESTful APIs to fetch and display dynamic data.</li>
            <li>Provide day-to-day support for critical business applications, ensuring high
            availability and performance.</li>
            <li>Incident Management</li>
            <li>Problem solving of issues reported by users in production application via
            Debugging and code fixing.</li>
        </ul>
        </div>
      </div>
     
    </div>
  )
}

export default Experience
