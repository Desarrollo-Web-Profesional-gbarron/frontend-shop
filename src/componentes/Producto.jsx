import React from "react";

const Producto = ({producto}) => {
  return (
    <div className="col">
      <div class="card h-100">
        <img src={producto.imagen} class="card-img-top h-75" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{producto.titulo}</h4>
          <h5 class="">${producto.precio}</h5>
          <button
            class="btn btn-primary"
            
          >
            Agregar a Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Producto;
