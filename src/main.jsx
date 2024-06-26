import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx' 
import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>
)
