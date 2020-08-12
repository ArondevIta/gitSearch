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

  const user = {
    name,
    bio,
    location,
    login,
    avatar_url,
    public_repos,
    followers
  }
  //const repos = await axios.get(`https://api.github.com/users/${userName}/repos`);
  //const {name} = repos.data;
  console.log(user);
  return res.json(user);

})

module.exports = routes;
