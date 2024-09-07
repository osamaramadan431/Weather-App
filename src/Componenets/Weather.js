import React from 'react'

const Weather = (props) =>{
    
        return (
        <div className='info'>
        {
          props.city && <p className='infoValue'> 
            <span className='infoApi'>City: {props.city}</span></p>
        }
            
        {
                props.country && <p className='infoValue'>
                    <span className='infoApi'>Country: {props.country}</span></p>
            }

        {
            
            props.temp &&<p className='infoValue'>
                <span className='infoApi'>Temp: {props.temp}</span></p>
            }

        {
            props.description &&  <p className='infoValue'>
                <span className='infoApi'>description: {props.description}</span></p>    
            }

        {
            props.humidity &&  <p className='infoValue'>
                <span>Humidity: {props.humidity}</span></p>
            }
            
        {
            props.error && <p className='infoValue'>
                <span className='infoApi'>{props.error}</span></p>
            }
        </div>
        )   
    }

export default Weather