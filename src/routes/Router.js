import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.jsx"));
 
const Influencers = lazy(() => import("../views/ui/Influencers"));
 
const Statistics = lazy(() => import("../views/ui/Statistics"));
const Login = lazy(() => import("../views/ui/login"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Login" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/Influencers", exact: true, element: <Influencers /> },
      { path: "/Statistics", exact: true, element: <Statistics /> },
    

    ],

   
  },  {
    path: "/login",
    element: <Login />,
 
   
  },
];

export default ThemeRoutes;
