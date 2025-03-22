import AppLayout from "./Component/layout/AppLayout"
import Home from "./Pages/Home/Home"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Pages/Login/Login"
import Player from "./Pages/Player/Player"
import Search from "./Pages/Search/Search"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryClient= new QueryClient()

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
          path:"/player/:movieId"
        },{
          element:<Search/>,
          path:"/search"
        }
    ]
    }
   ])
   return (
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
   </QueryClientProvider>
   )
}

export default App
