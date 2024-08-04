import React from 'react'
import Savednotes from './Savednotes'
import Writenotes from './Writenotes'

const Fullview = () => {
  return (
    <div className=' custom-flex'>
        <Savednotes/>
        <Writenotes/>
    </div>
  )
}

export default Fullview