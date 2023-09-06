import App from '../../App.jsx';
import Login from '../screen/Login/Login.jsx';
import Dashboard from '../screen/Dashboard/Dashboard.jsx';

import {
  createBrowserRouter
} from "react-router-dom";
import Register from '../screen/Register/Register.jsx';

  /* función para crear una ruta */
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  export default router