import React from 'react'

function Specifications() {
  return (
    <div className='home rounded text-white' >
    <h2 className='text-center display-4'>Drone</h2>
    <h3 className='text-center text-warning'> Techinical Specifications</h3>
    <div className='d-flex container'>

    <div className='p-2'>
    <h4>Drone body</h4>
    <p>Frame Weight: 280g.</p>
    <p>Height: 55mm</p>
    </div>
    <div className='p-2'>
    <h4>Motors</h4>
    <p>Weight: 60gm.</p>
    <p>KV: 920 rpm/V.</p>
    <p>Voltage: DC 7-12V.</p>
    
    </div>
    <div className='p-2'>
    <h4>Battery</h4>
    <p>Weight: 360.0g</p>
    <p>Capacity: 5200mAh</p>
    <p>Voltage: 11.1V</p>
      </div>
      <div className='p-2'>
    <h4>Flight Controller</h4>
    <p>Model: APM 2.8</p>
    <p>Input Voltage (V): 12-16 V.</p>
    <p>Processor: ATMEGA2560 and ATMEGA32U-2</p>
    <p>Dimensions (mm) LxWxH: 70 x 45 x 15</p>
      </div>

      <div className='p-2'>
    <h4>RC Transmitter Reciver</h4>
    <p>Bandwidth (KHz): 500.</p>
    <p>RF Range (GHz): 2.40 ~ 2.48.</p>
    <p>No. of channels: 6.</p>
    <p>Power: 6V (1.5V AA*4).</p>
      </div>

      <div className='p-2'>
    <h4>30A Brushless Speed Controller</h4>
    <p>Voltage range: 4 V-16.8V</p>
    <p>Burst current: 35 A</p>
    <p>BEC output: 5 V 3A</p>
    <p>Li-ion/Li-poly:2-4S,or Ni-MH/Ni-Cd:5-12S</p>
      </div>
      </div>



      <div className='container'>
        <h2 className='text-center text-warning'>Estimated drone Specifications</h2>
        
        <h3>Estimated Flight Time:</h3>
        <p>With a well-optimized setup and considering the use of efficient motors, propellers, and a decent battery, you can expect a flight time ranging from 30 to 40 minutes. However, please note that flight time can be influenced by factors such as payload weight, flying style, wind conditions, and battery capacity.
        </p>
        <h3>Payload Capacity:</h3>
        <p>The payload capacity of the drone will depend on the overall weight of the quadcopter, including its components, battery, and any additional payload you attach. As a general guideline, a quadcopter of this size and configuration can typically handle a payload of up to 200-500 grams. It's important to consider the center of gravity and stability of the drone when adding a payload to ensure safe and controlled flight.</p>
        <h3>Approx weight:</h3>
        <p>The approximate weight of the drone after building it:</p>
        <p>- Frame: around 100-200 grams.</p>
        <p>- Motors: approximately 20-50 grams, depending on the model and specifications.</p>
        <p>- Propellers: The weight  of propellers can range from 10 to 50 grams.</p>
        <p>- Flight Controller: around 10-30 grams.</p>
        <p>- Electronic Speed Controllers (ESCs):  around 5-20 grams.</p>
        <p>- Battery:A typical battery for a quadcopter of this size can weigh around 100-300 grams or more, depending on its capacity.</p>
        <p>- Other Components: around 50-200 grams.</p>   
        <p>Considering the above estimates, the approximate weight would be around <b>500-1000 grams</b></p>
      </div>
  </div>
  )
}

export default Specifications