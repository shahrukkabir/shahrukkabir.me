import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>ERROR</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/projects',
        element: <Project></Project>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);

export default router;