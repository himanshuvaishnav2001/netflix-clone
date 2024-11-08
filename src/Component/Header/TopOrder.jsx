import React from 'react'
import BgPhoto from './../Photos/MainUsePhoto/netflix-background.jpg'
import Logo from './../Photos/MainUsePhoto/logo.png'
import { Link } from 'react-router-dom'

export default function TopOrder() {
  return (
    <div>
        
        <div style={{backgroundImage:`url(${BgPhoto})`}} className='h-[775px]'>

            <div className='flex  place-items-center  xl:h-20'>

                <div className='w-[1100px]'>
                    <img src={Logo}  className='  xl:w-[200px] ml-16 max-md:w-[100px] max-lg:w-[140px] sm:w-[160px] max-sm:w-[100px]  max-sm:ml-10 '/> </div>
                
                <div>  
                    <select className='text-center ml-10  xl:w-28   h-[33px] border-neutral-600 border-[1.5px] rounded-[6px] bg-transparent text-white max-md:text-[12px] max-lg:text-[12px] max-sm:text-[8px] max-md:w-20 max-lg:w-24 max-sm:w-16  '>
                        <option> English </option>
                    </select>

                </div>

                <div className='flex place-content-center ml-5  mr-5 font-bold w-20 h-[33px] text-white bg-[#de3232] rounded-[6px] hover:bg-[#b41616]  '>

                <button className=' xl:w-20 text-center xl:text-[14px]  max-md:text-[12px] max-lg:text-[12px] max-sm:text-[8px] max-md:w-20 max-lg:w-28 max-sm:w-16   ' > <Link to='/Login'> Sign In </Link>
                </button>

                </div>

            </div>


      {/* ---------------------------  Unlimited Movies to Get Started Button Div---------------------- */}

            <div className='h-5/6 md:h-4/5 flex flex-col justify-center'>

                <div className=' flex flex-col justify-center'>

                <h1 className='xl:text-6xl md:text-5xl sm:text-4xl max-sm:text-2xl  text-white font-bold text-center'> Unlimited movies, </h1>
                <h1 className='xl:text-6xl md:text-5xl sm:text-4xl max-sm:text-2xl text-white font-bold text-center pt-3'> TV shows and more </h1>

                <h1 className='text-xl md:text-base sm:text-sm max-sm:text-xs font-bold text-white text-center pt-3'> Starts at ₹149. Cancel at any time. </h1>
                
                </div>

                <div>
                    <div>
                        <h1 className='text-white  text-center pt-10 max-sm:text-xs'>
                        Ready to watch? Enter your email to create or restart your membership.
                        </h1>
                    </div>



       {/* ---------------------- Email Input and Get Started Button ------------------------- */}

                    <div className='flex justify-center mt-4'>
                        <div className='mr-2 '>
                            <input placeholder='Email address' className='text-[16px] pl-5 xl:w-96 max-xl:w-96 h-14 max-md:w-64 max-sm:w-48 max-lg:w-80 bg-[rgba(0,0,0,0.1)] border-[1px] rounded-[3px]  border-neutral-600' />
                        </div>
                        <div> 
                            <button className='text-2xl md:text-sm sm:text-xl xl:w-52 max-xl:w-52 h-14 max-md:w-40 max-sm:w-20 max-sm:text-[10px] bg-[#de3232] text-white font-bold rounded-[6px]'>
                                {"Get Started >" }
                            </button>
                        
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}
