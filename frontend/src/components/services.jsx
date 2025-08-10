import React from 'react'

function services({img,first,second}) {
  return (
    <div style={{zIndex:100}} className='flex w-100 relative justify-center items-center gap-5 w-1/3'>
    <img src={img} className='size-30 rounded-2xl  bg-[#FFDD9833]' alt="no image to show" />
    <div>
        <h1 className='text-[#12275A] text-3xl font-bold'>
            {first}
        </h1>
        <p className='text-[#484848]'>{second}</p>
    </div>


    </div>
  )
}

export default services