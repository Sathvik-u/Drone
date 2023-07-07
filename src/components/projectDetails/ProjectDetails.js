import React from 'react'

function ProjectDetails() {
  return (
    <div className='container'>
      <p className='display-3 text-center text-warning'>Project Details</p>
      <div className='p-3'>
      <h5 className='text-white'>With this drone kit we can do all these Modules as <b className=''>It is a modular drone</b></h5>
      <div className='container p-3'>
      <p className='text-white'>1. Aerial Photography and Videography: </p>
      <p className='text-white'>2. Drone Delivery: </p>
      <p className='text-white'>3. Environmental Monitoring: </p>
      
      <p className='text-white'>4. Agricultural Applications:</p>
      <p className='text-white'>5. Mapping and Surveying:</p>
      </div>
      <div className='text-white'>
        <h5>But We want to achivwork on these first</h5>
        <p className='text-white'><b>Mile Stone 1.</b> <a className='text-white' href='./ourWork/autonomusDrone'>Autonomus Drone</a> </p>
        <p className='text-white'><b> Mile Stone 2.</b><a className='text-white' href='./ourWork/3DImaging'> Aerial Photography and Videography(3D modeling)</a></p>
        <p className='text-white'><b>Mile Stone 3.</b><a className='text-white' href='./ourWork/IntruderFollower'> Intruder follower</a></p>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetails


