import React from 'react'
import { RiArrowRightUpLine } from "@remixicon/react";

const Leftcontent = () => {
    return (
        <div className='h-full w-3/10 flex flex-col gap-4 justify-between cursor-default'>
            <div className='items-center mt-5 p-2'>
                <h3 className='tracking-wider text-5xl text-black font-bold px-2 py-4 mb-6 leading-normal'>prospective  <br /><span className='text-red-900 bg-blue-100 rounded-full px-2 items-center pb-2'>Customer</span> <br />Segmentation</h3>

                <p className='py-2 px-2 text-l font-xl tracking-wider text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit praesentium facere adipisci officiis doloribus deserunt minima quae corrupti esse?</p>
            </div>
            <div className='font-bold py-2 px-2 '>
                <RiArrowRightUpLine size={64} />
            </div>
        </div>
    )
}

export default Leftcontent
