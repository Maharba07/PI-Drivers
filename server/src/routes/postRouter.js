const { Router } = require("express");
const { getTeamsHandler } = require("../handlers/teamHandlers");
const postRouter = Router();
postRouter.post("/", getTeamsHandler);

module.exports = postRouter;
