import React from "react";
import { Link } from "react-router-dom";
const SuccessTransaction = ({referenceID}) =>{
    return(
        <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
            <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-emerald-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                <span className="font-bold text-xl text-emerald-500 p-3">Transaction Successful!</span>
                <span>Please take note of your transaction number.</span>
                <span className="font-black text-2xl text-gray-400 p-5 py-2 bg-gray-100">{referenceID}</span>
                <span className="text-sm text-rose-500">Disclaimer: Your application will be verified within 48hrs</span>
                <span className="text-sm text-rose-500">Please check your e-mail from time to time.</span><br></br>
                <Link to="/dashboard" className="p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-emerald-500 transition hover:scale-105">Done</Link>
            </div>
        </div>
    )
}

export default SuccessTransaction