import React from 'react'
import Rightcard from './rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className=' h-full w-[70%] flex flex-nowrap  overflow-x-auto gap-3 '>
        {props.users.map(function(elem,idx){
          return <Rightcard 
          key = {idx}
          id= {idx}
          image={elem.image} 
          intro = {elem.intro}
          tag={elem.tag}
          />
        })}
    </div>
  )
}

export default Rightcontent
