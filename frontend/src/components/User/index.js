import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import './style.css';
import api from '../../services/api'

function User() {
  const[userName, setUserName] = useState('');
  const[users, setUsers] = useState([]);

  async function handleSearch(event){
    event.preventDefault();

    const response = await api.get(`/users?userName=${userName}`);
    setUsers(response.data);
    console.log(users);
  }

  return (

    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome do usuario"
          value={userName}
          onChange={event => setUserName(event.target.value)}
          required
        />
        <button type="submit">
          <FaSearch
            className="searchIcon"
          />
          </button>
      </form>


      {/* {

        users.map(user => (
          <div className="userList">
            <div className="img">
              <img src="https://avatars2.githubusercontent.com/u/46222309?v=4" alt=""/>
            </div>
            <div className="list">
              <ul key={user.name}>
                <li><strong>Nome:</strong> Aron</li>
                <li><strong>Usuario:</strong> ArondevIta</li>
                <li><strong>Cidade:</strong> Itabuna</li>
                <li><strong>Repositorios:</strong> 13</li>
                <li><strong>Seguidores:</strong> 500</li>
                <li><strong>Biografia:</strong> Apaixonado por progrmação </li>
              </ul>
            </div>
          </div>
        ))
      } */}
    </div>
  )
}

export default User;


