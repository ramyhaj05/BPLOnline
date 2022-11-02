import React from "react";
import { Link } from "react-router-dom";

const PopupDelete = () =>{
    return(
        <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
            <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-rose-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                <span className="font-bold text-xl text-rose-500 p-3">Transaction Successfully Deleted!</span>
                
                <span className="font-black text-2xl text-gray-400 p-3"></span>
                <Link to="/dashboard" className="p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-rose-500 hover:cursor-pointer">Done</Link>
            </div>
        </div>
    )
}

export default PopupDelete