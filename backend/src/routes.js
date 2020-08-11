const express = require('express');
const axios = require('axios');
const routes = express.Router();

routes.get('/users', async (req, res) => {
  const { userName } = req.query;
  const response = await axios.get(`https://api.github.com/users/${userName}`);
  const { 
    name, 
    bio, 
    location, 
    login, 
    avatar_url, 
    public_repos, 
    followers 
  } = response.data;
  //const repos = await axios.get(`https://api.github.com/users/${userName}/repos`);
  //const {name} = repos.data;
  return res.json({name, bio, location, login, avatar_url, public_repos, followers});
})

module.exports = routes;
