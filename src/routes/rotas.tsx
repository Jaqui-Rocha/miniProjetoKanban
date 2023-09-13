import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from '../pages'
import Cadastro from '../pages/cadastro';
import Kanban from '../pages/kanban'

export const Rotas = () => {
  
  
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Cadastro/>} path="/cadastro"/>
          <Route element={<Kanban/>} path="/kanban"/>
        </Routes>
        
      </BrowserRouter>
    );
  };
  