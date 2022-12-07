import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Produtos from './pages/Produtos'
import ProdutoDetail from './pages/ProdutoDetail'

import './sass/main.sass'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/:id" element={<ProdutoDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
