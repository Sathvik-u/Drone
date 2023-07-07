import React from 'react'

function AutonomusDrone() {
  return (
    <div className='text-white '>
      <h1 className='text-center display-3 text-warning'>Autonomus Drone</h1>
      <div className='container'>
      <h4>We divided the functionality of the drone into 3 stages</h4>
      <ul>
        <li>Takeoff</li>
        <li>Travelling</li>
        <li>Landing</li>
      </ul>
      </div>
      <div className='container'>
        <h3 className='text-info'>Takeoff</h3>
        <p >During take-off, autonomous drones utilize ultrasonic and LiDAR sensors to detect obstacles present above the drone. The primary objective during this phase is for the drone to ascend to the desired altitude while avoiding any potential obstacles.
        <br/>&nbsp;
<b className='text-warning'>1.Sensor Detection:</b> The ultrasonic and LiDAR sensors on the drone constantly emit signals and measure the time it takes for the signals to bounce back. By analyzing the return time and intensity of these signals, the drone can detect obstacles in its vicinity.
<br/>&nbsp;
<b className='text-warning'>2.Ascending to the Desired Height:</b> The drone initially hovers close to the ground. It starts ascending vertically, gradually increasing its altitude. The sensors continuously monitor the space above the drone to ensure there are no obstacles in its flight path.
<br/>&nbsp;
<b className='text-warning'>3.Obstacle Detection:</b> If an obstacle is detected by the sensors during the ascent, the drone reacts to avoid collision. It determines the distance and position of the obstacle and adjusts its flight path accordingly.
<br/>&nbsp;
<b className='text-warning'>4.Maneuvering to Avoid Obstacles:</b> To avoid the detected obstacle, the drone may make slight adjustments to its flight direction. It can move forward or backward, left or right, to navigate around the obstacle. The specific maneuvers depend on the drone's design and capabilities.
<br/>&nbsp;
<b className='text-warning'>5.Clearance and Speed Increase:</b> Once the obstacle is cleared, the drone continues ascending while gradually increasing its speed. It maintains a steady upward flight trajectory until it reaches the desired height.
<br/>&nbsp;
Throughout this process, the drone's autonomous flight software combines the input from the sensors with predefined flight algorithms to determine the safest and most efficient way to ascend while avoiding obstacles. The software may also incorporate obstacle avoidance algorithms, such as path planning or collision avoidance, to guide the drone's movements and ensure a smooth and obstacle-free take-off.
By employing these sensors and autonomous flight algorithms, the drone can safely navigate its ascent, detect and respond to obstacles, and reach the desired altitude for its subsequent mission or flight</p>
      </div>
      <div className='container'>
        <h3  className='text-info'>Travelling</h3>
        <p>
          
          During the traveling phase, the autonomous drone records its path using a camera and transmits the recorded data to a home station. If any obstacles are detected in the camera's field of view, the drone takes a detour to avoid them before continuing its journey using GPS navigation.
<br/>&nbsp;
<b className='text-warning'>1.Camera Recording:</b> The drone is equipped with a camera that captures video or images of its surroundings during the flight. This camera can be mounted on a gimbal for stabilized footage.
<br/>&nbsp;
<b className='text-warning'>2.Path Recording:</b> As the drone travels, the camera continuously captures the drone's perspective of the environment below. The recorded footage or images are stored onboard the drone for later analysis or transmission.
<br/>&nbsp;
<b className='text-warning'>3.Obstacle Detection:</b> The recorded camera data is processed by the drone's computer vision algorithms to detect obstacles in the drone's path. These algorithms analyze the visual information to identify objects or structures that may pose a potential obstacle to the drone's flight.
<br/>&nbsp;
<b className='text-warning'>4.Detour Maneuver: </b> If an obstacle is detected in the camera footage, the drone autonomously calculates an alternative flight path to avoid the obstacle. It may adjust its heading, altitude, or speed to deviate from the original trajectory and navigate around the obstacle.
<br/>&nbsp;
<b className='text-warning'>5.Obstacle Clearance:</b> The drone continues its detour until it has successfully cleared the obstacle. Once the obstacle is no longer in its path, the drone can resume its original course.
<br/>&nbsp;
<b className='text-warning'>6.GPS Navigation:</b> Throughout the traveling phase, the drone utilizes GPS (Global Positioning System) for navigation and positioning. It can rely on pre-defined waypoints or follow a specific flight plan to reach its intended destination.
<br/>&nbsp;
<b className='text-warning'>7.Home Station Communication: </b>The drone periodically transmits the recorded camera data or relevant information to a home station or ground control station. This data can be used for real-time monitoring, analysis, or decision-making by human operators.
<br/>&nbsp;
By combining camera recording, computer vision algorithms, GPS navigation, and obstacle detection, autonomous drones can navigate their journey, actively avoid obstacles, and transmit valuable data back to the home station for further analysis or remote monitoring. This enables safer and more efficient drone travel in various applications such as mapping, surveying, inspection, or search and rescue missions.
        </p>
      </div>
      <div className='container'>
        <h3 className='text-info'>Landing</h3>
        <p>During the landing phase, the autonomous drone utilizes GPS to reach its specified landing point. Once it reaches the designated location, it reduces its speed gradually using ultrasonic and LiDAR sensors, ensuring a safe and controlled landing.

        <br/>&nbsp;
        <b className='text-warning'>1.GPS Navigation:</b> The drone leverages GPS (Global Positioning System) to navigate and precisely reach its specified landing point. It uses satellite signals to determine its position and adjust its flight path accordingly.
<br/>&nbsp;
<b className='text-warning'>2.Reaching the Landing Point:</b>  Using the GPS coordinates or predefined landing location, the drone autonomously flies towards the designated landing area. It maintains a steady altitude and heading while approaching the landing spot.
<br/>&nbsp;
<b className='text-warning'>3.Speed Reduction:</b>  As the drone approaches the landing point, it starts reducing its speed to prepare for a smooth landing. The autonomous flight software adjusts the motor speeds or flight control parameters to gradually decelerate the drone.
<br/>&nbsp;
<b className='text-warning'>4.Ultrasonic and LiDAR Sensors: </b> The drone utilizes ultrasonic and LiDAR sensors to measure the distance between the drone and the ground. These sensors provide accurate altitude measurements and help the drone maintain a safe descent rate.
<br/>&nbsp;
<b className='text-warning'>5.Altitude Adjustment: </b> The drone uses the data from the ultrasonic and LiDAR sensors to regulate its altitude during the landing process. It adjusts its vertical speed to ensure a controlled descent and prevent any abrupt or hard landings.
<br/>&nbsp;
<b className='text-warning'>6.Safe Landing:</b>  By combining the information from the sensors and flight control algorithms, the drone executes a precise and controlled landing. It gradually reduces its altitude, matching the descent rate with the expected landing conditions.
<br/>&nbsp;
<b className='text-warning'>7.Touchdown:</b>  Once the drone reaches the ground, it softly lands at the specified landing point. The flight control system adjusts the motor speed and flight controls to ensure a smooth touchdown, minimizing any potential impact or vibration.
<br/>&nbsp;
During the landing phase, the autonomous drone relies on GPS for navigation and uses ultrasonic and LiDAR sensors to regulate its speed and altitude. This combination of technologies allows the drone to reach the specified landing point safely and execute a controlled landing, ensuring a successful completion of its mission.</p>
      </div>
    </div>
  )
}

export default AutonomusDrone