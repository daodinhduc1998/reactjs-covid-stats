import React from "react";
import "./country.css";
const Country = ({ stats }) => {
  stats.CountryCode = stats.CountryCode.toLowerCase();
  return (
    <div className="country">
      <img
        src={`https://flagcdn.com/64x48/${stats.CountryCode}.png`}
        width="64"
        height="48"
        alt={stats.Country}
      ></img>
      <h2>{stats.Country}</h2>
      <div className="describe">
        <p>{`Active : ${stats.Active}`}</p>
        <p>{`Confirmed : ${stats.Confirmed}`}</p>
        <p>{`Deaths : ${stats.Deaths}`}</p>
        <p>{`Recovered : ${stats.Recovered}`}</p>
      </div>
    </div>
  );
};

export default Country;
