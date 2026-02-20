import { BsCart } from "react-icons/bs"

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between bg-secondary py-3 px-5 text-white">
      <a href="" className="navbar-brand fs-4 fw-bolder">Carrito</a>
      <a href="" className="navbar-link fs-5 text-white"><BsCart/></a>
    </div>
  )
}

export default NavBar
