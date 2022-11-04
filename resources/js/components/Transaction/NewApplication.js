import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import LoadingScreen from "../Layout/loadingScreen";
const NewApplication= ()=>{
    const navigate = useNavigate();
    const TranButtons = "w-full text-redwine border-4 p-2 rounded font-bold text-xl tracking-widest text-center flex flex-col bg-pastelgrey ";
    const ButtonContainer = "w-full md:w-1/5 p-3 md:p-2 hover:cursor-pointer hover:scale-105 transition ";
    const [disclaimer, setDisclaimer] = useState(1);

    useEffect(()=>{
        setDisclaimer(0);
    })
    return(
    <div className="w-full rounded">
        {disclaimer === 1 ? <LoadingScreen/> : ""}
        <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-gray-500">ADD NEW TRANSACTION</div>
        <div className="card bg-white">
            <div className="card-header text-lg tracking-widest text-gray-700 bg-cloudygrey text-white">Please select transaction</div>
            <div className="p-2 md:p-3 flex flex-col md:flex-row md:justify-around bg-gray-100 flex-wrap">
                <div className={ButtonContainer}>
                    <Link to="/new-business" className={""}>
                        <div className={TranButtons +""}> 
                            <span>New</span> 
                            <span>Business</span> 
                        </div>
                    </Link>
                    </div>
                    <div className={ButtonContainer}>
                    <Link to="/renewal" className={""}>
                        <div className={TranButtons +""}>
                            <span>Business</span>
                            <span>Renewal</span>
                        </div>
                    </Link>
                </div>
                <div className="w-full flex flex-col flex-wrap justify-content-center">
                    <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={()=>{navigate('/dashboard')}}>Back</div>
                </div>
                {/* <div className={ButtonContainer}>
                <Link to="/change" className={"border-orange-500 text-orange-600"}><div className={TranButtons +"border-orange-500 text-orange-600"}>Change</div></Link>
                </div>
                <div className={ButtonContainer}>
                <Link to="/closure" className={"border-red-500 text-red-600"}><div className={TranButtons +"border-red-500 text-red-600"}>Closure</div></Link>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default NewApplication
