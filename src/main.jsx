import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import Meals from './Meals'
import Meal from './Meal'
import Categories from './Categories'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './assets/css/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meals",
    element: <Meals />,
  },
  {
    path: "/meal/:mealId",
    element: <Meal />,
  },
  {
    path: "/meals-by-category/:categoryName",
    element: <Meals />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
