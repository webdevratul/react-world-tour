const CountryData = ({ country, handleVisitedCountry, handlevisitedFlags }) => {
    console.log("Inside Country Data" , country, handleVisitedCountry, handlevisitedFlags  )
  return (
    <div>
      <p>Country Data: {country.name.common} </p>
    </div>
  );
};

export default CountryData;
