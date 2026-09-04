import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Center = () => {
  return (
    <div className='flex items-center gap-8 h-[90vh] bg-blue-200 px-18 py-6 '>
      <Leftcontent />
      <Rightcontent />
    </div>
  )
}

export default Center
