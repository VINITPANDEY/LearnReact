import React, { useState, useEffect } from 'react';
import axios from "axios"

function Wetherapp() {
    const [wether, setWether] = useState([]);
    const [name, setName] = useState("");
    const [cityName,setCityName] = useState("jaipur");
    const [loader, setLoader] = useState(true);

    const getData = async () => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d0f85e26df7c7a0773b2b695bed6fc0e`);
        return response.data;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setCityName(name);
      setLoader(true);
    }

    useEffect(() => {
      setTimeout(() => {
        getData().then((text) => {setWether(text)
                   setLoader(false)});
      }, 1500);
      },[cityName]);

    return (
      <div>
          <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
              <div class="row d-flex justify-content-center px-3">
                  <div class="card">
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
                      <h2 class="ml-auto mr-4 mt-3 mb-0">{wether.name}</h2>
                      <p class="ml-auto mr-4 mb-0 med-font">{wether.main.temp}*</p>
                      <h1 class="ml-auto mr-4 large-font">{wether.main.humidity}</h1>
                      <p class="time-font mb-0 ml-4 mt-auto">08:30 <span class="sm-font">AM</span></p>
                      <p class="ml-4 mb-4">Wednesday, 18 October 2019</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }

export default Wetherapp;