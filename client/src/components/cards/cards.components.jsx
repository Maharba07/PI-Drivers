import React, { useState } from "react";
import Card from "../card/card.components";
import "./cards.styles.css";

function Cards({ allDrivers, searchString }) {
  const [orderBy, setOrderBy] = useState({ field: "name", order: "asc" });
  

  const filteredDrivers = allDrivers.filter((driver) => {
    return driver.name.forename
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });

  const toggleOrder = (field) => {
    if (orderBy.field === field) {
      const newOrder = orderBy.order === "asc" ? "desc" : "asc";
      setOrderBy({ field, order: newOrder });
    } else {
      setOrderBy({ field, order: "asc" });
    }
  };

  filteredDrivers.sort((a, b) => {
    const fieldA =
      orderBy.field === "name" ? a.name.forename.toLowerCase() : a.dob;
    const fieldB =
      orderBy.field === "name" ? b.name.forename.toLowerCase() : b.dob;
    const orderFactor = orderBy.order === "asc" ? 1 : -1;
    return fieldA.localeCompare(fieldB) * orderFactor;
  });

  return (
    <div className="cards-list" >
      <div>
        <button className="ordenar-nombre" onClick={() => toggleOrder("name")}>
          Sort By Name{" "}
          {orderBy.field === "name" && orderBy.order === "asc" ? "↓" : "↑"}
        </button>
        <button className="ordenar-fecha" onClick={() => toggleOrder("dob")}>
          Sort By Date of Birth{" "}
          {orderBy.field === "dob" && orderBy.order === "asc" ? "↓" : "↑"}
        </button>
      </div>
      {filteredDrivers.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div> 
  );
}

export default Cards;
