import App from '../../App.jsx';
import Login from '../screen/Login/Login.jsx'

import {
    createBrowserRouter
} from "react-router-dom";

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
      path: "/dashboard",
      element: <div>Dashboard</div>,
    },
  ]);

  export default router