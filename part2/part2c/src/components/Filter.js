import React from "react";

const Filter = ({ country, setCountry }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="find-country"
        value={country}
        autoFocus
        autoComplete="off"
        onChange={(event) => setCountry(event.target.value)}
      />
    </div>
  );
};

export default Filter;
