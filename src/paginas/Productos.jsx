import React, { useState } from "react";
import Data from "../Data.json";
import Producto from "../componentes/Producto";

const Productos = () => {
  const [productos, setProductos] = useState(Data.productos);

  return (
    <div className="container-fluid mt-5">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {productos.map((p) => (
          <Producto key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
};
export default Productos;
