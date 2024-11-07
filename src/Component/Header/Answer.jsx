import React, { useState } from 'react'

export default function Answer() {

  const Data = [
    {
      "Title" : "What is Netflix ?",
      "body" : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      "Title" : "How much does Netflix cost?",
      "body" : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      "Title" : "Where can I watch?",
      "body" : "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "body2" : "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      "Title" : "How do I cancel?",
      "body" : "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." 
    },
    {
      "Title" : "What can I watch on Netflix?",
      "body" : "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      "Title" : "Is Netflix good for kids?",
      "body" : "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      "body2": "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ]

  return (
    <div>
            <div className=' mt-[-50px]  pt-[70px] bg-[#000000fc]'>

              <div> 
                    <h1 className='mb-10 pt-[40px] pl-40 text-white text-2xl  '> Frequently Asked Questions </h1>
              </div>

              <div>

                    {Data.map((val, idx)=>{
                      return(
                                <FAQ items={val} key={idx} />
                      )
                    })}

              </div>

              {/* --------------------------get Started Level--------------- */}

              <div className='h-52'>
                    <div>
                        <h1 className='text-white  text-center pt-10'>
                        Ready to watch? Enter your email to create or restart your membership.
                        </h1>
                    </div>



       {/* ---------------------- Email Input and Get Started Button ------------------------- */}

                    <div className='flex justify-center mt-4'>
                        <div className='mr-2 '>
                            <input placeholder='Email address' className='xl:text-[16px] pl-5 xl:w-[550px] md:text-lg sm:text-sm md:w-64 sm:w-44 h-14 bg-[rgba(0,0,0,0.1)] border-[1px] rounded-[3px]  border-neutral-600' />
                        </div>
                        <div> 
                            <button className='xl:text-2xl md:text-lg sm:text-sm md:w-32 sm:w-24 xl:w-52 h-14 bg-[#de3232] text-white font-bold rounded-[6px]'>
                                {"Get Started >" }
                            </button>
                        
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}


function FAQ({items}){

  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(prev => !prev);
  };

  return(
    <div>

        <div className='pb-2 '>

                  <div className='pl-10 h-20 flex place-items-center ml-40  mr-40 text-white cursor-pointer bg-customGray transition ease-in-out delay-300 duration-500 hover:bg-[#4f4c4cc8] ' 
                  onClick={toggleFAQ}
                  role="button"
                  aria-expanded={isOpen} >
                      
                
                      <h1 className='text-white xl:text-2xl md:text-xl sm:text-lg '>{items.Title}</h1>

                    </div>
                    
                  {/* <div className=' pt-10 flex place-items-center ml-40  mr-40' style={{backgroundColor:'rgba(255, 255, 255, 0.1)'}}>
                    <p className='ml-10  mr-10 mb-10 text-white'>
                      {items.body}
                      <br /> <br />
                      {items.body2}
                    </p>
                  </div> */}

                    {isOpen && (
                            <div className='border-t-[1px] border-black pt-10 flex place-items-center ml-40 mr-40' style={{ backgroundColor: 'rgb(45, 45, 45)' }}>
                              <p className='ml-10 mr-10 mb-10 text-white'>
                                {items.body}
                                {items.body2 && (
                                  <>
                                    <br /><br />
                                    {items.body2}
                                  </>
                                )}
                              </p>
                            </div>
                          )}
        </div>

    </div>
  )

}




