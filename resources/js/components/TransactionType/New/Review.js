import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

const Review = ({newData, disclaimer, setAppID, appID, review}) =>{
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    const [appDetails, setAppDetails] = useState([]);

    // const [businessApplicationList, setbusinessApplicationList] = useState([]);

    useEffect(()=>{
        getApplicationDetails();
    },[review]);

    function getApplicationDetails(){
        
        axios.get('/api/get/appDetails/details',{params:{businessname: newData.businessname}}).then(function(response){
            setAppDetails(response.data);
        });
    }
    return(
        <div className="w-full">
            {disclaimer === 1 ?<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
                <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                    <ScaleLoader
                    color="#36d7b7"
                    margin={10}
                    />
                </div>
            </div> : ""}
            {/* {appDetails.map((det)=>{return <div key={det.id}>{det.id}</div>})} */}
            {appDetails.map((det)=>{
                
                return(
                <div className="w-full flex justify-center bg-gray-100 flex-wrap" key={det.id}>
                    <div className="w-full text-center p-3 text-xl font-black text-gray-700">Please review information before proceeding.{setAppID(det.id)}</div>
                    <div className="w-full md:w-2/3 rounded p-3 flex md:flex-row flex-col">
                        <div className="w-full md:w-1/2 p-2">
                            {det.franchise === 1 ? <div className={reviewDetails}>Business Type: <b>{type[det.business_type-1]}</b></div> : ""}
                            <div className={reviewDetails}>Business Name: <b>{det.business_name}</b></div>
                            <div className={reviewDetails}>Capital Investment: <b>{det.capital_investment}</b></div>
                            <div className={reviewDetails}>Description: <b>{det.description}</b></div>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            {det.franchise === 1 ? <div className={reviewDetails}>Franchise: <b>Yes</b></div> : ""}
                            {det.leasing === 1 ? <div className={reviewDetails}>Leasing: <b>Yes</b></div> : ""}
                            <div className={reviewDetails}>Owner's Name: <b>{det.owner_name}</b></div>
                            <div className={reviewDetails}>Contact #: <b>{det.contact}</b></div>
                            <div className={reviewDetails}>Email: <b>{det.email}</b></div>
                        </div>
                    </div>
                </div>)
            })}
            
            <div className="w-full p-1 flex flex-row justify-between">
                <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Edit</div>
                <Link to={`/new-business/upload/`+appID} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Proceed</Link>
            </div>
        </div>
    )
}


export default Review;