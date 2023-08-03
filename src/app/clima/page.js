// pages/weather.js
"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

import React, { useState } from 'react';


const Page = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [active, setActive] = useState(false);
    const classActive = active === true ? "active" : "" ;
    const [Inactivo, setInactivo] = useState(false);
    const classInactivo = Inactivo === true ? "" : "Inactive" ;
    const [InactivoS, setInactivoS] = useState(false);
    const classInactivoS = InactivoS === true ? "InactivoS" : "" ;
    function handleActive(){
        setActive(!active);
        setInactivo(!Inactivo);
        setInactivoS(!InactivoS);
    }

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = '596e2538fdc9961fd0f73c793fd35978';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl)

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (

    
    <div className='principal'>
        <div>
        <form onSubmit={handleSubmit} id='formularioBuscar' 
        className={classActive}>
            <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter city name"
            className=''
            />
            <button type="submit" onClick={handleActive} className="btn btn-primary btn-sm">Search</button>
        </form>
        </div>
        <div id='barraIzquierda' className={classInactivo}>
        <div className='botones'>
                <button onClick={handleActive} className='btn btn-secondary'>Seach for place</button>
                <button>icono de buscar</button>
        </div>
            {weatherData && (
                <div>
                <div className='iconos'>
                {/* <Image 
                src={`/img/${weatherData.weather[0].description}.png`}
                alt={weatherData.weather[0].description}
                width="150" height="150"
                />     */}
                <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
                className='imagen'
                />
                <h1>{weatherData.main.temp}°C</h1>
                <h2>{weatherData.weather[0].description}</h2>
                <p>
                {weatherData.name}
                </p>
                </div>
                </div>
            )}
       </div>
      {weatherData && (

        <div id='barraDerecha' className={classInactivoS}>
            <div className='dias'>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Dia</h5>
                            <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                            className='imagen'
                            />
                            <p>{weatherData.main.temp_min} {weatherData.main.temp_max}</p>
                            
                        </div>
                </div>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Dia</h5>
                            <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                            className='imagen'
                            />
                            <p>{weatherData.main.temp_min} {weatherData.main.temp_max}</p>
                            
                        </div>
                </div>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Dia</h5>
                            <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                            className='imagen'
                            />
                            <p>{weatherData.main.temp_min} {weatherData.main.temp_max}</p>
                            
                        </div>
                </div>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Dia</h5>
                            <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                            className='imagen'
                            />
                            <p>{weatherData.main.temp_min} {weatherData.main.temp_max}</p>
                            
                        </div>
                </div>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Dia</h5>
                            <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                            className='imagen'
                            />
                            <p>{weatherData.main.temp_min} {weatherData.main.temp_max}</p>
                            
                        </div>
                </div>
                
            </div>
            <div>
                <h1></h1>
            </div>
            <div className='primero'>
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title">wind Status</h5>
                        <h2 className="card-text">
                        {weatherData.wind.speed}
                        <p className="card-text">
                        mph
                        </p>
                        </h2>
                       
                    </div>
                </div>
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title">Humidity</h5>
                        <br />
                        <h2 className="card-text">
                        {weatherData.main.humidity}
                        <p className="card-text">
                        %
                        </p>
                        </h2>
                        
                    </div>
                </div>
            </div>
            <div className='segundo'>
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title">Visibility</h5>
                        <h2 className="card-text">
                        {weatherData.visibility}
                        <p className="card-text">
                        miles
                        </p>
                        </h2>
                    </div>
                </div>
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title">Air Pressure</h5>
                        <h2 className="card-text">
                        {weatherData.main.pressure}
                        <p className="card-text">
                        mb
                        </p>
                        </h2>
                    </div>
                </div>
            </div>
        </div> 
        )}
    </div>
    
    )}

export default Page;
