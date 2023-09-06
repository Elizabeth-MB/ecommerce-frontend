// import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../templates/Navbar/Navbar";

function Login() {

  return (
    <>
      <Navbar></Navbar>

      <div className="container mt-5">
        <h2>Iniciar sesión</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              // value={formData.password}
              // onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
          <p className="mt-3">
            ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
