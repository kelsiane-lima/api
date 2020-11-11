import React,  { useState }  from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function NewFabricante() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [site, setSite] = useState('');
    
    const history = useHistory();
    
    async function handleNewFabricante(e){
        e.preventDefault();
      
        const data = {
            nome,
            telefone,
            site
        };

        try{
            await api.post('fabricante', data);

            alert('O fabricante foi cadastrado com sucesso');

            history.push('/profile');
        } catch (err){
            alert('Erro no cadastro do fabricante');
        }
        
    }

    return (

<div className="new-fabricante-container">
        <div className="content">
          <section>
              <h1>Cadastrar novo Fabricante</h1>
              <Link to="/profile">
                  <FiArrowLeft size={16} color="#E02041"/>
              </Link>
          </section>
          
          <form onSubmit={handleNewFabricante}>
              <input 
              placeholder="Nome do Fabricante"
              value={nome}
              onChange={e=> setNome(e.target.value)}
              required
              />

              <input
              placeholder="Telefone" 
              type="tel"
              value={telefone}
              onChange={e=> setTelefone(e.target.value)}
              required
              />
              <input
              placeholder="Site"
              type="url"
              value={site}
              onChange={e => setSite(e.target.value)}
              required
              />
               
              <button className="button">Cadastrar</button>
          </form>
        </div>
    </div>
    );
  }
  
  
