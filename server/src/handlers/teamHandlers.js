const {getTeamsByName} = require("../controllers/teamsControllers")

const getTeamsHandler = async(req, res) => {
  const { teams } = req.query;
  try {
        const teamList = await getTeamsByName(teams)
        res.status(200).json(teamList);
    }

   catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = { getTeamsHandler };
