import AppLayout from "./Component/layout/AppLayout"
import Home from "./Pages/Home/Home"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Pages/Login/Login"
import Player from "./Pages/Player/Player"
import Search from "./Pages/Search/Search"

function App() {
   const router=createBrowserRouter([
    {
      element:<AppLayout/>,
      path:'/',
      children:[
        {
          element:<Home/>,
          path:"/"
        },{
          element:<Login/>,
          path:"/login"
        },{
          element:<Player/>,
          path:"player"
        },{
          element:<Search/>,
          path:"search"
        }
    ]
    }
   ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
