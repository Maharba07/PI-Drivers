import React, { useEffect, useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./detail.styles.css";

const Detail = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/drivers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setDriver(data);
        } else {
          window.alert("Driver not found");
        }
      });
    return setDriver({});
  }, [id]);

  return (
    <div className="details">
      <pre>
        <h1>Driver Details:</h1>
        <Link to="/home/">
          <button className="return-button">Return</button>
        </Link>
        {driver.name && (
          <>
            <h2>{driver.name.forename}</h2>
            <h2>{driver.name.surname}</h2>
          </>
        )}
        <h3>Teams: {driver.teams}</h3>
        <h3>Nationality: {driver.nationality}</h3>
        {driver.image && (
          <div>
            <h3>Image:</h3>
            <img src={driver.image.url} alt="Driver" />
          </div>
        )}
      </pre>
    </div>
  );
};

export default Detail;
