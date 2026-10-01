import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  // button function 
  const submitted = (e) => {
    console.log("form submitted by",title)
    console.log("details:",details);
    
    e.preventDefault()

   const copyTask = {...task}

    console.log(copyTask)
    setTitle('') 
    setDetails('')
  }


  return (
    <div className='flex lg:flex-row flex-col h-screen  '>


      {/* leftside */}
      <div className='bg-black h-screen lg:w-1/2 '>
        <form onSubmit={(e) => {
          submitted(e)
        }}
          className='flex flex-col px-5 py-3 gap-5  text-white '>
          <h1 className='font-bold text-3xl tracking-wider'>Notes</h1>

          {/* input task area */}
          <input 
            className='border-2 border-white rounded outline-none h-10 p-2'
            type="text"
            placeholder='Enter Task'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)

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
          <button className='bg-white text-black hover:scale-95 border-black rounded h-10 '>Add Task</button>
        </form>
      </div>


      {/*rightside  */}
      <div className='h-screen bg-black px-4 py-4 flex flex-wrap gap-4 overflow-auto lg:w-1/2 border-l-4 border-white'>

         <div className='h-60 w-52 relative px-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover rounded  overflow-auto p-2'></div>
         <div className='h-60 w-52 relative px-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover rounded  overflow-auto p-2'></div>
          <div className='h-60 w-52 relative px-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover rounded  overflow-auto p-2'></div>
          <div className='h-60 w-52 relative px-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover rounded  overflow-auto p-2'></div>
          <div className='h-60 w-52 relative px-4 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover rounded  overflow-auto p-2'></div>
      

      </div>


    </div>
  )
}

export default App
