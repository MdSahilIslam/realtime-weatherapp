import { useEffect, useState } from "react";
import useDate from "../utils/useDate";

import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import windy from "../assets/icons/windy.png";
import fog from "../assets/icons/fog.png";


function WeatherCard({
    temperature,
    windspeed,
    humidity,
    place,
    heatIndex,
    iconString,
    conditions
}){
    const [icon, setIcon] = useState(sun);
    const {time} = useDate();

    useEffect(() => {
        if(iconString) {
            if (iconString.toLowerCase().includes("cloud")) {
                setIcon(cloud)
            }else if (iconString.toLowerCase().includes("clear")) {
                setIcon(sun)
            } else if (iconString.toLowerCase().includes("snow")) {
                setIcon(snow)
            }else if (iconString.toLowerCase().includes("thunder")) {
                setIcon(storm)
            }else if (iconString.toLowerCase().includes("rain")) {
                setIcon(rain)
            }else if (iconString.toLowerCase().includes("sunny")) {
                setIcon(sun)
            }else if (iconString.toLowerCase().includes("fog")) {
                setIcon(fog)
            }else if (iconString.toLowerCase().includes("wind")) {
                setIcon(windy)
            }else if(iconString.toLowerCase().includes("overcast")) {
                setIcon(sun)
            }
        }
        
    },[iconString])
    return (
        <>
            <div className="w-[22rem] min-w-[22rem] h-[30rem] glass-card p-4">
                <div className="flex w-full justify-center items-center gap-4 mt-12mb-4">
                    <img src={icon} alt="Weather-icon" />
                    <p className="font-bold text-5xl flex justify-center items-center">{temperature} &deg;C</p>
                </div>
                <div className="font-bold text-center text-xl">
                    {place.toUpperCase()}

                </div>
                <div className="w-full flex justify-center items-center mt-4">
                    <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
                    <p className="flex-1 text-center p-2">{time}</p>
                </div>
                <div className="w-full flex justify-between items-center mt-4 gap-4">
                    <span className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">Wind Speed <p className="font-normal">{windspeed} km/h</p></span>
                    <span className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">Humidity <p className="font-normal">{humidity} gm/m&#179;</p></span>
                </div>

                <div className="w-full p-3 mt-4 flex justify-between items-center">
                    <p className="font-semibold text-lg">Heat Index</p>
                    <p className="text-lg">{heatIndex? heatIndex : 'N/A'}</p>
                </div>
                <hr className="bg-slate-600"/>
                <div className="w-full flex items-center justify-center p-4 text-3xl font-semibold">
                    {conditions}
                </div>
            </div>
        </>
    )
}

export default WeatherCard; 