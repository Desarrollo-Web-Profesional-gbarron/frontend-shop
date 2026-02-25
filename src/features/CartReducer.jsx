const CartReducer = (state, action) => {
  switch (action.type) {
    case "Agregar":
      return [...state, action.producto];

    case "Eliminar":
      return state.filter((p) => p.id !== action.id);

    case "Incrementar": {

      return state.map((item) =>
        item.id === action.id ? { ...item, cantidad: item.cantidad + 1 } : item,
      );
    }

    case "Decrementar": {
      return state.map((item) =>
        item.id === action.id
          ? { ...item, cantidad: Math.max(0, item.cantidad - 1) }
          : item,
      );
    }

    default:
      return state;
  }
};

export default CartReducer;
