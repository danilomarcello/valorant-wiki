import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, WeaponCard, Button } from '../../components'

import axios from 'axios'

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);

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
    <div className='m-10'>
    <SearchInput/>
    <Button/>
    </div>

      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-5 gap-y-6'>
      {weapons.map((weapon, index) => {
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