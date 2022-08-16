import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, MapCard, Loading } from '../../components'

import axios from 'axios'

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
      axios.get('https://valorant-api.com/v1/maps')
          .then(res => {
              setMaps(res.data.data)
              setRemoveLoading(true)
          })
  }, [])

  return (
    <div className='flex items-center justify-center flex-col lg:justify-start'>
    <Nav/>
    <SearchInput
    onChange={(e)=> {setSearchFilter(e.target.value)}}
    placeholder='Search for a Map...'/>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10'>
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
      {!removeLoading && <Loading/>}
      </div>
  )
}

export default Maps