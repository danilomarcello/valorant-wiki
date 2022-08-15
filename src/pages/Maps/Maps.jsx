import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, MapCard } from '../../components'

const Maps = () => {
  return (
    <div className='h-full w-full font-pop'>
      <Nav/>
      <SearchInput/>
      <MapCard/>
      </div>
  )
}

export default Maps