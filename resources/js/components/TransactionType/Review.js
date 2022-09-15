import React from "react";

const Review = ({leasing, franchise, setReview, newData, bType}) =>{
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    return(
        <div className="w-full">
            <div className="w-full flex justify-center bg-gray-100 flex-wrap">
                <div className="w-full text-center p-3 text-xl font-black text-gray-700">Please review information before proceeding.</div>
                <div className="w-full md:w-2/3 rounded p-3 flex md:flex-row flex-col">
                    <div className="w-full md:w-1/2 p-2">
                        {franchise === 1 ? <div className={reviewDetails}>Business Type: <b>{type[bType-1]}</b></div> : ""}
                        <div className={reviewDetails}>Business Name: <b>{newData.businessname}</b></div>
                        <div className={reviewDetails}>Capital Investment: <b>{newData.businessname}</b></div>
                        <div className={reviewDetails}>Description: <b>{newData.description}</b></div>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        {franchise === 1 ? <div className={reviewDetails}>Franchise: <b>Yes</b></div> : ""}
                        {leasing === 1 ? <div className={reviewDetails}>Leasing: <b>Yes</b></div> : ""}
                        <div className={reviewDetails}>Owner's Name: <b>{newData.ownersname}</b></div>
                        <div className={reviewDetails}>Contact #: <b>{newData.contact}</b></div>
                        <div className={reviewDetails}>Email: <b>{newData.email}</b></div>
                    </div>
                </div>
            </div>
            
            <div className="w-full p-1 flex flex-row justify-between">
                <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setReview(0)}}>Back</div>
                <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setReview(1)}}>Back</div>
            </div>
        </div>
    )
}

export default Review;