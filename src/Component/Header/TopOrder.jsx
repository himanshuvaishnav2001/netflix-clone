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
                    <img src={Logo}  className='  xl:w-[200px] ml-16 md:w-[140px] sm:w-[160px] '/> </div>
                
                <div>  
                    <select className='text-center ml-10  xl:w-28   h-[33px] border-neutral-600 border-[1.5px] rounded-[6px] bg-transparent text-white md:text-[12px] sm:text-[10px] md:w-20 sm:w-16  '>
                        <option> English </option>
                    </select>

                </div>

                <div className='flex place-content-center ml-5  mr-5 font-bold w-20 h-[33px] text-white bg-[#de3232] rounded-[6px] hover:bg-[#b41616]  '>

                <button className=' xl:w-20 text-center xl:text-[14px] md:text-[12px] md:w-16 sm:w-14 sm:text-[10px] ' > <Link to='/Login'> Sign In </Link>
                </button>

                </div>

            </div>


      {/* ---------------------------  Unlimited Movies to Get Started Button Div---------------------- */}

            <div className='h-5/6 md:h-4/5 flex flex-col justify-center'>

                <div className=' flex flex-col justify-center'>

                <h1 className='xl:text-6xl md:text-5xl sm:text-4xl  text-white font-bold text-center'> Unlimited movies, </h1>
                <h1 className='xl:text-6xl md:text-5xl sm:text-4xl text-white font-bold text-center pt-3'> TV shows and more </h1>

                <h1 className='text-xl md:text-base sm:text-sm font-bold text-white text-center pt-3'> Starts at ₹149. Cancel at any time. </h1>
                
                </div>

                <div>
                    <div>
                        <h1 className='text-white  text-center pt-10'>
                        Ready to watch? Enter your email to create or restart your membership.
                        </h1>
                    </div>



       {/* ---------------------- Email Input and Get Started Button ------------------------- */}

                    <div className='flex justify-center mt-4'>
                        <div className='mr-2 '>
                            <input placeholder='Email address' className='text-[16px] pl-5 xl:w-96 h-14 md:w-72 sm:w-60 bg-[rgba(0,0,0,0.1)] border-[1px] rounded-[3px]  border-neutral-600' />
                        </div>
                        <div> 
                            <button className='text-2xl md:text-sm sm:text-xl xl:w-52 h-14 md:w-40 sm:w-32 bg-[#de3232] text-white font-bold rounded-[6px]'>
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
