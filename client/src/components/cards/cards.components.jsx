import Card from "../card/card.components";
import "./cards.styles.css";

function Cards({ allDrivers, searchString }) {
  
  const filteredDrivers = allDrivers.filter((driver) => {
    return driver.name.forename
      .toLowerCase()
      .includes(searchString.toLowerCase());
  });

  filteredDrivers.sort((a, b) => {
    const nameA = a.name.forename.toLowerCase();
    const nameB = b.name.forename.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <div className="cards-list">
      {filteredDrivers.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
}

export default Cards;
