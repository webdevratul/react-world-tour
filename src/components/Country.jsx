import { useState } from "react";
import "./country.css";
import CountryDEtail from "./countrydetails/CountryDEtail";
const Country = ({ country, handleVisitedCountry, handlevisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Country Name: {name?.common}
      </h3>
      <img src={flags?.png} alt="" />
      <p>Population: {population} </p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button onClick={() => handlevisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "going"}</button>
      {visited ? " I have visited this country" : " I want to visite"}
      <CountryDEtail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handlevisitedFlags={handlevisitedFlags}
      ></CountryDEtail>
    </div>
  );
};

export default Country;
