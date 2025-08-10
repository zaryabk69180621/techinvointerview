import React from 'react'
import helping from '../assets/helping.jpg'
import wwd1 from '../assets/wwd1.jpg'
import wwd2 from '../assets/wwd2.jpg'
import wwd3 from '../assets/wwd3.jpg'
import Offerings from '../components/Reviews'
function About() {
  return (
    <div className='font-[nunito]'>
    <div className='bg-[#0896D21A] h-50 mt-49 content-center '>
        <svg  className="absolute top-[-50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0896D21A" fill-opacity="1" d="M0,288L80,277.3C160,267,320,245,480,229.3C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <h1 className='text-center text-5xl font-bold '>Welcome to Spectrum</h1>
        <p className='m-auto w-1/3 text-lg text-center mt-10'>5 star services and accommodations for mothers of new babies, women in need of recovery, or busy mothers in need of a getaway.</p>
           <svg  className="  rotate-180  absolute top-[564px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0896D21A" fill-opacity="1" d="M0,288L80,277.3C160,267,320,245,480,229.3C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

    </div>
    <div className='flex gap-20 mt-80 justify-center'>
        <div  className='w-4/10'>
            <img src={helping} className='block rounded-3xl' style={{boxShadow:"-70px -70px 0px 0px #47A700"}} alt="" />
        </div>
        <div className='w-4/10 flex flex-col justify-center gap-15'>
            <h1 className='text-#12275A font-extrabold text-5xl'>The Importance of Proper Postpartum Care</h1>
            <p className='text-[#515151] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
            <div>
                <div className='flex gap-2 font-lg text-2xl  items-center'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.375C12.9281 22.375 14.3423 22.0937 15.6617 21.5472C16.9811 21.0007 18.1799 20.1996 19.1898 19.1898C20.1996 18.1799 21.0007 16.9811 21.5472 15.6617C22.0937 14.3423 22.375 12.9281 22.375 11.5C22.375 10.0719 22.0937 8.65773 21.5472 7.33832C21.0007 6.0189 20.1996 4.82005 19.1898 3.81021C18.1799 2.80038 16.9811 1.99933 15.6617 1.45281C14.3423 0.90629 12.9281 0.625 11.5 0.625C8.61577 0.625 5.84967 1.77076 3.81021 3.81021C1.77076 5.84967 0.625 8.61577 0.625 11.5C0.625 14.3842 1.77076 17.1503 3.81021 19.1898C5.84967 21.2292 8.61577 22.375 11.5 22.375ZM11.2197 15.8983L17.2613 8.64833L15.4053 7.10167L10.2095 13.3355L7.52096 10.6457L5.81238 12.3543L9.43738 15.9793L10.3726 16.9145L11.2197 15.8983Z" fill="#15718F"/>
</svg><p>Best Quality Service</p>

                </div>
                <div className='flex gap-2 font-lg text-2xl  items-center'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.375C12.9281 22.375 14.3423 22.0937 15.6617 21.5472C16.9811 21.0007 18.1799 20.1996 19.1898 19.1898C20.1996 18.1799 21.0007 16.9811 21.5472 15.6617C22.0937 14.3423 22.375 12.9281 22.375 11.5C22.375 10.0719 22.0937 8.65773 21.5472 7.33832C21.0007 6.0189 20.1996 4.82005 19.1898 3.81021C18.1799 2.80038 16.9811 1.99933 15.6617 1.45281C14.3423 0.90629 12.9281 0.625 11.5 0.625C8.61577 0.625 5.84967 1.77076 3.81021 3.81021C1.77076 5.84967 0.625 8.61577 0.625 11.5C0.625 14.3842 1.77076 17.1503 3.81021 19.1898C5.84967 21.2292 8.61577 22.375 11.5 22.375ZM11.2197 15.8983L17.2613 8.64833L15.4053 7.10167L10.2095 13.3355L7.52096 10.6457L5.81238 12.3543L9.43738 15.9793L10.3726 16.9145L11.2197 15.8983Z" fill="#15718F"/>
</svg><p>Highly Professional Team</p>

                </div>
                <div className='flex gap-2 font-lg text-2xl  items-center'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.375C12.9281 22.375 14.3423 22.0937 15.6617 21.5472C16.9811 21.0007 18.1799 20.1996 19.1898 19.1898C20.1996 18.1799 21.0007 16.9811 21.5472 15.6617C22.0937 14.3423 22.375 12.9281 22.375 11.5C22.375 10.0719 22.0937 8.65773 21.5472 7.33832C21.0007 6.0189 20.1996 4.82005 19.1898 3.81021C18.1799 2.80038 16.9811 1.99933 15.6617 1.45281C14.3423 0.90629 12.9281 0.625 11.5 0.625C8.61577 0.625 5.84967 1.77076 3.81021 3.81021C1.77076 5.84967 0.625 8.61577 0.625 11.5C0.625 14.3842 1.77076 17.1503 3.81021 19.1898C5.84967 21.2292 8.61577 22.375 11.5 22.375ZM11.2197 15.8983L17.2613 8.64833L15.4053 7.10167L10.2095 13.3355L7.52096 10.6457L5.81238 12.3543L9.43738 15.9793L10.3726 16.9145L11.2197 15.8983Z" fill="#15718F"/>
</svg><p>Commitment to Customer</p>
Best Quality Service
                </div>
            </div>
       <div className='py-7 text-lg px-15 w-fit rounded-2xl bg-[#0896D2]'>
        learn More
       </div>
        </div>
        
    </div>

     <div className=' pb-10 flex gap-20 mt-80 justify-center items-center'>
        <div className='w-4/10 flex flex-col justify-center gap-15'>
            <h1 className='text-#12275A font-extrabold text-5xl'>What We do</h1>
            <p className='text-[#515151] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
            <div>
                <div className='flex gap-2 font-lg text-2xl  items-center'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.375C12.9281 22.375 14.3423 22.0937 15.6617 21.5472C16.9811 21.0007 18.1799 20.1996 19.1898 19.1898C20.1996 18.1799 21.0007 16.9811 21.5472 15.6617C22.0937 14.3423 22.375 12.9281 22.375 11.5C22.375 10.0719 22.0937 8.65773 21.5472 7.33832C21.0007 6.0189 20.1996 4.82005 19.1898 3.81021C18.1799 2.80038 16.9811 1.99933 15.6617 1.45281C14.3423 0.90629 12.9281 0.625 11.5 0.625C8.61577 0.625 5.84967 1.77076 3.81021 3.81021C1.77076 5.84967 0.625 8.61577 0.625 11.5C0.625 14.3842 1.77076 17.1503 3.81021 19.1898C5.84967 21.2292 8.61577 22.375 11.5 22.375ZM11.2197 15.8983L17.2613 8.64833L15.4053 7.10167L10.2095 13.3355L7.52096 10.6457L5.81238 12.3543L9.43738 15.9793L10.3726 16.9145L11.2197 15.8983Z" fill="#15718F"/>
</svg><p>Best Quality Service</p>

                </div>
                <div className='flex gap-2 font-lg text-2xl  items-center'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.375C12.9281 22.375 14.3423 22.0937 15.6617 21.5472C16.9811 21.0007 18.1799 20.1996 19.1898 19.1898C20.1996 18.1799 21.0007 16.9811 21.5472 15.6617C22.0937 14.3423 22.375 12.9281 22.375 11.5C22.375 10.0719 22.0937 8.65773 21.5472 7.33832C21.0007 6.0189 20.1996 4.82005 19.1898 3.81021C18.1799 2.80038 16.9811 1.99933 15.6617 1.45281C14.3423 0.90629 12.9281 0.625 11.5 0.625C8.61577 0.625 5.84967 1.77076 3.81021 3.81021C1.77076 5.84967 0.625 8.61577 0.625 11.5C0.625 14.3842 1.77076 17.1503 3.81021 19.1898C5.84967 21.2292 8.61577 22.375 11.5 22.375ZM11.2197 15.8983L17.2613 8.64833L15.4053 7.10167L10.2095 13.3355L7.52096 10.6457L5.81238 12.3543L9.43738 15.9793L10.3726 16.9145L11.2197 15.8983Z" fill="#15718F"/>
</svg><p>FIve Star Services </p>
                </div>
                <div className='flex gap-2 font-lg text-2xl  items-center'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.375C12.9281 22.375 14.3423 22.0937 15.6617 21.5472C16.9811 21.0007 18.1799 20.1996 19.1898 19.1898C20.1996 18.1799 21.0007 16.9811 21.5472 15.6617C22.0937 14.3423 22.375 12.9281 22.375 11.5C22.375 10.0719 22.0937 8.65773 21.5472 7.33832C21.0007 6.0189 20.1996 4.82005 19.1898 3.81021C18.1799 2.80038 16.9811 1.99933 15.6617 1.45281C14.3423 0.90629 12.9281 0.625 11.5 0.625C8.61577 0.625 5.84967 1.77076 3.81021 3.81021C1.77076 5.84967 0.625 8.61577 0.625 11.5C0.625 14.3842 1.77076 17.1503 3.81021 19.1898C5.84967 21.2292 8.61577 22.375 11.5 22.375ZM11.2197 15.8983L17.2613 8.64833L15.4053 7.10167L10.2095 13.3355L7.52096 10.6457L5.81238 12.3543L9.43738 15.9793L10.3726 16.9145L11.2197 15.8983Z" fill="#15718F"/>
</svg><p>Commitment to excelence  </p>
              </div>
            </div>
            <div className='py-7 text-lg px-15 w-fit rounded-2xl bg-[#0896D2]'>
        learn More
       </div>
        </div>
        <div  className='w-4/10'>
          <div style={{boxShadow:"-50px -50px 0px 0px #0896D2"}} className='rounded-xl w-fit h-70 overflow-hidden'>
            <img src={wwd1} className='block h-100 rounded-3xl'  alt="" />
      </div> 
        <div className="flex  mt-5  gap-3">
            <img src={wwd2} style={{boxShadow:"-30px 30px 0px 0px #016600"}} className='w-70  rounded-2xl' alt="" />
            <img src={wwd3} className='w-70  rounded-2xl' alt="" />    
        </div>
       </div>
        
    </div>
    <Offerings />
    </div>
  )
}

export default About