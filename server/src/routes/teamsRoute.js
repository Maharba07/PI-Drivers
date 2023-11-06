const { Router } = require('express');
const { Driver, Team } = require('../db.js');
const { getTeamsHandler } = require("../handlers/teamHandlers");
const teamsRouter = Router();
teamsRouter.get("/", getTeamsHandler);

module.exports = teamsRouter;