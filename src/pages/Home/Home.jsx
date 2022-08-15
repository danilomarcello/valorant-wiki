import React from 'react'

import { Nav } from '../../components';

import homeImg from '../../assets/agents-home.png'

const Home = () => {
  return (
    <div className='h-full w-full flex justify-center items-center flex-col font-pop'>
      <Nav/>
      <img 
      className='m-3'
      src={homeImg}/>
      <h1 className='text-5xl m-2'>Valorant Wiki</h1>
      <h2 className='text-xl m-2'>Here you will find all the Agents, Weapons and Maps from Valorant.</h2>
    </div>
  )
}

export default Home