// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../api";
import Loading from "../../atom/Loading/Loading";
import Card from "../../templates/Card/Card";


const Home = () => {
  // const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data.productos));
  }, []);

  useEffect(() => { setLoading(false) }, [products])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>

          <h1>Conoce todos los productos que tenemos para ti</h1>
          <div className="d-flex flex-row flex-wrap">
            {products.map((product) => (
              <Card
                key={product.id}
                img={product.img}
                nombre={product.nombre }
                precio={product.precio || "Precio no disponible"}
                descripcion={product.descripcion || "Descripción no disponible"}
                categoria={product.categoria || "Categoría no disponible"}
              />
            ))}
          </div>
          {/* <div className="cards-container">
            {products.map(product => (
              <Card
                key={product.id} // Asegúrate de tener una clave única para cada iteración
                nombre={product.nombre}
                precio={product.precio}
                descripcion={product.descripcion}
                categoria={product.categoria}
              />
            ))}
          </div> */}
          <Card></Card>
          <pre>{JSON.stringify(products)}</pre>
        </>
      )}
    </>
  );
};

export default Home;
