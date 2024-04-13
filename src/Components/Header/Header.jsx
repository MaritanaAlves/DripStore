import { BiSearch } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import './Header.scss'
import Logo from '../../assets/logo.png'
import Menus from '../Menus/Menus'

function Header() {
  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="pesquisa"
          ></input>
          <button className="pesquisaBotao">
            <BiSearch />
          </button>
        </div>
        <div>
          <a href="">Cadastre-se</a>
        </div>
        <div>
          <button className="button">Entrar</button>
        </div>
        <BsCart2 />
      </header>
      <Menus></Menus>
    </>
  )
}

export default Header
