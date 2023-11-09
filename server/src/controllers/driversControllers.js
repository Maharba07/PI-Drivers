const axios = require("axios");
const { Driver } = require("../db");
const createDriverDB = async (
  name,
  lastName,
  description,
  nationality,
  dateOfBirth,
  image
) => {
  const newDriver = await Driver.create({
    name,
    lastName,
    description,
    nationality,
    dateOfBirth,
    image,
  });
  return newDriver;
};

const getDriverById = async (id, source) => {
  const drivers =
    source === "api"
      ? (await axios.get(`http://localhost:5000/drivers/${id}?limit=9`)).data
      : await Driver.findByPk(id);
  return drivers;
};

const cleanDriver = (arr)=>{
  return arr.map((driver)=>{
  return{
    id: driver.id,
    name: driver.name.forename,
    lastName: driver.name.surname,
    team: driver.teams,
    created:false,
  };
  });
};  

const getAllDrivers = async () => {
  const allDrivers = await Driver.findAll();
  const infoApi = (await axios.get("http://localhost:5000/drivers?limit=9"))
    .data;
  const allDriversApi = cleanDriver(infoApi)

  return [...allDrivers, ...allDriversApi];
};

const getDriverByName = async(name)=>{
  const infoApi = (await axios.get("http://localhost:5000/drivers?limit=9")).data;
  const allDriversApi = cleanDriver(infoApi)
  const driversFilter = allDriversApi.filter(drivers=>drivers.name.forename===name)
  const driverDb = await Driver.findAll({where: {name:name}});

  return [...driversFilter, ...driverDb]
}

module.exports = { createDriverDB, getDriverById, getAllDrivers, getDriverByName };
