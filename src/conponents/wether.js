import React, { useState, useEffect } from 'react';
import axios from "axios"

function Wetherapp() {
    const [wether, setWether] = useState([]);
    const [name, setName] = useState("");
    const [cityName,setCityName] = useState("jaipur");
    const [loader, setLoader] = useState(true);

    const getData = async () => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
        setLoader(false);
        return response.data;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setCityName(name);
      setLoader(true);
    }

    useEffect(() => {
      setTimeout(() => {
        getData().then((text) => setWether(text));
      }, 1500);
      },[cityName]);
      

    return (
      <div>
        <h3>Search Wether Report</h3>
        <form onSubmit={handleSubmit}>
            <label>
              City Name:
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
        </form>
          {/* <h1>{wether.base}</h1> */}
          {
            loader?<h2>Loading...</h2>:
            <div>      
            <h1>City: {wether.name}</h1>
            <h2>Temp: {wether.main.temp}</h2>
            </div>
          }
      </div>
    );
  }

export default Wetherapp;
