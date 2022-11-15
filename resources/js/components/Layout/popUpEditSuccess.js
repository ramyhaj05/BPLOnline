import React from "react";
import {useNavigate} from 'react-router-dom';

const PopUpEditSuccess = ({nav}) =>{
    const navigate = useNavigate();
    return(
        <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
            <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-emerald-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                <span className="font-bold text-xl text-emerald-500 p-3">Application Details Successfully Updated!</span>
                <span className="text-sm text-rose-500">Please click continue to start upload of necessary requirements.</span>
                <div onClick={()=>{navigate(nav)}} className="mt-3 p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-emerald-500 cursor-pointer transition hover:scale-105">Continue</div>
            </div>
        </div>
    )
}

export default PopUpEditSuccess