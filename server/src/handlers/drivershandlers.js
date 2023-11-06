const {
  createDriverDB,
  getDriverById,
  getAllDrivers,
  getDriverByName,
} = require("../controllers/driversControllers");

const getDriversHandler = async(req, res) => {
  const { name } = req.query;
  try {
    if (name){
      const driverByName = await getDriverByName(name)
      res.status(200).json(driverByName)
      } else{
        const driversList = await getAllDrivers()
        res.status(200).json(driversList);
    }

  } catch (error) {
    res.status(400).json({ message: error.message });
  }


  // if (name)
  //   res.status(200).send(`Here are all drivers with the coincidence: ${name}`);
  // res.status(200).send(`All Drivers`);
};

//*********************************************************************************************** */

const getDetailHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const response = await getDriverById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  //res.status(200).send(`Here is the driver with the id: ${id}`);
};

//*********************************************************************************************** */

const createDriversHandler = async (req, res) => {
  const { name, lastName, description, nationality, dateOfBirth, image } =
    req.body;
  try {
    const response = await createDriverDB(
      name,
      lastName,
      description,
      nationality,
      dateOfBirth,
      image
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  // res.status(200).send(`Driver ${name} ${lastName}, of the nationality: ${nationality} born in: ${dateOfBirth} created`);
};

module.exports = { getDriversHandler, getDetailHandler, createDriversHandler };
