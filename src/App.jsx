import { useState } from "react";
import search from "./assets/icons/search.svg";
import {useStateContext} from "./store/store.jsx";
import BackgroundLayout from "./components/backgroundLayout.jsx";
import WeatherCard from "./components/weatherCard.jsx";
import MiniCard from "./components/miniCard.jsx";

function App() {
  const [input, setInput] = useState("")
  const {weather, location, values, setPlace} = useStateContext()

  return (
  <>
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl ">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">

          <img src={search} alt="search image" className="w-[1.5rem] h-[1.5rem]"/>

          <input type="text" placeholder="Enter place" className="focus:outline-none w-full text-[#212121] text-lg" value={input} 
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setPlace(input)
              setInput('')
            }
          }} onChange={(e) => {setInput(e.target.value)}} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-8 px-[10%] items-center justify-center ">
          <WeatherCard 
            place={location}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
             />
            
            <div className="flex justify-center gap-8 flex-wrap w-[60%]">

              {
                values?.slice(1,7).map(itm => 
                  <MiniCard
                  key={itm.datetime}
                  time = {itm.datetime}
                  temp = {itm.temp}
                  iconString={itm.conditions}
                  ></MiniCard>
                )
              }

            </div>
      </main>
    </div>
  </>

  )
}

export default App;