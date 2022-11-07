import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';
const App = () =>{
        const navigate = useNavigate();
        const proceed = () =>{
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.get('/auth/proceed').then((res)=>{
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)
                    localStorage.setItem('auth_id', res.data.user_id)
                }).then(()=>{
                    navigate('/dashboard')
                })
            });
        }
    
        return (
        <div className="container w-full">
                <div className="row justify-content-center">
                    <div className="w-full">
                        
                        <div className="w-full text-center tracking-widest text-2xl p-3 font-bold text-gold-1 bg-cloudygrey shadow">Welcome to Business Permit and Licensing Office Online Application</div>
                        <div className="w-full text-center tracking-widest shadow text-lg p-3 bg-white rounded">
                            <div className="flex flex-col w-full justify-items-center align-items-center text-center">
                                {/* <image src="../../../../public/images/Homebg.png" alt="" class="w-1/3"/> */}
                                <img src="/images/Homebg.png" alt="" className='md:w-1/3 w-2/3'/>
                                <div className="w-full font-bold text-xl text-gray-400">
                                For your convenience, you can now apply for Business Permit online through our new and improved website!<br></br>
                            There are a number of advantages to applying for the permit online.
                            You can save time, money, and effort.<br></br>
                            <br></br>
                            Please click proceed to continue..
                                </div>
                            </div>
                            <div className="w-full flex flex-col align-items-end"><div onClick={proceed} className='p-1 bg-white shadow rounded text-gray-400 px-2 border-2 border-gray-500 font-bold tracking-widest text-sm hover:cursor-pointer hover:scale-105 hover:border-red-300 hover:text-red-300'>Proceed</div></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default App
//     ;}
// }


