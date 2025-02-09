import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherinfo,setWeatherInfo]= useState({
        city:"Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        Weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo); 
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather app by Kartikeya</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}