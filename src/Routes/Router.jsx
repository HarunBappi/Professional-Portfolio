import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        } ,
        
      ]
      
    },
    {
        path:'details/:id',
        element: <Details></Details>
    }
  ]);

  export default Router