import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, MapCard } from '../../components'

import axios from 'axios'

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

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
    <SearchInput
    onChange={(e)=> {setSearchFilter(e.target.value)}}
    placeholder='Search for a Map...'/>


      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-5 gap-y-6'>
      {maps.filter((map) =>
      map.displayName.toLowerCase().includes(searchFilter)).map((map, index) => {
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