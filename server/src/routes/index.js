const { Router } = require("express");
const drivers = require("./driversRoute");
const teams = require("./teamsRoute");

const router = Router();

router.use("/drivers", drivers);
router.use("/teams", teams);

module.exports = router;
