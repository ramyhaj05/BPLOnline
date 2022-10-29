import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingScreen = () =>{
    return(<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
        <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
            <ScaleLoader
            color="#36d7b7"
            margin={10}
            />
        </div>
    </div>)
}

export default LoadingScreen;