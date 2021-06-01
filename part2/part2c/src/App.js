import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";

const App = () => {
  //list of the countries
  const [countries, setCountries] = useState([]);

  // country to be search

  const [country, setCountry] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      {countries.length ? (
        <>
          <Filter country={country} setCountry={setCountry} />
          {country && (
            <CountryList
              country={country}
              countries={countries}
              setCountry={setCountry}
            />
          )}
        </>
      ) : (
        <p>Loading application...</p>
      )}
    </div>
  );
};

export default App;
