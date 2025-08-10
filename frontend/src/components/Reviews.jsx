import React from 'react'
import TIle from './TIle'
import reviews1 from '../assets/reviews1.jpg'
import reviews2 from '../assets/reviews2.jpg'
import reviews3 from '../assets/reviews3.jpg'
function Reviews() {
  return (
    <div className='h-150 relative bg-[#0896D21A] py-3 mt-50'>
        <svg className='absolute top-[-259px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#0896D21A" fill-opacity="1" d="M0,64L15,85.3C30,107,60,149,90,165.3C120,181,150,171,180,138.7C210,107,240,53,270,42.7C300,32,330,64,360,112C390,160,420,224,450,213.3C480,203,510,117,540,85.3C570,53,600,75,630,96C660,117,690,139,720,144C750,149,780,139,810,154.7C840,171,870,213,900,224C930,235,960,213,990,176C1020,139,1050,85,1080,96C1110,107,1140,181,1170,197.3C1200,213,1230,171,1260,133.3C1290,96,1320,64,1350,48C1380,32,1410,32,1425,32L1440,32L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
        <h1 className='mx-auto my-10 w-1/3 text-4xl text-[#252650] text-center  font-bold '>What they Are Saying</h1>
        <p className='mx-auto my-10 w-1/3 text-center text-[#252650]'>The Our mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.</p>
        <div className="flex justify-center gap-5">
          <TIle bg="white" col={"#D0D0D070"} name={"whater white"} img={reviews1}  />
          <TIle bg="#0896D2" col={"#FFFFFF"} name={"whater white"} img={reviews2}  />
        <TIle bg="white" col={"#D0D0D070"} name={"whater white"} img={reviews3}  />

</div>
    </div>
  )
}

export default Reviews