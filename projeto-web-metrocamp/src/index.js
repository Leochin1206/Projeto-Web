import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Cadastro } from './telas/Cadastro/Cadastro';
import  MainLayout  from "./telas/Cadastro/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './telas/Login/Login';
import { Clipboard } from './telas/Clipboard/Clipboard';

const Routing = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<App />} /> {/* Renderiza App quando na rota principal */}
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Clipboard" element ={<Clipboard />}/>
        {/* Adicione outras rotas conforme necessário */}
      </Route>
    </Routes>
  </Router>
);


const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderiza as rotas.
root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
