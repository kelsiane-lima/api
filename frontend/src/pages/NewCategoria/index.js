import React,  { useState }  from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function NewCategoria() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    
    
    const history = useHistory();

    async function handleNewCategoria(e){
        e.preventDefault();

        const data = {
            nome,
            descricao
        };

        try{
            await api.post('category', data);

            alert('O categoria foi cadastrado com sucesso');

            history.push('/profile');
        } catch (err){
            alert('Erro no cadastro do categoria');
        }
        
    }

    return (

<div className="new-categoria-container">
        <div className="content">
          <section>
              <h1>Cadastrar nova Categoria</h1>
              <Link to="/profile">
                  <FiArrowLeft size={16} color="#E02041"/>
              </Link>
          </section>
          
          <form onSubmit={handleNewCategoria}>
              <input 
              placeholder="Nome do Categoria"
              value={nome}
              onChange={e=> setNome(e.target.value)}
              required
              />

            <input 
              placeholder="Descrição"
              type="text"
              value={descricao}
              onChange={e=> setDescricao(e.target.value)}
              required
              />

        
              <button className="button">Cadastrar</button>
          </form>
        </div>
    </div>
    );
  }
  
  