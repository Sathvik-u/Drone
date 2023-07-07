import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/rootComponents/Home';
import ProjectDetails from './components/projectDetails/ProjectDetails';
import About from './components/rootComponents/About';
import DroneDescription from './components/DroneDescription';
import Components  from './components/ComponentList/Components';
import AutonomusDrone from './components/ourWork/AutonomusDrone';
import Imaging3D from './components/ourWork/Imaging3D';
import IntruderFollower from './components/ourWork/IntruderFollower';
import Specifications from './components/specifications/Specifications';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children :[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/project-details",
          element:<ProjectDetails/>
        },
        {
            path:'/specifications',
            element:<Specifications/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/Drone",
          element:<DroneDescription/>
        },
        {
          path:"/components",
          element:<Components/>
        },
        {
          path:'/ourWork',
          
          children:[
            {
            path:'autonomusDrone',
            element:<AutonomusDrone/>
            },{
              path:'3DImaging',
              element:<Imaging3D/>
            },
            {
              path:'IntruderFollower',
              element:<IntruderFollower/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
