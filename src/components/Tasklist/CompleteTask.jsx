import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl '>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>22 jan 2025</h4>
    </div>
        <h2 className='mt-5 text-2xl font-semibold'>Do your Work</h2>
        <p className=' text-black text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, officia!</p>

    <div className='flex items-center justify-center mt-5'>
        <button className='bg-red-500 text-black text-sm rounded-md py-1 px-2'>Completed</button>

    </div>

</div>
  )
}

export default CompleteTask
