import React, { Component} from 'react'
import Form from './Componenets/Form'
import Weather from './Componenets/Weather'


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const API_key ="cac94442e8e517485cabc69fd1678b1a"
class App extends Component {
  
state= {
  city: '',
  country: '',
  name: '',
  description: '',
  humidity: '',
  error: '',
}

getWeather = async (e) => {
  e.preventDefault()
  const cityInput = e.target.elements.city.value
  const countryInput = e.target.elements.country.value
  console.log (cityInput, countryInput)
  const fetchApi = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${API_key}`)
  const data = await fetchApi.json()

  console.log (data)
if (cityInput && countryInput) {
  this.setState ({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    error: '',
  })
} else {
    this.setState ({
    temp: '',
    city: '',
    country: '',
    description: '',
    humidity: '',
    error: 'Please Enter Data'
    })
}
}

  render() {
 
    return (
      <div className='wrapper'>
      
      <div className='form-container'>

      <Form getWeather={this.getWeather}/>
      <Weather 
      city= {this.state.city}
      country= {this.state.country}
      temp= {this.state.temp}
      description={this.state.description}
      humidity={this.state.humidity}
      error={this.state.error}
      cityInput = {this.cityInput}
      countryInput = {this.countryInput}
      />
      </div>
      </div>
    )
  }
}

export default App

                          
// {
//   "coord": {
//     "lon": 10.99,
//     "lat": 44.34
//   },
//   "weather": [
//     {
//       "id": 501,
//       "main": "Rain",
//       "description": "moderate rain",
//       "icon": "10d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 298.48,
//     "feels_like": 298.74,
//     "temp_min": 297.56,
//     "temp_max": 300.05,
//     "pressure": 1015,
//     "humidity": 64,
//     "sea_level": 1015,
//     "grnd_level": 933
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 0.62,
//     "deg": 349,
//     "gust": 1.18
//   },
//   "rain": {
//     "1h": 3.16
//   },
//   "clouds": {
//     "all": 100
//   },
//   "dt": 1661870592,
//   "sys": {
//     "type": 2,
//     "id": 2075663,
//     "country": "IT",
//     "sunrise": 1661834187,
//     "sunset": 1661882248
//   },
//   "timezone": 7200,
//   "id": 3163858,
//   "name": "Zocca",
//   "cod": 200
// }                        
                        