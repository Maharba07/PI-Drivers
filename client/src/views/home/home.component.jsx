import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriverByName, getDrivers } from "../../redux/actions";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.components";
import Cards from "../../components/cards/cards.components";

import "./home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const [searchString, setSearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }
  //********Filtro con el Backend */

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getDriverByName(searchString));
  }

  useEffect(() => {
    dispatch(getDrivers());
    // return (()=>{
    //   clearDetail()
    // })
  }, [dispatch]);
  return (
    <div className="home">
      <div className="imagecontainer">
      <h2 className="home-title">Welcome Drivers!</h2>
      </div>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Link to="/">
        <button className="exit-button">Exit</button>
      </Link>
      <Link to="/create">
        <button className="create-button">Wanna Create?</button>
      </Link>
      <Cards allDrivers={allDrivers} searchString={searchString} />
      <div className="imagecontainer2">

      </div>
    </div>

  );
    
    
}

export default Home;
