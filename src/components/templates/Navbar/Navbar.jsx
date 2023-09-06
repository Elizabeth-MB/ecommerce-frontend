import { Link } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

function Navbar() {
  return (

    <Nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="../../../assets/1200px-MercadoLibresvg-1.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavItem className="nav-item">
              <Link className="nav-link" to="/">
                Categoría 1
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/">
                Categoría 2
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/">
                Categoría 3
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/">
                Categoría 4
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/register">
                Crear cuenta
              </Link>
            </NavItem>

          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </Nav>

  )
}

export default Navbar
