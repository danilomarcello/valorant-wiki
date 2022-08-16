import React from 'react'

const WeaponCard = ({ weapon }) => {
  return (
<div className="card card-compact w-60 bg-base-100 shadow-xl m-10 cursor-pointer hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-2">
  <figure><img className='max-h-20' src={weapon.displayIcon} alt={weapon.displayName} /></figure>
  <div class="card-body items-center text-center">
    <h2 className="card-title">{weapon.displayName}</h2>
    <p>{weapon.shopData?.category}</p>
    <p class="badge badge-outline">Price : {weapon.shopData?.cost} </p>
  </div>
</div>
  )
}

export { WeaponCard }