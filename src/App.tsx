import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/estaticos/footer/Footer'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/postagens" element={<ListaPostagem/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  )
}

export default App