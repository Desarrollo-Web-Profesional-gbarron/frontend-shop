
//Total de elementos dentro del carrito
export const totalElemento = (cart) => {
    return cart.reduce((suma, producto) => suma + producto.cantidad, 0);
};

//Total de costo a pagar en el carrito
export const totalPrecio = (cart) => {
    return cart.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
};