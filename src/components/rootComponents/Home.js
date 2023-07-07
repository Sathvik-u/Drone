import React from 'react'
import './Home.css'
import droneHome from'../images/droneHome.svg'
import ProjectDetails from '../projectDetails/ProjectDetails'
import Specifications from '../specifications/Specifications'
function Home() {
  return (
    <div>
    <div className='container text-white '>
      <h1 className='text-center'>One drone many applications</h1>
      <h2 style={{color:'green'}} className='text-center'>Modular Drone!</h2>
        <div className='d-flex justify-content-center p-3'><img src={droneHome} width='50%'  alt="papam"/></div>
        <div><p>
<b>A modular drone</b> is a special kind of drone that can be changed easily. It's like building with blocks – you can add or remove different parts. <br/> This lets you customize the drone for different tasks.<br/> You can attach different cameras, sensors, or even arms to make the drone do different things.<br/> It's useful because you don't have to buy a whole new drone each time you want to do something different.<br/> People like photographers, filmmakers, and scientists use modular drones because they can change them to suit their needs.<br/> It's also a good way for hobbyists to learn and try out new things with drones.<br/> Overall, modular drones give you the freedom to customize and upgrade the drone to do what you want it to do.</p></div>


    </div>

    <div className='container'>
      <ProjectDetails/>
      <Specifications/>
      </div>
    </div>
  )
}

export default Home