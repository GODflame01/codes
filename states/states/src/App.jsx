import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  
  function increase(){
    const newNum = num+1
    setnum(newNum)
    console.log(newNum)

    
  }
  function decrease(){
    const newNum = num-1
    setnum(newNum)
    console.log(newNum)
  }
  function reset(){
    setnum(0)
  }
 
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase} >increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App
