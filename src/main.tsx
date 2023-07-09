import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToDo } from './pages/Todo.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <>PAGE DOESN'T EXISTS</>
  },
  {
    path:"/user/:id/:name",
    element: <ToDo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
