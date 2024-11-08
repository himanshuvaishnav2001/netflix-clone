import React from 'react'
import LogoPic from './../Photos/MainUsePhoto/logo.png'
import { FaRegBell,  FaRegSmile,  FaSearch,  FaSortDown } from 'react-icons/fa'


export default function AllPageHeader() {
  return (
    <div className='relative'>
        
        
        <div className='flex w-full max-sm:w-full bg-transparent fixed z-10  h-fit '> 

            {/* -------------Logo part----------------- */}

            <div>
                <Logo />
            </div>

            {/* -------------------All Pages Div----------------- */}

            <div className='w-4/6'>
                <AllPages />
            </div>

            {/* -----------------------Children Bell Icon Div-------------------------- */}

            <div className='max-sm:w-5'>
                <BellIcon />
            </div>

        </div>


    </div>
  )
}



function Logo(){
    return(
        <div>

                <div className='lg:w-[250px] max-md:w-[200px] max-sm:w-[50px]  '>
                <img src={LogoPic}  className='xl:w-[120px] max-xl:w-[120px] max-lg:w-[120px] max-md:w-[90px] max-sm:10 ml-24 max-sm:ml-5'/> 
                </div>

        </div>
    )
}


function AllPages(){
    return(
        <div>
                    <div className=' flex xl:mt-6 max-lg:mt-6   max-md:mt-4 max-sm:mt-1 xl:text-sm  max-xl:text-sm max-lg:text-[12px] max-md:text-[10px] max-sm:text-[5px] ml-10 max-sm:ml-5 max-sm:h-[4px] text-white '>

                        {/* ---------------Home Div-------------- */}

                            <div className='xl:pr-4 max-md:pr-1 max-sm:w-6 max-sm:ml-1 hover:underline'>
                                <a href='#'> Home  </a>
                            </div>

                        {/* ---------------TV Shows Div-------------- */}

                            <div className='xl:pr-4 max-md:pr-3 max-sm:w-16 max-sm:ml-[-2px]  hover:underline'>
                            <a href='#'> Tv Shows </a>
                            </div>

                        {/* ---------------Movies Div-------------- */}

                            <div className='xl:pr-4 max-md:pr-3 max-sm:w-6 max-sm:ml-[-16px] hover:underline'>
                            <a href='#'> Movies </a>
                            </div>

                        {/* ---------------New & Popular Div-------------- */}

                            <div className='xl:pr-4 max-md:pr-3 max-sm:w-24 max-sm:ml-[-5px] hover:underline'>
                            <a href='#'> New & Popular </a>
                            </div>

                        {/* ---------------My List Div-------------- */}

                            <div className='xl:pr-4 max-md:pr-3 max-sm:w-14 max-sm:ml-[-28px] hover:underline'>
                            <a href='#'> My List </a>
                            </div>

                        {/* ---------------Browse by Language Div-------------- */}

                            <div className='xl:pr-4 max-md:pr-3 max-sm:w-32 max-sm:ml-[-21px] hover:underline'>
                            <a href='#'> Browse by Language </a>
                            </div>
                            
                    </div>
        </div>
    )
}

function BellIcon(){
    return(
        <div>
            {/* -----------------All Right Element Div----------------- */}
            

            <div className='flex  mt-6 max-sm:mt-3 xl:text-sm  text-white max-sm:ml-[-10px] max-sm:h-[4px]'>

                {/* --------------------------Search Div-------------------- */}
                   <div className=''>
                        <a href='#' className='text-white xl:text-xl max-lg:text-sm max-md:text-xs max-sm:text-[4px] max-sm:w-32  ' >
                        <FaSearch />
                        </a>
                   </div>

                {/* --------------------------Children Div-------------------- */}
                    <div className='pl-5 max-sm:pl-1 xl:text-lg max-lg:text-sm max-md:text-xs max-sm:text-[4px] max-sm:w-32 max-sm:mt-[-5px] '>
                        <a href='#'>
                            Children
                        </a>
                    </div>

                {/* --------------------------Bell Icon Div-------------------- */}
                    <div className='pl-5 max-sm:pl-1'>
                        <a href='#' className='xl:text-xl max-lg:text-sm max-md:text-xs max-sm:text-[4px] max-sm:w-32 '>
                            <FaRegBell />
                        </a>
                    </div>

                {/* --------------------------Select Div-------------------- */}
                    <div className='pl-5 max-sm:pl-1'>
                        
                        <a className='bg-transparent xl:text-2xl max-lg:text-sm max-md:text-xs max-sm:text-[4px] flex cursor-pointer place-content-center'>
                        <div className='xl:text-2xl max-lg:text-sm max-md:text-xs max-sm:text-[4px] max-sm:w-32   pr-1'> <FaRegSmile /> </div>
                        <div className='xl:text-base max-lg:text-xs max-md:text-[10px] max-sm:text-[4px] max-sm:w-32  '> <FaSortDown />  </div>
                        </a>
                        
                    </div>
            </div>
        </div>
    )
}
