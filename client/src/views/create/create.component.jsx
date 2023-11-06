import "./create.styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const expresionRegular = /^[a-zA-Z]+$/;

function Create() {
  const [input, setInput] = useState({
    Name: "",
    LastName: "",
    Nationality: "",
    Teams: "",
  });

  const [error, setError] = useState({
    Name: "*",
    LastName: "*",
    Nationality: "*",
    Teams: "*",
  });

  const validate = (input) => {
    if (!expresionRegular.test(input.Name)) {
      setError({ ...error.Name, Name: "Solo letras" });
      return;
    }
    setError({ ...error.Name, Name: "" });

    if (!expresionRegular.test(input.LastName)) {
      setError({ ...error.LastName, LastName: "Solo letras" });
      return;
    }
    setError({ ...error.LastName, LastName: "" });

    if (!expresionRegular.test(input.Nationality)) {
      setError({ ...error.Nationality, Nationality: "Solo letras" });
      return;
    }
    setError({ ...error.Nationality, Nationality: "" });

    if (!expresionRegular.test(input.Teams)) {
      setError({ ...error.Teams, Teams: "Solo letras" });
      return;
    }
    setError({ ...error.Teams, Teams: "" });
  };

  function handleChange(e) {
    setInput({
      input,
      [e.target.name]: e.target.value,
    });
    validate({
      input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="create">
      <form onSubmit={""}>
        <div className="image-create">
          <div>
            <label>Name: </label>
            <input name="Name" value={input.value} onChange={handleChange} />
            <span>{error.Name}</span>
          </div>
          <div>
            <label>LastName: </label>
            <input
              name="LastName"
              value={input.value}
              onChange={handleChange}
            />
            <span>{error.LastName}</span>
          </div>
          <div>
            <label>Nationality: </label>
            <input
              name="Nationality"
              value={input.value}
              onChange={handleChange}
            />
            <span>{error.Nationality}</span>
          </div>
          <div>
            <label>Teams: </label>
            <input name="Teams" value={input.value} onChange={handleChange} />
            <span>{error.Teams}</span>
          </div>
          <Link to="/home/">
            <button className="return-create">Return</button>
          </Link>
          {error.Name ? null : <button className="button-create" type="submit">Create Driver</button>}
        </div>
      </form>
    </div>
  );
}

export default Create;
