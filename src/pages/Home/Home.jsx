import React from 'react'

import { Nav } from '../../components';

import homeImg from '../../assets/agents-home.png'

const Home = () => {
  return (
    <div className='h-full w-full flex justify-center items-center flex-col text-center font-pop'>
      <Nav/>
      <img 
      className='m-3'
      src={homeImg}/>
      <h1 className='text-5xl m-2'>Valorant Wiki</h1>
      <h2 className='text-sm my-2'>VALORANT is a free-to-play first-person tactical shooter video game being developed and published by Riot Games.</h2>
    </div>
  )
}

export default Home