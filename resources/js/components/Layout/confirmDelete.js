import React,{useState} from "react";

const ConfirmDelete = ({deleteNewApp, setConfirmed}) =>{
    return(
        <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
            <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-rose-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                <span className="font-bold text-xl text-rose-500 p-3">Transaction Successfully Deleted!</span>
                <span className="text-rose-500">Please take note that this action cannot be undo.</span>
                <span>Type "CONFIRM" to continue deleting</span>
                <span className="font-black text-2xl text-gray-400 p-3"><input type="text" name="confirmed" id="confirmed" className="bg-gray-200" onChange={(e)=>{setConfirmed(e.target.value)}}/></span>
                <div onClick={deleteNewApp} className="p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-rose-500 hover:cursor-pointer transition hover:font-bold hover:scale-105">Confirm</div>
            </div>
        </div>
    )
}

export default ConfirmDelete