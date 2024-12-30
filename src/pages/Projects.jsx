import React from 'react'
import { Card, CardText } from 'react-bootstrap'
import blood from '../assets/blood.png'
import portfolio from '../assets/portfolio.png'
import recipe from '../assets/recipe.png'


const Projects = () => {
  return (
    <div id='projects'>
      <div className="mt-3">
                <h1 className='text-center'>My Projects</h1>
                <div className="d-flex w-100 align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                    <div  className='shadow rounded p-5 mt-5 mb-5 w-75'>
                        <div className="row">
                          <div className="col-lg-4">
                          <Card className='shadow '>
                                <Card.Img className='img-fluid'  height={'200px'} variant="top" src={blood} />
                                  <Card.Body>
                                   <Card.Title className='text-center'>Blood Donation</Card.Title>
                                   <h5 className='text-info '>MERN STACK Blood donation website</h5>
                                   <h5>Key features</h5>
                                   <ul>
                                    <li>Created multiple custom API using Nodejs and integrated it with a React setup.</li>
                                    <li>Followed best code practices while developing dynamic and reusable code.</li>
                                    <li>Login based on Authentication.</li>
                                   </ul>
                                   <CardText className='d-flex justify-content-between'>
                                         <a href="https://ashh-codes-blood-donation-mern.netlify.app" target='_blank'> <button className='btn btn-secondary'>Preview</button></a>
                                         <a href="https://github.com/Ashh-Codes/Blood-donation" target='_blank'><button className='btn btn-secondary'>Source Code<i className="fa-brands fa-github ms-2"></i></button></a> 
                                      </CardText>
                                    
     
                                  </Card.Body>
                         </Card>
                          </div>
                          <div className="col-lg-4">
                          <Card className='shadow '>
                                <Card.Img className='img-fluid'  height={'200px'} variant="top" src={portfolio} />
                                  <Card.Body>
                                   <Card.Title className='text-center'>Portfolio</Card.Title>
                                   <h5 className='text-info '>React Portfolio website</h5>
                                   <h5>Key features</h5>
                                   <ul>
                                    <li>Fully responsive front end web page setup.</li>
                                    <li>Created all the components from scratch using react and java script.</li>
                                    <li>Hand coded custom amination using css  making the website interactive and user-friendly</li>
                                   
                                   </ul>
                                   <CardText className='d-flex justify-content-between'>
                                         <a href="https://react-googleauth-recipe.netlify.app/" target='_blank'> <button className='btn btn-secondary'>Preview</button></a>
                                         <a href="https://github.com/Ashh-Codes/react-portfolio" target='_blank'><button className='btn btn-secondary'>Source Code<i className="fa-brands fa-github ms-2"></i></button></a> 
                                      </CardText>
                                    
     
                                  </Card.Body>
                         </Card>
                         <a href="https://github.com/Ashh-Codes" target='_blank'><button className='mt-3 btn ms-5'>See More...</button></a>
                          </div>
                          <div className="col-lg-4">
                          <Card className='shadow '>
                                <Card.Img className='img-fluid'  height={'200px'} variant="top" src={recipe} />
                                  <Card.Body>
                                   <Card.Title className='text-center'>Recipe Website</Card.Title>
                                   <h5 className='text-info '>Front End Static website</h5>
                                   <h5>Key features</h5>
                                   <ul>
                                    <li>Fully responsive static front end web page setup..</li>
                                    <li>Enabled google authentication</li>
                                    <li>Integration of Redux into React application, providing a scalable and maintainable way to manage state.</li>
                                    <li>Tailwind css for styling.</li>
                                   </ul>
                                   <CardText className='d-flex justify-content-between'>
                                   <a href="https://react-googleauth-recipe.netlify.app/" target='_blank'> <button className='btn btn-secondary'>Preview</button></a>
                                   <a href="https://github.com/Ashh-Codes/RecipeReduxApp" target='_blank'><button className='btn btn-secondary'>Source Code<i className="fa-brands fa-github ms-2"></i></button></a> 
                                      </CardText>
                                    
     
                                  </Card.Body>
                         </Card>
                         
                          </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
    </div>
  )
}

export default Projects
