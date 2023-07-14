import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import { ToDo } from './pages/Todo.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <>PAGE DOESN'T EXISTS</>
  },
  {
    path:"/user/:id/:username",
    element: <ToDo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
