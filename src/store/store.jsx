import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [location, setLocation] = useState("");
    const [place, setPlace] = useState('');

    const fetchWeather = async() => {
        const options1 = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',        
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,      
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }


        try{
            const response = await axios.request(options1);
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);


        }catch(e){
            alert("This place does'n exist");
        }
    }

    useEffect(() => {
        fetchWeather()
    },[place]);


    return (
        <AppContext.Provider value={{place, values, weather,location, setPlace}}>
            {children}
        </AppContext.Provider>
    )

}

export const useStateContext = () => {
    return useContext(AppContext)
}