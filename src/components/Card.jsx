import React from 'react'

const Card = ({ agent }) => {

  return (
<div className="card card-compact w-60 bg-base-100 shadow-xl m-10 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-2">
  <figure><img src={agent.displayIcon} alt={agent.displayName} /></figure>
  <div className="card-body">
    <h2 className="card-title flex justify-center">{agent.displayName}</h2>
    <p className=' flex justify-center'>{agent.role.displayName}</p>
    <div className="card-actions justify-between">

    <button className="bg-black rounded-lg">
      <img className='h-11'
       src={agent.abilities[0].displayIcon}
       alt={agent.abilities[0].displayName}/>
       </button>

    <button className="bg-black rounded-lg">
      <img className='h-11'
       src={agent.abilities[1].displayIcon}
       alt={agent.abilities[1].displayName}/>
       </button>

    <button className="bg-black rounded-lg">
      <img className='h-11'
       src={agent.abilities[2].displayIcon}
       alt={agent.abilities[2].displayName}/>
       </button>

    <button className="bg-black rounded-lg">
      <img className='h-11'
       src={agent.abilities[3].displayIcon}
       alt={agent.abilities[3].displayName}/>
       </button>

    </div>
  </div>
</div>
  )
}

export { Card }