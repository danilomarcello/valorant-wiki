import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, WeaponCard, Loading } from '../../components'

import axios from 'axios'

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
      axios.get('https://valorant-api.com/v1/weapons')
          .then(res => {
              setWeapons(res.data.data)
              setRemoveLoading(true)
          })
  }, [])

  return (
    <div className='flex items-center justify-center flex-col lg:justify-start font-pop'>
    <Nav/>
    <SearchInput 
    onChange={(e)=> {setSearchFilter(e.target.value)}}    
    placeholder='Search for a Weapon...'/>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10'>
      {weapons.filter((weapon) =>
      weapon.displayName.toLowerCase().includes(searchFilter)).map((weapon, index) => {
        return(
          <WeaponCard
            weapon={weapon}
            key={index}
               />
        )
      })}
      
      </div>
      {!removeLoading && <Loading/>}
      </div>
  )
}

export default Weapons