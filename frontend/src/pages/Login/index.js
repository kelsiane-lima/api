import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleLogin(e){
      e.preventDefault();

      try{
        const data ={
          
          nome,
          senha,
        }
        const response = await api.post('session', data);
      
        localStorage.setItem('userId', response.data.id);
        localStorage.setItem('userName', response.data.nome);
        localStorage.setItem('token', response.data.token);
        
        history.push('/profile');
      }catch(err){
        alert('Falha no login, tente novamente.');
        
      }
    }

  return (
    
    <div className="login-container">
        <section className="form">
            <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>

                <input 
                placeholder="Usuario" required
                value={nome}
                onChange={(e)=> setNome
                  (e.target.value)}
                />

                <input type="password" placeholder="Senha" required
                value={senha}
                onChange={e=> setSenha(e.target.value)}
                />
                <button type="submit" className="button">Entrar</button>
               
            </form>
          
                <div style={{display:'flex'}}>
                  <div style={{margin: '15px'}}> <h3 >Não tem uma conta?</h3> </div > 
                 <div style={{margin: '15px'}} > <Link style={{color:'#fff'}} to="/usuario/new"> <h3>Registre-se</h3></Link></div>
           
           
            </div>
  
          
        </section>

        {/* borda svg */}
        
        <div className="footer" style={{height: '150px', width:'100%', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%' , width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}}></path></svg></div>
    </div>
  );
}

// https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections