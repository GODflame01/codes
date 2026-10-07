import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  // button function 
  const submitted = (e) => {
    
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('') 
    setDetails('')
  }


  const deleteNote= (idx) =>{
    const deleteTask =[...task]
    deleteTask.splice(idx,1)

    setTask(deleteTask)
  }


  return (
    <div className='flex lg:flex-row flex-col h-full  '>


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
            placeholder='Enter Your Task'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)

            }}
          />

            {/* input detail area */}
          <textarea className='border-2  rounded outline-none h-55 px-2 py-2'
            placeholder="Enter your Task Details"
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
      {task.map(function(elem,idx){
        return (<div 
          key={idx}
          className=' h-60 w-52 relative custom-scrollbar scroll-smooth px-4  bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10)] bg-cover rounded  overflow-auto p-2'>



            <h2 onClick={()=>{
              deleteNote(idx);
              
            }} className='top-10 absolute right-3 text-xs  hover:bg-red-500  rounded-full p-1 text-black'>❌</h2>
            <h2 className='py-8 px-3 text-2xl font-bold leading-tight'>{elem.title}</h2>
            <p className='px-3 leading-tight text-gray-500'>{elem.details}</p>
          </div>)
      })}

      </div>


    </div>
  )
}

export default App
