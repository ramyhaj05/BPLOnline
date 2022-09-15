import React from "react";

const Review = ({leasing, franchise, bType,setReview}) =>{
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];
    return(
        <div className="w-full">
            <div className="w-full text-center text-xl font-bold tracking-widest">{bType === 1 ? "NEW BUSINESS" : ""}</div>
            <div className="w-full flex justify-center">
                <div className="w-full md:w-2/3 bg-gray-100 flex md:flex-row flex-col">
                    <div className="w-full md:w-1/2 p-2">
                        {franchise === 1 ? <div className="text-gray-500 text-md">Business Type: <b>{type[bType-1]}</b></div> : ""}
                        {franchise === 1 ? <div className="text-gray-500 text-md">Franchise: <b>YES</b></div> : ""}
                        {leasing === 1 ? <div className="text-gray-500 text-md">Leasing: <b>YES</b></div> : ""}
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        {franchise === 1 ? <div className="text-gray-500 text-md">Franchise: <b>Yes</b></div> : ""}
                        {leasing === 1 ? <div className="text-gray-500 text-md">Leasing: <b>Yes</b></div> : ""}
                    </div>
                </div>
            </div>
            
            <div className="w-full p-1 flex flex-row justify-between">
                <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setReview(0)}}>Back</div>
            </div>
        </div>
    )
}

export default Review;