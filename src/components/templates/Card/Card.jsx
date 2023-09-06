/* eslint-disable react/prop-types */
import { CardBody, Card as ReactstrapCard } from "reactstrap"
import Button from "../../atom/Button/Button"

const Card = ({ nombre, descripcion, precio, img, categoria }) => {
    return (
        <ReactstrapCard className="card mx-2 my-3" style={{ maxWidth: "18rem" }}>
            <img
                // src="https://picsum.photos/200"
                src={img}
                className="card-img-top"
                alt={nombre}
                style={{ width:'100%', height: '200px'}}
            />
            <CardBody className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
            </CardBody>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Categoría: {categoria}</li>
                <li className="list-group-item">Precio: {precio}</li>
            </ul>
            <CardBody className="card-body">
                <Button className="btn btn-primary">Comprar</Button>
            </CardBody>
        </ReactstrapCard>
    )
}

export default Card
