import CountryData from "./CountryData";

const CountryDEtail = (props) => {
  /* const { country, handleVisitedCountry, handlevisitedFlags } = props; */
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />
      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handlevisitedFlags={handlevisitedFlags}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDEtail;
