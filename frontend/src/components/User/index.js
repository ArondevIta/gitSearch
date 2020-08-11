import React from 'react';
import { FaSearch } from 'react-icons/fa'
import './style.css';

function User() {
  return (

    <div className="container">
      <form>
        <input 
          type="text" 
          placeholder="Digite o nome do usuario"
          required
        />
        <button>
          <FaSearch 
            className="searchIcon"
          />
          </button>
      </form>
      <div className="userList">
        <div className="img">
          <img src="https://avatars2.githubusercontent.com/u/46222309?v=4" alt=""/>
        </div>
        <div className="list">
          <ul>
            <li><strong>Nome:</strong> Aron</li>
            <li><strong>Usuario:</strong> ArondevIta</li>
            <li><strong>Cidade:</strong> Itabuna</li>
            <li><strong>Repositorios:</strong> 13</li>
            <li><strong>Seguidores:</strong> 500</li>
            <li><strong>Biografia:</strong> Apaixonado por progrmação </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User;