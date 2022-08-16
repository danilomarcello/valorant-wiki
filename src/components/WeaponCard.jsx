import React from 'react'

const WeaponCard = ({ weapon }) => {

  return (
<div className="card card-compact w-60 bg-base-100 shadow-xl m-10 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-2">
  <figure><img src={weapon.displayIcon} alt={weapon.displayName} /></figure>
  <div className="card-body">
    <h2 className="card-title flex justify-center items-center">{weapon.displayName}</h2>
    <div className="card-actions justify-between">
    <p className=' flex justify-center'></p>
    </div>
  </div>
</div>
  )
}

export { WeaponCard }