import React, { useReducer } from 'react'
import CartReducer from './CartReducer'

////Se transmitirá informacion del carrito
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = React.createContext()

/**
 * Almacén centralizado de datos para que cualquier parte de tu aplicación
 * (un botón de "Comprar", el icono del carrito, la página de checkout)
 *  pueda ver qué hay en el carrito y modificarlo sin tener que pasar datos manualmente de un componente a otro.
 * @param {*} param0 
 * @returns 
 */
const ContextProvider = ({children}) => {
    // Estado actual del carrito junto con sus operaciones
    const [cart, dispatch] = useReducer(CartReducer, [])
  return (
    <CartContext.Provider value={{cart, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextProvider