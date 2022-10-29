import React,{useState} from "react";

const PopUpMessage = ({popper,setEnablePopper}) =>{
    const clickOk = () =>{
        setEnablePopper(0);
    }
    const color = popper.status === "exist" ? "text-orange-500" : "text-gray-500";
    return(
        <div className="fixed w-full h-full bg-black/50 left-0 top-0 flex flex-col items-center justify-center">
            <div className="w-3/4 md:w-1/3 min-h-[30%] bg-white rounded flex flex-col p-3 mb-32 text-center">
                <div className={"w-full text-2xl font-bold capitalized py-2 "+color}>Warning!</div>
                <div className="w-full text-lg font-bold capitalized text-gray-500 py-2">{popper.message}</div>
                <div className="w-full">
                    <button onClick={clickOk} className="font-bold p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-orange-500 tracking-widest text-gray-500">OK</button>    
                </div>
            </div>
        </div>
    )
}

export default PopUpMessage;