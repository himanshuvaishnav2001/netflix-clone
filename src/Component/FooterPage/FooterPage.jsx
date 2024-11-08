import React from 'react'

export default function FooterPage() {

    const data = [
        {
            item1 : 'FAQ',
            item2 : 'Investor Relations',
            item3 : 'Privacy',
            item4 : 'Speed Test'
        },
        {
            item1 : 'Help Centre',
            item2 : 'Jobs',
            item3 : 'Cookie Preferences',
            item4 : 'Legal Notices'
        },
        {
            item1 : 'Account',
            item2 : 'Ways to Watch',
            item3 : 'Corporate Information',
            item4 : 'Only on Netflix'
        },
        {
            item1 : 'Media Centre',
            item2 : 'Terms of Use',
            item3 : 'Contact Us',
        },
    ]

  return (
    <div className='relative bottom-0 w-full -z-0 '>

            <div className='bg-black pt-16  bottom-0 w-full '>


                            <div className=' pl-44  pb-10 text-[18px] max-sm:pl-14 max-sm:text-[12px] text-[#ffffffb3]'>
                                    
                                    <h1>
                                        Questions? Call <a href='#' className='underline'> 000-800-919-1694  </a>
                                    </h1>
                                </div>
            
                            <div className='bg-black flex flex-wrap pl-44 pb-10 max-sm:pl-14 max-sm:text-[12px] '>

                                

                                        { data.map((val,idx)=>{
                                            return(
                                                <FooterBoxs items={val} key={idx} />
                                            )
                                        })}


                            </div>


                            <div className=' pl-44 pb-10 text-[18px] text-white max-sm:pl-14 max-sm:text-[12px]'>
                                    
                                    <select className='text-center w-32 h-8 bg-transparent border-[1px] rounded-[3px]  border-neutral-600'>
                                        <option className='bg-black'>  English  </option>
                                        <option className='bg-black'>  Hindi  </option>
                                    </select>
                            </div>


                            <div className=' pl-44 pb-28 text-[16px] text-[#ffffffb3] max-sm:pl-14 max-sm:text-[12px]'>
                                    
                                    <h1>
                                        Netflix India
                                    </h1>
                                </div>


            </div>



    </div>
  )
}




//--------------------box part---------------------



function FooterBoxs({items}){
    return(
        <>
            <div className='flex flex-col pr-40 max-sm:pr-12 text-[16px] text-[#ffffffb3] max-sm:text-[12px]'>
                <div className='mb-3'>
                    
                        <a href='#' className=' underline' > {items.item1} </a>
                    
                </div>


                <div className='mb-3'>
                    
                    <a href='#' className=' underline'> {items.item2} </a>
                    
                </div>


                <div className='mb-3'>
                    
                    <a href='#' className=' underline'> {items.item3} </a>
                    
                </div>


                <div className='mb-3  '>
                    
                    <a href='#' className=' underline'> {items.item4} </a>
                    
                </div>
            </div>
        </>
    )
}
