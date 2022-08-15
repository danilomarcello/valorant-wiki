import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, WeaponCard } from '../../components'

const Weapons = () => {
  return (
    <div className='h-full w-full font-pop'>
      <Nav/>
      <SearchInput/>
      <WeaponCard/>
      </div>
  )
}

export default Weapons