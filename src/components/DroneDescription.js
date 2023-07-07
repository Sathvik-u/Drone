import React from 'react';

class DroneDescription extends React.Component {
  render() {
    // Example drone data
    const drone = {
      name: 'Example Drone',
      specs: {
        weight: '500 grams',
        flightTime: '20 minutes',
        camera: '4K resolution',
      },
      construction: 'Carbon fiber frame',
      uses: ['Aerial photography', 'Surveillance', 'Package delivery'],
      applications: ['Filmmaking', 'Real estate', 'Search and rescue'],
    };

    return (
      <div>
        <h1>{drone.name}</h1>
        <h2>Specifications</h2>
        <ul>
          <li>Weight: {drone.specs.weight}</li>
          <li>Flight Time: {drone.specs.flightTime}</li>
          <li>Camera: {drone.specs.camera}</li>
        </ul>
        <h2>Construction</h2>
        <p>{drone.construction}</p>
        <h2>Uses</h2>
        <ul>
          {drone.uses.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ul>
        <h2>Applications</h2>
        <ul>
          {drone.applications.map((application, index) => (
            <li key={index}>{application}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DroneDescription;