import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProducto from '../componentes/CartProducto'

import { totalElemento, totalPrecio } from '../features/CartUtils'

const Cart = () => {
    const {cart} = useContext(CartContext)
  return (
    <div className='container mt-3'>
        <div className="row">
            <div className="col-8">
                {cart.map(p => (
                    <CartProducto producto={p}></CartProducto>
                ))}
            </div>
            <div className="col-4 ">
                <div className="bg-secondary p-3 text-white">
                    <h5>Total Elementos: {totalElemento(cart)}</h5>
                    <h5>Total Precio: ${totalPrecio(cart)} </h5>
                    <button className='btn btn-warning'>Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart