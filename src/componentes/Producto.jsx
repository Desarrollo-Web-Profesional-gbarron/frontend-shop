import React from "react";
import { CartContext } from "../Features/ContextProvider";

const Producto = ({ producto }) => {
  const { dispatch } = React.useContext(CartContext);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={producto.imagen} className="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{producto.titulo}</h4>
          <h5 className="card-text">${producto.precio}</h5>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "Agregar", producto: producto })}
          >
            Agregar a Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Producto;
