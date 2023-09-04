
import { useEffect, useState } from "react";
import ItemList from  "../ItemList//ItemList"
import axios from 'axios';
import './ItemListContainer.css'
import { Link } from "react-router-dom";

 const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    
    axios.get("https://c13-08-n-php.fly.dev/api/products?page=1")
    .then((res) => res.data.data.data)
    .then((productos) => setProductos(productos))
      
    },[])
    
    return (
    < >
        <div>
          <h1 className="titulo">Nuestros productos</h1>
          <h2 className="subtitulo">Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
        </div>
        <div className="productos">

        <ItemList productos={productos} />
       
      </div> <div className="masProductos"> 
      <Link to="/todosProductos"> 
      <button className='ver-todos' onClick={console.log("todos los productos")}>
          Ver todos los productos
        </button>
      </Link>
      
      </div>
    </>
  )
}

export default ItemListContainer

