import React from 'react'

const Tasklistnumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNo.new_task}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNo.completed}</h2>
            <h3 className='text-xl font-medium'>Complete Task</h3>
        </div>
      

        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNo.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>


        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNo.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      
      
    </div>
  )
}

export default Tasklistnumbers
