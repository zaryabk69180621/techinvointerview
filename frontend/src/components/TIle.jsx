import React from 'react'

function TIle({bg,img,name,col}) {

    console.log(col)
  return (
    <div style={{backgroundColor:bg}} className={` text-center content-center  h-50 w-100 rounded-2xl text-center content-center p-5`}>
        <p className='relative content-center h-full'> <span style={{color:col}} className={`text-[${col}] text-7xl absolute top-[0px]`}>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem ipsam impedit nobis vel iste repellat quae pariatur .</p> 
        <div  className=' relative z-30 bottom-[10px] left-[40px] w-fit flex justify-center items-center gap-3' alt="" >
            <img src={img} className='size-20  rounded-full ' alt="no image to shwo" />
            <p>{name}</p>
        </div>
    </div>
  )
}

export default TIle