import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

export default function Logon() {
  const [idName, setIdName] = useState('');
  const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
      e.preventDefault();

      try{
        const data ={
          idName,
          password,
        }
        const response = await api.post('session', data);

        localStorage.setItem('userId', idName);
        localStorage.setItem('userName', response.data.name);

        history.push('/profile');
      }catch(err){
        alert('Falha no login, tente novamente.');
      }
    }

  return (
    <div className="logon-container">
        <section className="form">
            <form onSubmit={handleLogin}>
                <h1>Faça seu Login</h1>

                <input 
                placeholder="User"
                value={idName}
                onChange={e=> setIdName
                  (e.target.value)}
                />

                <input type="password" placeholder="Senha" required
                value={password}
                onChange={e=> setPassword(e.target.value)}
                />
                <button type="submit" className="button">Entrar</button>
               
            </form>
        </section>
    </div>
  );
}