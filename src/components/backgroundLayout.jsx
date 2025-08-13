import { useStateContext } from "../store/store";

import cloudy from "../assets/images/Cloudy.jpg";
import clear from "../assets/images/Clear.jpg";
import fog from "../assets/images/fog.png";
import rainy from "../assets/images/Rainy.jpg";
import snow from "../assets/images/snow.jpg";
import stormy from "../assets/images/Stormy.jpg";
import { useEffect, useState } from "react";


function BackgroundLayout() {
    const {weather} = useStateContext();
    const [image, setImage] = useState(clear)
    

    useEffect(() => {
        if (weather.conditions) {
            let imageString = weather.conditions;
            if (imageString.toLowerCase().includes("clear")) {
                setImage(clear)
            }else if (imageString.toLowerCase().includes("cloud")) {
                setImage(cloudy)
            }else if (imageString.toLowerCase().includes("fog")) {
                setImage(fog)
            }else if (imageString.toLowerCase().includes("rain")) {
                setImage(rainy)
            }else if (imageString.toLowerCase().includes("snow")) {
                setImage(snow)
            }else if (imageString.toLowerCase().includes("storm") || imageString.toLowerCase().includes("thunder")) {
                setImage(stormy)
            }else if (imageString.toLowerCase().includes("overcast")) {
                setImage(clear)
            }
        }

    
    },[weather])

    return(
        <>
        <img src={image} alt="Weather" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
        </>
    )
}

export default BackgroundLayout;