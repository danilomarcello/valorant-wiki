import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, Button, Card } from '../../components'

import axios from 'axios'

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
            .then(res => {
                setAgents(res.data.data)
            })
    }, [])

    console.log(agents)

  return (
    <div className='h-full w-full font-pop'>
      <Nav/>
      <div className='m-10'>
      <SearchInput/>
      <Button/>
      </div>

      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-5 gap-y-6'>
      {agents.map((agent, index) => {
        return(
          <Card
            agent={agent}
            key={index}
               />
        )
      })}
      
      </div>

      </div>
  )
}

export default Agents