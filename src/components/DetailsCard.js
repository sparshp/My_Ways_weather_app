import React from 'react'
import moment from 'moment'
import '../css/DetailsCard.css'

const DetailsCard = ({ data }) => {
    const weather = data.query.results.channel;
  return (
    <div className="details">
       <div className="clouds">
              <p className="celsius">{ weather.item.condition.temp} {weather.units.temperature} </p>
          
              <p className="des">{ weather.item.condition.text}</p>
           <p className="time">{ weather.item.condition.date.slice(0,12)}</p>
          </div>
          <div className="main_info">
          <div className="more-info">
                  <p className="">High/Low: {weather.item.forecast[0].high}/{weather.item.forecast[0].low}</p>
           <p className="">Humidity: {data.query.results.channel.atmosphere.humidity}%</p>
                  <p className="">Pressure {weather.atmosphere.pressure} {weather.units.pressure}</p>
           <p className="">Visibility: {weather.atmosphere.visibility} </p>
          </div>
          <div className="more-info">
          <p className="">Wind: {weather.wind.speed} {weather.units.speed} </p>
          <p className="">Dew Point: {data.query.results.channel.atmosphere.humidity}%</p>

        <p className="">Sunrise: {weather.astronomy.sunrise}</p>
        <p className="">Sunset: {weather.astronomy.sunset}</p>
       </div> 
          </div>
         
    </div>
  )
}

export default DetailsCard