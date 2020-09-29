import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import api from "../../services/api";

function User() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();

    const response = await api.get(`/users?userName=${userName}`);
    setUsers(response.data);
    console.log(users.length);
  }

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome do usuario"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <button type="submit">
          <FaSearch className="searchIcon" />
        </button>
      </form>

      {users.length !== 0 ? (
        <div className="userList">
          <div className="img">
            <img src={users.avatar_url} alt="" />
          </div>
          <div className="list">
            <ul key={users.name}>
              <li>
                <strong>Nome:</strong> {users.name}
              </li>
              <li>
                <strong>Usuario:</strong> {users.login}
              </li>
              <li>
                <strong>Cidade:</strong> {users.location}
              </li>
              <li>
                <strong>Repositorios:</strong> {users.public_repos}
              </li>
              <li>
                <strong>Seguidores:</strong> {users.followers}
              </li>
              <li>
                <strong>Biografia:</strong> {users.bio}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default User;
