import React from 'react'

const WeaponCard = ({ weapon }) => {
  return (
<div class="card w- bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={weapon.displayIcon} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{weapon.displayName}</h2>

    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export { WeaponCard }