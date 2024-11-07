import React, { useState } from 'react'
import { data } from './Trending'
import Reason1 from './TrendingPhotos/Reason1.png'
import Reason2 from './TrendingPhotos/Reason2.png'
import Reason3 from './TrendingPhotos/Reason3.png'
import Reason4 from './TrendingPhotos/Reason4.webp'


// -------------------complete-------------

export default function Middle() {

  const dataSets = data;
  
  const [currIdx, setCurrIdx] = useState(0);

  const perIdx = 5 ;

const newData =  function handler() {

  setCurrIdx((prevIdx)=> prevIdx < Math.ceil(dataSets.length / perIdx) - 1 ? prevIdx + 1 : 0 );

  }

  
  const startIdx = currIdx * perIdx;

  const endIdx = startIdx + perIdx;

  const Data = dataSets.slice(startIdx, endIdx);




  // ------------------------reason data---------------------------



  const ReasonData = [
    {
      "title" : 'Enjoy on your TV',
      "body" : 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      "photo": `${Reason1}`
    },
    {
      "title": 'Download your shows to watch offline',
      "body": 'Save your favourites easily and always have something to watch.',
      "photo": `${Reason2}`
    },
    {
      "title": 'Watch everywhere',
      "body": 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
      "photo": `${Reason3}`
    },
    {
      "title": 'Create profiles for kids',
      "body": 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
      "photo":`${Reason4}`
    },

  ]


  // ------------end reason data----------------
  
  return (

    
    <div>

            {/* ------------------------------Trending Now part ----------------------------------- */}

        <div>

          <div className=' mt-[-90px]    text-xl text-white font-bold'>
           <div className='h-24 border-t-[5px] border-t-red-500  gradient bg-gradient-to-b to-[#000000fc] from-[#1a2037f9] shadow-red-700 shadow-2xl'  style={{borderTopLeftRadius: ' 80% 100%', borderTopRightRadius: '80% 100%'}}> 
           </div>
            <div className='bg-[#000000fc]'>

              <div className='ml-40'><h1 > Trending Now </h1></div>

              {/* ----------------movies part--------------- */}


              <div className='flex flex-wrap ml-44 '> 

                { Data.map((val,idx)=>{
                  return(
                  <MovieCards items={val} key={idx}/>
                )})}
                <div className='justify-center ml-[-16px]'>
                    <button onClick={newData} className=' rounded-[10px] text-center w-7 h-32 mt-24 shadow-2xl shadow-white' style={{backgroundColor:'rgba(255, 255, 255, 0.1)'}}> {">"} </button>
                </div>
              </div>

            </div>
          </div>

        </div>

           {/* ------------------- More reasons to join Part ------------------------ */}

                          <div className='bg-[#000000fc]'>

                              <div className='ml-40 font-bold text-2xl text-white'><h1 className='pt-10'> More reasons to join </h1>
                              </div>


                              <div className='flex flex-wrap ml-40'>
                                      {ReasonData.map((val,idx) => {
                                        return(
                                                  <Join items={val} key={idx} />
                                        )
                                      })}
                              </div>

                          </div>


    </div>
  )
}


{/* ------------------------------Trending Now part Function  ----------------------------------- */}

 function MovieCards({items}) {

  
  return (

    
    <div className='h-[250px] ml-6 mt-10 text-white'>
      
      
      <div className='h-[250px] w-[220px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
        <img src={items.body} className='h-[230px] w-[180px] rounded-[10px]' />
      
        <h1 className='ml-[-25px] mt-[-70px] w-10 h-10 text-[100px] text-black ' style={{WebkitTextStroke:'1px #fff'}} > {items.title} 
              {/* <h1 className='ml-[5px] mt-[-28px] w-10 h-10 text-[145px] text-black  ' > {items.title} 

              </h1> */}
         </h1>
      </div>

      
      
    </div>
  )
}



   {/* ------------------- More reasons to join Function Part ------------------------ */}


function Join({items}){


  return(
    <div className='mr-5'> 
          
            

            {/* --------------------------------More reasons boxs-------------------- */}
            


            <div className='mt-6  size-72 rounded-3xl' style={{background: 'linear-gradient(149deg, #192247 0%, #210e16 99.08%)'}}>

                {/* ----------------for heading part---------------- */}

                  <div className='pl-5 pt-6 text-white font-bold text-xl'>
                      <h1> {items.title} </h1>
                  </div>

                {/* ----------------for body part ---------------- */}

                  <div className='pt-4 pl-5 pr-2 text-white'>
                      <p> {items.body} </p>
                  </div>


                {/* ----------------for Icon Part---------------- */}


                  <div className='flex justify-center w-20 h-12 relative left-48 top-16'>
                    <img src={items.photo} className='' />
                  </div>

            </div> 

    </div>
  )
}

