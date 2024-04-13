import Carrossel from 'src/Components/Carrossel/Carrossel'
import ColecoesDestaque from 'src/Components/ColecoesEmDestaque/ColecoesEmDestaque'
import Footer from 'src/Components/Footer/Footer'
import Header from 'src/Components/Header/Header'
import OfertaEspecial from 'src/Components/OfertaEspecial/OfertaEspecial'
import ProdutosAlta from 'src/Components/ProdutosEmAlta/ProdutosAlta'

function Home() {
  return (
    <>
      <Header />
      <Carrossel />
      <ColecoesDestaque />
      <ProdutosAlta />
      <OfertaEspecial />
      <Footer />
    </>
  )
}

export default Home
