import AppLayout from "./Component/layout/AppLayout"
import Home from "./Pages/Home/Home"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Pages/Login/Login"
import Player from "./Pages/Player/Player"
import Search from "./Pages/Search/Search"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ErrorPage from "./Component/UI/Error Page/ErrorPage"

function App() {
  const queryClient= new QueryClient()

   const router=createBrowserRouter([
    {
      element:<AppLayout/>,
      path:'/',
      errorElement:<ErrorPage/>,
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
