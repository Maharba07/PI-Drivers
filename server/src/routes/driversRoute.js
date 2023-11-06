const { Router } = require("express");
//const { Driver, Team } = require('../db.js');
const driversRouter = Router();
const {
  getDriversHandler,
  getDetailHandler,
  createDriversHandler,
} = require("../handlers/drivershandlers");

driversRouter.get("/", getDriversHandler);

driversRouter.get("/:id", getDetailHandler);

driversRouter.post("/", createDriversHandler)

module.exports = driversRouter;
