import { NavLink } from 'react-router-dom'
import './Menus.scss'

function Menus() {
  return (
    <>
      <div className="menu">
        <a href="">Home</a>
        <NavLink to={'produtos'}>Produtos</NavLink>
        <a href="">Categorias</a>
        <a href="">Meus Pedidos</a>
      </div>
    </>
  )
}

export default Menus
