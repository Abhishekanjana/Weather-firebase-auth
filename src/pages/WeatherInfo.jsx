import React, { useState, useEffect } from "react";
import "../App.css";
import globeIcon from "../assets/globe.svg";

import { useNavigate } from "react-router-dom";



// Remove this unused import of 'dashboard'.


export default function WeatherInfo() {
  const ApiKey = "4e533ed82f316c7ddb6567ace0544969"
  const [queryCity, setQueryCity] = useState(null);
  const [normalTemp, setNormalTemp] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate();
  
  const fetchData = async () => {
    if (!queryCity) return;
    // try {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&q=${queryCity}&appid=${ApiKey}`
    )
    .then(response => response.json())
    .then( jsonData => {
      setCityName(jsonData.name);
      setNormalTemp(jsonData.main.temp);
      setTempMin(jsonData.main.temp_min);
      setTempMax(jsonData.main.temp_max);
      setCountryName(jsonData.sys.country);
      setWindSpeed(jsonData.wind.speed);
      setHumidity(jsonData.main.humidity);
      setWeather(jsonData.weather[0].description);
      setLongitude(jsonData.coord.lon);
      setLatitude(jsonData.coord.lat);
      
      const icon = jsonData.weather[0].icon;
      const iconMap = {
        "01d": "d1",
        "01n": "n1",
        "02d": "d2",
        "02n": "n2",
        "03d": "dn34",
        "03n": "dn34",
        "04d": "dn34",
        "04n": "dn34",
        "09d": "d9",
        "09n": "n9",
        "10d": "dn10",
        "10n": "dn10",
        "11d": "dn11",
        "11n": "dn11",
        "13d": "d13",
        "13n": "n13",
        "50d": "dn50",
        "50n": "dn50"
      };
      setWeatherIcon(iconMap[icon]);
    });
  };
    // } catch (error) {
    //   console.error("Something bad happened");
    //   console.error(error);
    // }
        
    const findMyCity = () => {
      const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&lacalityLanguage=en`;
      fetch(geoApiUrl)
      .then(res => res.json())
      .then(data => setQueryCity(data.city))
    }
    const error = () => {
      console.log("unable to find your city");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    findMyCity();
  }, [])

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [queryCity]);

  const handleClick = (e) => {
    e.preventDefault();
    
    navigate('/login');
    console.log("Clickd");
  }

  return (
    <>
    {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    
    <div className="bg-[url('src/assets/AFoJ.gif')]">
 
</div> */}


 
    



        {/* <div className="absolute inset-0 z-10 bg-auto bg-no-repeat bg-center opacity-50" style={{ backgroundImage: `url(${backgroundGif})` }}></div> GIF background with opacity */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-r from-blue-900 to-slate-800"></div> {/* Your existing background with opacity */}


      <div className="container mx-auto mt-48 px-7 ">
        <div className="">
          <button 
            className="bg-blue-600 rounded-xl px-4 py-2 mb-6 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            login
          </button>
        </div>
      
      
      <form  onSubmit={(e) => {
            e.preventDefault();
            fetchData();
          }}>   
       <label htmlFor="search" className="mb-2 text-sm font-medium  sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 w-14 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" 
                onChange={(e) => {
                    setQueryCity(e.target.value);
                }}
                autoFocus className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter yur city name" required />
            <button onClick={fetchData} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        </form>



        {cityName && (
          <div style={{ height: "80%" }}>
            <div className="mt-10 text-center font-bold  text-2xl bg-gradient-to-t from-gray-900 to-gray-50 bg-clip-text text-transparent">
            <img src={globeIcon} alt="Globe Icon" className="inline-block w-9 h-9" />
              {cityName} <span className="orange">({countryName})</span>
            </div>
            <div className="mt-3 text-center font-semibold  text-xl text-gray-500">
              <div className="">
                Current : {(normalTemp - 273.15).toFixed(2)}
                <span className="text-green-500">°С</span>
              </div>
              <div className="min-max">
                <div>
                  Min : {(tempMin - 273.15).toFixed(2)}
                  <span className="text-green-500">°С</span>
                </div>
            
                <div>
                  Max : {(tempMax - 273.15).toFixed(2)}
                  <span className="text-green-500">°С</span>
                </div>
                <div className="mt-3 text-center font-semibold  text-xl text-gray-500">
              Weather: {weather} <span className={`icon ${weatherIcon}`}></span>
            </div>
            
              </div>
            </div>
            <div className="mt-3 text-right font-semibold  text-xl text-gray-500">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginInline: "10%",
                }}
              >
                <div className="mt-3 text-right font-semibold  text-xl text-gray-500">
                  Humidity: <span className="mt-3 text-right font-semibold  text-xl text-gray-500">{humidity}</span>
                </div>
                <div className="mt-3 text-right font-semibold  text-xl text-gray-500">
                  Longitude: <span className="mt-3 text-right font-semibold  text-xl text-gray-500">{longitude}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginInline: "10%",
                }}
              >
                <div className="longitude">
                Wind Speed: <span className="mt-3 text-right font-semibold  text-xl text-gray-500">{windSpeed}</span>
                  
                </div>
                <div className="latitude">
                  Latitude: <span className="mt-3 text-right font-semibold  text-xl text-gray-500">{latitude}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {!cityName && (
          <div className="mt-10 text-center font-semibold  text-xl text-red-600 ">
           📍 City not Found
          </div>
        )}
      </div>

    </>
  );
}

