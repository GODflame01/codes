import React, { useState } from 'react'

const App = () => {
  const [Task, setTask] = useState('')
  const [details, setDetails] = useState('')
  const submitted = (e) => {
    console.log("form submitted by",Task)
    console.log("details:",details);
    
    e.preventDefault()


    setTask('') 
    setDetails('')
  }


  return (
    <div className='flex lg:flex-row flex-col h-screen  '>


      {/* leftside */}
      <div className='bg-red-900 h-screen lg:w-1/2 '>
        <form onSubmit={(e) => {
          submitted(e)
        }}
          className='flex flex-col px-5 py-3 gap-5  text-white '>
          <h1 className='font-bold text-3xl'>Enter Tasks</h1>

          {/* input task area */}
          <input 
            className='border-2 rounded outline-none h-10 p-2'
            type="text"
            placeholder='Enter Task'
            value={Task}
            onChange={(e) => {
              setTask(e.target.value)

            }}
          />

            {/* input detail area */}
          <textarea className='border-2  rounded outline-none h-55 px-2 py-2'
            placeholder="Task Details"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          >
          </textarea>
          <button className='bg-amber-800 rounded h-10 '>Add Task</button>
        </form>
      </div>


      {/*rightside  */}
      <div className='h-screen bg-amber-200 px-4 py-3 flex flex-wrap gap-5 overflow-auto lg:w-1/2 '>

        <div className='h-35 w-32 bg-gray-50 rounded  overflow-auto p-2'></div>
        <div className='h-35 w-32 bg-gray-50 rounded  overflow-auto p-2'></div>
        <div className='h-35 w-32 bg-gray-50 rounded  overflow-auto p-2'></div>

      </div>


    </div>
  )
}

export default App
