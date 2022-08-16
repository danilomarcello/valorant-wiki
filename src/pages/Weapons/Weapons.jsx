import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, WeaponCard } from '../../components'

import axios from 'axios'

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
      axios.get('https://valorant-api.com/v1/weapons')
          .then(res => {
              setWeapons(res.data.data)
          })
  }, [])

  console.log(weapons)

  return (
    <div className='h-full w-full font-pop'>
    <Nav/>
    <SearchInput 
    onChange={(e)=> {setSearchFilter(e.target.value)}}    
    placeholder='Search for a Weapon...'/>


      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-5 gap-y-6'>
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
      </div>
  )
}

export default Weapons