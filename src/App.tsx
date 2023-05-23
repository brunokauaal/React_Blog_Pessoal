import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/estaticos/footer/Footer'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
import CadastroPost from './components/postagens/cadastroPost/CadastroPost'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'


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
          <Route path="/formularioPostagem" element={<CadastroPost/>} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost/>} />
          <Route path="/formularioTema" element={<CadastroTema/>} />
          <Route path="/formularioTema/:id" element={<CadastroTema/>} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>} />
          <Route path="/deletarTema/:id" element={<DeletarTema/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  )
}

export default App