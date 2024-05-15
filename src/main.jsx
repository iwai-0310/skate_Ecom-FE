import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   { path: "/", element: <Home /> }, 
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <ThemeProvider>
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  </ThemeProvider>
)
