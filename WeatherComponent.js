import React, { useState, useEffect } from 'react';
//import styles from './Weather.module.css';
import WeatherCard from './WeatherCard';
function WeatherComponent(){
    const [weatherData, setWeatherData] = useState([
        { day: "Monday", condition: "Sunny", temperature: "32°C" },
        { day: "Tuesday", condition: "Partially Cloudy", temperature: "30°C" },
        { day: "Wednesday", condition: "Cloudy", temperature: "28°C" },
        { day: "Thursday", condition: "Thunder Storm", temperature: "26°C" },
        { day: "Friday", condition: "Rain", temperature: "24°C" }
        ]);


        return (
            <div>
                 <h1> Weather For The Week</h1>
                { 
                weatherData.map((weather, index) => (
                         <WeatherCard
                           key={index}
                           day={weather.day}
                         condition={weather.condition}
                         temperature={weather.temperature}
                        />
                    ))}
        </div>
        )
     
    }
    export default WeatherComponent;