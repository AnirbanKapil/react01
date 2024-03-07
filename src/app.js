import React , {lazy,Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocerry from "./components/Grocerry";
import Error from "./components/Error"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"



const AppLayOut = ()=> {
    return (
        <div className="app">
         <Header />
         <Outlet />
        </div>
    )
}

const Grocerry = lazy(()=> import("./components/Grocerry"));

const appRouter = createBrowserRouter([
    {
       path : "/",
       element : <AppLayOut />,
       children : [
        {
            path : "/",
            element : <Body />
         },
        {
            path : "/about",
            element : <About />
         },
         {
             path : "/contact",
             element : <Contact />
          },
          {
            path : "/grocerry",
            element : <Suspense fallback = {<h2>Loading....</h2>}><Grocerry /></Suspense>
          },
          {
            path : "/restaurant/:resid",
            element : <RestaurantMenu />
          }
     
       ],
       errorElement : <Error />
    },
    
])





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
