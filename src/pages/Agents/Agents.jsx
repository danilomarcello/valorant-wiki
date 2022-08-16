import React, { useState, useEffect } from 'react'

import { Nav, SearchInput, Card, Loading} from '../../components'

import axios from 'axios'

const Agents = () => {
    const [agents, setAgents] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
            .then(res => {
                setAgents(res.data.data)
                setRemoveLoading(true)
            })
    }, [])

    console.log(agents)
    console.log(agents.filter(agent=>agent.displayName.includes("Je")))

  return (
    <div className='flex items-center justify-center flex-col lg:justify-start font-pop'>
      <Nav/>
      <SearchInput 
      onChange={(e)=> {setSearchFilter(e.target.value)}}
      placeholder='Search for an Agent...'/>
  
   

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10'>
      {agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(searchFilter)).map((agent, index) => {
        return(
          <Card
            agent={agent}
            key={index}
               />
        )
      })}
      </div>
      {!removeLoading && <Loading/>}
      </div>
  )
}

export default Agents