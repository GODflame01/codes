import React from 'react'

const Rightcardcontent = (props) => {
    return (
        <div className='absolute h-full w-full flex flex-col justify-between top-0 left-0'>
            <h3 className='m-4 p-2 font-bold bg-gray-200 w-fit rounded-full h-fit'>{props.id+1}</h3>
            <div className='m-4 p-2'>
                <p className='text-l font-bold text-white'>{props.intro}</p>
                <div className='flex flex-row justify-between p-2 mt-2 bg-amber-50 rounded-4xl items-center'>
                    <button className='font-bold tracking-wide'>{props.tag}</button>
                    <button>➔</button>
                </div>
            </div>
        </div>
    )
}

export default Rightcardcontent
