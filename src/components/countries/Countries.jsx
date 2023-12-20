import { useEffect, useState } from "react";
import Country from "../country";
import "./Countires.css";

const Countries = () => {
  const [counties, setCountries] = useState([]);

  const [visitedCountires, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    const NewvisitedCountires = [...visitedCountires, country];
    setVisitedCountries(NewvisitedCountires);
  };

  const handlevisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // remove item from an array in a sate
  // use filter to select all the elements except the one you want to remove

  return (
    <>
      <h1>All Countries: {counties.length} </h1>
      <div>
        <h2>Visited Countries {visitedCountires.length}</h2>
        <ul>
          {visitedCountires.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {counties.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handlevisitedFlags={handlevisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;


