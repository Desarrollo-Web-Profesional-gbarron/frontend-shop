import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componentes/NavBar'
import Productos from './paginas/Productos'
import Footer from './componentes/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './paginas/Cart'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Productos></Productos>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App
