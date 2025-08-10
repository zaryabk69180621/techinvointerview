import React from 'react'
 import bg from '../assets/bg.jpg'
function Home() {
  return (
    <div  className='h-200 flex items-center bg-center' style={{backgroundImage:(`url(${bg})`),backgroundPosition:""}}>
    <div className='pl-50 flex   flex-col gap-10'>
        <p className='  z-10 w-150  text-5xl font-[nunito]m text-white  font-extrabold' >
            Align your focus with
the solution and not
<br />the problem.
        </p>
                <div className=' absolute w-100 h-10  z-0 rounded-3xl bg-[#E71E5D] top-140 bg-[position:center_-20px]'> </div>

        <p className=' font-[nunito] text-xl bg-blue-400 w-fit p-5 rounded-2xl'>
            Contact US
        </p>
    </div>
        <svg className='absolute bottom-[-250px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,32L24,48C48,64,96,96,144,128C192,160,240,192,288,186.7C336,181,384,139,432,101.3C480,64,528,32,576,48C624,64,672,128,720,154.7C768,181,816,171,864,165.3C912,160,960,160,1008,176C1056,192,1104,224,1152,213.3C1200,203,1248,149,1296,128C1344,107,1392,117,1416,122.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </div>
  )
}

export default Home