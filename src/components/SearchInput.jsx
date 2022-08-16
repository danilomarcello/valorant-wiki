import React from 'react'

const SearchInput = ({ onChange, placeholder }) => {
  return (
<input 
onChange={onChange}
type="text" placeholder={placeholder} className="input w-full m-10 max-w-xs shadow"
 />
  )
}

export  { SearchInput }