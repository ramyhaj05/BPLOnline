import React, {useEffect, useState} from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const RenewalForm = () =>{
    const [disclaimer, setDisclaimer] = useState(1);

    useEffect(()=>{
        setDisclaimer(0);
    })
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md";
    return(
        <form method="post" className="w-full py-3 flex md:flex-col p-3 md:p-1" >
            {disclaimer === 1 ?<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
                <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                    <ScaleLoader
                    color="#36d7b7"
                    margin={10}
                    />
                </div>
            </div> : ""}
            <div className="w-full flex md:flex-row flex-col flex-wrap">
                
                <div className="w-full p-1 flex flex-row justify-between">
                    <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" >Back</div>
                    <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Proceed</button>
                </div>
            </div>
        </form>
    );
}

export default RenewalForm;