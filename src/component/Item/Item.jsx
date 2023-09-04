import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="cardProducto">
      <figure>
        <Link to={`/item/${id}`}>
          <img className="imgProducto" src={imagen} alt={nombre}></img>
        </Link>
        <div className="detalles">
          <h3>{nombre}</h3>
          <p>${precio} </p>
          
          <Link className="miBtnDetalles" to={`/item/${id}`}>Agregar<img src="./src/assets/ph_shopping-cart-fill.svg" alt="logo" /></Link>
        </div>
      </figure>
    </div>
  );
};

export default Item;