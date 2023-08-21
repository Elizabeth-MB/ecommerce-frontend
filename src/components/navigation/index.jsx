import App from '../../App.jsx';
import Login from '../screen/Login/Login.jsx';

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
  ]);

  export default router