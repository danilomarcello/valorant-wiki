import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, MapCard, Button } from '../../components'

import axios from 'axios'

const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
      axios.get('https://valorant-api.com/v1/maps')
          .then(res => {
              setMaps(res.data.data)
          })
  }, [])

  console.log(maps)

  return (
    <div className='h-full w-full font-pop'>
    <Nav/>
    <div className='m-10'>
    <SearchInput/>
    <Button/>
    </div>

      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-5 gap-y-6'>
      {maps.map((map, index) => {
        return(
          <MapCard
            map={map}
            key={index}
               />
        )
      })}
      
      </div>
      </div>
  )
}

export default Maps