import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './Pages/Produtos/Produtos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  )
}
