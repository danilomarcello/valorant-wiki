import React from 'react'

import loading from '../assets/loadingGif.gif'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'><img src={loading} /></div>
  )
}

export {Loading}