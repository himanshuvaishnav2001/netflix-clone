import React, { useState } from 'react'
import {NextMovieData} from './NextMovieData'
import {animation} from './AnimationDB'
import CssPage from './HomeBgPage.module.css'

import BgPhoto from './../Photos/BgPoster.webp'
import BgInsidePhoto from './../Photos/VenomLogo.png'
import { FaPlay } from 'react-icons/fa'

import Pic1 from './../Header/TrendingPhotos/No1.jpg'
import Pic2 from './../Header/TrendingPhotos/No2.jpg'
import Pic3 from './../Header/TrendingPhotos/No3.jpg'
import Pic4 from './../Header/TrendingPhotos/No4.jpg'
import Pic5 from './../Header/TrendingPhotos/No5.jpg'
import Pic6 from './../Header/TrendingPhotos/No6.jpg'
import Pic7 from './../Header/TrendingPhotos/No7.jpg'
import Pic8 from './../Header/TrendingPhotos/No8.jpg'
import Pic9 from './../Header/TrendingPhotos/no9.jpg'
import Pic10 from './../Header/TrendingPhotos/No10.jpg'

export default function HomeBgPart() {

  const PhotoData2 = [
    { "Photo" : `${Pic1}`,
      "movie" : "Do patti"
    },
    { "Photo" : `${Pic2}`,
  "movie" : "Meiyazhagan"
},
    { "Photo" : `${Pic3}`,
    "movie" : "Khel Khel Mein"
  },
    { "Photo" : `${Pic4}`,
    "movie" : "Kondal"
  },
    { "Photo" : `${Pic5}`,
    "movie" : "Family Pack"
  },
    { "Photo" : `${Pic6}`,
  "movie" : "The Greatest of All Time"
  },
    { "Photo" : `${Pic7}`,
    "movie" : "Sanivaaram"
  },
    { "Photo" : `${Pic8}`,
    "movie" : "Transformers: Rise of The Beast"
  },
    { "Photo" : `${Pic9}`,
      "movie" : "The Shadow Strays"
    },
    { "Photo" : `${Pic10}`,
    "movie" : "The Great Indian Kapil Show"
  },
  ];

  const PhotoData = NextMovieData;

  const animationDB = animation;
  
  return (
    <div className='bg-black'>

      {/* additional ------->> */}


{/* end------------->> */}
        <div className='w-full relative ' style={{maskImage: "linear-gradient(to left, black, black 20%)",
              WebkitMaskImage: "linear-gradient(to left, transparent, black 20%)",}}>

          {/* ----------------------Poster Part-------------------- */}

            <img src={BgPhoto} className='w-full bg-cover' 
            style={{maskImage: "linear-gradient(to right, black, black 40%)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)",}} />

            {/* ----------------------Poster inside Part-------------------- */}

            <div className='xl:w-1/2 md:w-3/4 absolute bottom-12 max-sm:bottom-1 max-sm:ml-[-40px]  '>

                <img src={BgInsidePhoto} className='xl:w-52 md:w-40 sm:w-24 ml-20 max-sm:w-10 max-sm:mb-[-20px]' />
                <p className='text-white xl:text-[16px] md:text-[12px] max-sm:text-[6px] pl-20 mt-5 max-sm:mb-[-20px] '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere illo amet atque nostrum obcaecati voluptate voluptatem officiis, commodi exercitationem illum excepturi sapiente, dolorem voluptatum necessitatibus ullam hic? Maiores, quia.
                </p>

                <div className='flex'>

                <div>

                <button className='xl:w-28 max-md:w-16 max-sm:w-10 h-10 max-sm:h-[17px] max-md:text-sm max-sm:text-[4px] bg-[#ffffffdc] text-black ml-20 mt-7'>
                    <div className='flex place-content-center'><h1 className=' text-xs max-md:text-[10px]  max-sm:text-[3px] mt-2 mr-2 max-md:mr-1 max-sm:mr-1 '> <FaPlay /> </h1> <h1 className='font-bold'> play </h1> </div>
                </button>

                </div>

                <div>

                <button className='xl:w-28 md:w-24 max-sm:w-10 h-10 max-sm:h-[17px] max-md:text-sm max-sm:text-[4px] bg-[#6d6d6e81] font-bold text-white ml-6 mt-7 hover:bg-[#9b9ba2b9] '>
                  More Info
                </button>

                </div>

                </div>

                

            </div>

            
          
        </div>

        {/* --------------------------movies part----------------------------- */}
{/* 
        <div>
          <Movies />
        </div>

        <div>
          <Movies />
        </div> */}

<div className='text-white relative'>


        <h1 className='font-bold text-xl ml-16  absolute  max-sm:text-[10px] max-sm:ml-10 '> Popular on Netflix</h1>


        <div className='flex lg:w-11/12 xl:w-11/12 md:w-10/12 max-sm:w-9/12 xl:ml-16 md:ml-16 max-sm:ml-1 mt-5  overflow-x-scroll Scrollbar-hide'>
        { PhotoData2.map((val, idx)=>{
                return(
                        <NewMovies pitems={val} key={idx} />
                )
              })}
        </div>

        </div>

        <div className='text-white relative mt-10'>


        <h1 className='font-bold text-xl ml-16  absolute max-sm:text-[10px] max-sm:ml-10 '> Next to Watch </h1>


        <div className='flex lg:w-11/12 xl:w-11/12 md:w-10/12 max-sm:w-9/12 xl:ml-16 md:ml-16 max-sm:ml-1   overflow-x-scroll Scrollbar-hide'>
        {PhotoData.map((val, idx)=>{
                return(
                        <NewMovies pitems={val} key={idx} />
                )
              })}
        </div>

        </div>




        <div className='text-white relative mt-10'>


        <h1 className='font-bold text-xl ml-16  absolute max-sm:text-[10px] max-sm:ml-10  '> Animation </h1>


        <div className='flex lg:w-11/12 xl:w-11/12 md:w-10/12 max-sm:w-9/12 xl:ml-16 md:ml-16 max-sm:ml-1   overflow-x-scroll Scrollbar-hide'>
        {animationDB.map((val, idx)=>{
                return(
                        <NewMovies pitems={val} key={idx} />
                )
              })}
        </div>

        </div>

        

    </div>
  )
}





function NewMovies({pitems}){

  let [modelState, setModelState] = useState(false);

  const databases = () => {
    return setModelState(!modelState);
  }

  const modelChange = () => {
    return setModelState(false);
  }
  
  
  return(
    <div>

            <div className='w-64  mr-4 max-sm:mr-0'>

            

            <div className='flex  mt-16'>

            

            
                    <img onClick={databases} src={pitems.Photo} className='w-64 h-48 rounded-md bg-contain max-sm:w-9/12 max-sm:h-32 max-sm:ml-14 max-sm:mr-20'  /> 
                    
              

            </div>
            <h1 className='text-center  pt-3 xl:text-base max-lg:text-[12px]  max-md:text-[10px] max-sm:text-[10px] '> {pitems.Movie} {pitems.movie} </h1>
            </div>

          {/* additional work------->>>>>>>> */}


            <div className={` ${CssPage.users} ${ modelState? `${CssPage.user}` : '' }`}>

                      </div>

                      <div className={`${CssPage.inside} ${ modelState? `${CssPage.showInside}` : '' }`} >


                        {/* ------------------ Image and button part---------- */}

                      
                              <div className='bg-black h-full'>

                              

                                     <img src={pitems.Photo} className='w-full h-96 rounded-md bg-contain ' 
                                     style={{maskImage: "linear-gradient(to top, black, black 40%)",
                                      WebkitMaskImage: "linear-gradient(to top, transparent, black 40%)",}} />

                                      

                                      <div onClick={modelChange} className={`${CssPage.close} ${ modelState? `${CssPage.showInside}` : '' }`} >
                                                                            &times;
                                      </div>
                                     
                                     <div className='xl:w-1/2 md:w-3/4 absolute bottom-10  text-white text-2xl  font-bold'>

                                     <h1 className=' pt-3 pl-10 xl:text-2xl max-lg:text-xl  max-md:text-lg max-sm:text-[14px] '> {pitems.Movie} {pitems.movie} </h1>


                
                {/* ------------------button part---------- */}

                                        <div className='flex'>

                                        <div>

                                        <button className='xl:w-28 max-md:w-20 max-sm:w-16 h-10 text-[#ffffffdc] xl:text-base max-lg:text-base max-md:text-sm max-sm:text-xs bg-[#de3232] hover:bg-[#b41616] rounded-md ml-10 mt-7'>
                                            <div className='flex place-content-center'><h1 className=' text-xs max-md:text-[10px] max-sm:text-[8px] mt-1 mr-1'> <FaPlay /> </h1> <h1 className='font-bold'> play </h1> </div>
                                        </button>

                                        </div>

                                        <div>

                                        <button className='xl:w-32 max-md:w-24 max-sm:w-20 h-11 xl:text-base max-lg:text-base max-md:text-sm max-sm:text-xs bg-[#6d6d6e81] font-bold text-white ml-6 mt-7 rounded-md hover:bg-[#9b9ba2b9] '>
                                          More Info
                                        </button>

                                        </div>

                                        </div>


                {/* ------------------button part end---------- */}

                

            </div>
                              </div>

                              {/* ------------------ Image and button part end---------- */}

                              
                            

                      </div>

    </div>
  )
}


// function ViewMovie(){

//   let [modelState, setModelState] = useState(false);

//   const databases = () => {
//     return setModelState(!modelState);
//   }
  
//   return(
//     <div>
//                       <div className={` ${CssPage.users} ${ modelState? `${CssPage.user}` : '' }`}>

//                       </div>

//                       <div className={`${CssPage.inside} ${ modelState? `${CssPage.showInside}` : '' }`} >

                      
                            

//                       </div>

//                           <button onClick={databases} className='w-72 h-9 rounded-md bg-[#de3232] hover:bg-[#b41616] fixed right-[-100px] top-2/4 rotate-[-90deg] z-10'>

//                                     Sign In

//                                 </button>

//     </div>
//   )
// }


// Additional part------------------>>>>>


// function Movies(){
//   const PhotoData = [
//     { "Photo" : `${Pic1}`},
//     { "Photo" : `${Pic2}`},
//     { "Photo" : `${Pic3}`},
//     { "Photo" : `${Pic4}`},
//     { "Photo" : `${Pic5}`},
//     { "Photo" : `${Pic6}`},
//     { "Photo" : `${Pic7}`},
//     { "Photo" : `${Pic8}`},
//     { "Photo" : `${Pic9}`},
//     { "Photo" : `${Pic10}`},
//   ];

//   const nextMovie = NextMovieData;
  
//   return(
//     <div>

// <div className='text-white relative mt-10'>

// <h1 className='font-bold text-xl ml-20 absolute top-0 '> Popular on Netflix</h1>

// <div className='overflow-x-scroll Scrollbar-hide mr-20 ml-20'>

// <div className='flex mt-16'>

//   {PhotoData.map((val, idx)=>{
//     return(
//             <AllPart items={val} key={idx} />
//     )
//   })}

// </div>
   
// </div>

// <div className='overflow-x-scroll Scrollbar-hide mr-20 ml-20'>

// <div className='flex mt-16'>

//   {nextMovie.map((val, idx)=>{
//     return(
//             <AllPart items={val} key={idx} />
//     )
//   })}

// </div>
   
// </div>

// </div>

//     </div>
//   )
// }


// // All Trending parts------------------

// function AllPart({items}){
//   return(
//     <div>
//             <div >

//                   <div className='w-64 pr-4 '>
//                     <img  src={items.Photo} className='w-64 h-48 rounded-md bg-contain' />  
//                   </div>              

//             </div>
//     </div>
//   )
// }
