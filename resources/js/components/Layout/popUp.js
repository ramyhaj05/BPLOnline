import React,{useState} from "react";
import {FaExclamationCircle} from "react-icons/fa";
const PopUpMessage = ({popper,setEnablePopper}) =>{
    const clickOk = () =>{
        setEnablePopper(0);
    }
    const color = popper.status === "exist" ? "text-orange-500" : "text-gray-500";
    return(
        <div className="fixed w-full h-full bg-white/70 left-0 top-0 flex flex-col items-center justify-center">
            <div className="w-3/4 md:w-1/3 min-h-[30%] bg-white rounded flex flex-col p-4 mb-32 text-center shadow-md shadow-orange-500/30">
                <div className="w-full flex flex-col justify-items-center align-items-center text-center text-6xl text-orange-500 p-2"><FaExclamationCircle></FaExclamationCircle></div>
                <div className="w-full text-lg font-bold capitalized text-gray-500 py-2">{popper.message}</div>
                <div className="w-full p-2">
                    <button onClick={clickOk} className="font-bold p-1 px-3 bg-white border-2 rounded-md border-orange-300 shadow-md shadow-orange-500/30 hover:text-orange-500 tracking-widest text-gray-500 font-bold">OK</button>    
                </div>
            </div>
        </div>
    )
}

export default PopUpMessage;