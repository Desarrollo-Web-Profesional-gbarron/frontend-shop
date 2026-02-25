import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProducto = ({ producto }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Incrementar = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].cantidad < 10) {
      dispatch({ type: "Incrementar", id });
    }
  };
  const Decrementar = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].cantidad > 1) {
      dispatch({ type: "Decrementar", id });
    }
  };
  return (
    <div className="d-flex border mb-3">
      <img src={producto.imagen} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h4>{producto.titulo}</h4>
        <h5>${producto.precio}</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrementar(producto.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{producto.cantidad}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Incrementar(producto.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => dispatch({ type: "Eliminar", id: producto.id })}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartProducto;
