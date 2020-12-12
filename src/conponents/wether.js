import React, { useState, useEffect } from 'react';
import axios from "axios"

function Wetherapp() {
    const [wether, setWether] = useState([]);
    const [name, setName] = useState("");
    const [cityName,setCityName] = useState("");

    const getData = async () => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
        return response.data;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      alert(`Submitting Name ${name}`)
      cityName=name;
    }

    useEffect(() => {
      setTimeout(() => {
        // getData().then((text) => console.log(text));
        getData().then((text) => setWether(text));
      }, 3000);
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
          <h1>{wether.name}</h1>
      </div>
    );
  }

export default Wetherapp;