import React from 'react'
import { iconUrlFromCode } from '../Service/weatherService'

function Forecast(title, items, icon) {
  return (
    <div>
        <div className='flex items-center justify-start my-6'>
            <p className='text-white font-medium uppercase'>hourly
            
            forecast</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='flex flex-col text-sm'>
                    4.30pm
                </p>
                <img src={iconUrlFromCode(icon)}
                    className='w-12 my-1' alt='' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='flex flex-col text-sm'>
                    4.30pm
                </p>
                <img src={iconUrlFromCode(icon)} 
                    alt=""
                    className='w-12 my-1' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='flex flex-col text-sm'>
                    4.30pm
                </p>
                <img src={iconUrlFromCode(icon)} 
                    alt=""
                    className='w-12 my-1' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='flex flex-col text-sm'>
                    4.30pm
                </p>
                <img src={iconUrlFromCode(icon)} 
                    alt=""
                    className='w-12 my-1' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='flex flex-col text-sm'>
                    4.30pm
                </p>
                <img src={iconUrlFromCode(icon)}
                    alt=""
                    className='w-12 my-1' />
            </div>


        </div>
    </div>
  )
}

export default Forecast