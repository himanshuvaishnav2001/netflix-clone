import React, { useState } from 'react'
import BgPhoto from './../Photos/MainUsePhoto/netflix-background.jpg'
import Logo from './../Photos/MainUsePhoto/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  return (
    <div>

<div style={{backgroundImage:`url(${BgPhoto})`}} className='h-[1000px]'>

    {/* ---------------Logo Part---------------- */}

<div className='flex  place-items-center h-20'>

    <div className='w-[1100px]'>
        <img src={Logo}  className='  w-[200px] ml-16 max-sm:w-[70px] max-sm:mt-[-14px] max-sm:ml-10 max-md:w-[100px] max-lg:w-[150px]'/> </div>

</div>


{/* ---------------Logo part end------------------- */}


{/* ---------------------------  Login Part ---------------------- */}

<div className='flex justify-center place-content-center h-auto w-auto '>
    <LoginPage/>
</div>


</div>



    </div>
  )
}


// ---------------Login Page Part--------------------

function LoginPage(){

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        

        if (email==='himanshu' && password==='vaishnav') {
            navigate('/HomePage');
        } else {
            alert('for Sign In \n username:- himanshu \n password:- vaishnav');
        }

    };


    return(
        <div className='w-96 h-[600px] max-sm:w-64 max-sm:h-[450px]   ' style={{backgroundColor:'rgba(0,0,0,0.7)'}}>

            {/* ---------------Sign In Heading------------------- */}
            <div className='pl-12 pt-10 text-3xl font-bold text-white max-sm:text-lg max-sm:pt-5 '>
                <h1>
                    Sign In
                </h1> 

            </div>

            {/* --------------------Email all part after Sign Heading-------------------- */}

            <div className='pl-14 pt-6 text-white max-sm:text-lg'>

                    <div className=''>

                        <input value={email} onChange={handleEmailChange} placeholder='Email or mobile number' className='text-[16px] pl-5 w-72 h-14  bg-[rgba(0,0,0,0.1)] border-[1px] rounded-[3px]  border-neutral-600 max-sm:w-40 max-sm:text-[10px] max-sm:h-9 '/>

                    </div>

                    <div className='pt-4 max-sm:pt-1'>

                    <input value={password} type='password' onChange={handlePasswordChange} placeholder='password' className='text-[16px] pl-5 w-72 h-14 bg-[rgba(0,0,0,0.1)] border-[1px] rounded-[3px]  border-neutral-600 max-sm:w-40 max-sm:text-[10px] max-sm:h-9'/>

                    </div>

                    <div className='pt-4 max-sm:pt-2'>
                    
                            

                                <button onClick={handleSubmit}  className='w-72 h-9 rounded-md bg-[#de3232] hover:bg-[#b41616] max-sm:w-40 max-sm:text-[10px] max-sm:h-6'>

                                    Sign In

                                </button>

                          


                         

                    </div>

                    <div  className='max-sm:mt-[-10px]'>

                        <h1 className=' pt-2 w-72 h-8 text-center text-white max-sm:w-40 max-sm:text-[10px] max-sm:h-6 '>

                            OR

                        </h1>

                    </div>

                    <div  className='pt-4 max-sm:pt-1'>

                     

                        <button className='w-72 h-9 rounded-md transition ease-in-out delay-50 duration-200 bg-[rgba(255,255,255,.2)] hover:bg-[rgba(255,255,255,.3)] hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 max-sm:w-40 max-sm:text-[10px] max-sm:h-6'>

                            {/* -----------------------link attach karna hai yaha--------------------------- */}
                            
                           Use a sign-in code  

                        </button>

                        

                    </div>

                    <div  className='pt-4 max-sm:mt-[-10px]'>

                        <h1 className=' w-72  text-center text-white max-sm:w-40 max-sm:text-[10px] max-sm:h-9 '>
                            <a href='#'> Forgot password?</a>
                        </h1>

                    </div>
            </div>

            {/* --------------------all part after Forgot password-------------------- */}

            <div className='pl-14 pt-4 text-white max-sm:w-40 max-sm:text-[10px] max-sm:h-9 max-sm:pt-1'>

                    <div >
                            <h1 >
                                    <input type='checkbox'/> Remember me
                            </h1>
                    </div>

                    <div className='pt-3'>
                        <h1>
                        New to Netflix? <a href='#' className='text-white underline'> Sign up now. </a>
                        </h1>
                    </div>

                    <div className='pt-4 text-[12px] max-sm:w-40 max-sm:text-[10px] '>
                        <h1>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#' className='text-blue-700'> Learn more. </a>
                        </h1>
                    </div>

            </div>

        </div>
    )
}
