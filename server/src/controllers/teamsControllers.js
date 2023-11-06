const axios = require("axios");
const {Driver} = require("../db");

const cleanTeams = (arr)=>{
    return arr.map((team)=>{
    return{
      teams:team.teams
    };
    });
  };  

const getTeamsByName = async()=>{
    const allTeams = await Driver.findAll();
  const infoApi = (await axios.get("http://localhost:5000/drivers/"))
    .data;
    const allTeamsApi = cleanTeams(infoApi)
    return [...allTeams, ...allTeamsApi];
}

module.exports = {getTeamsByName};