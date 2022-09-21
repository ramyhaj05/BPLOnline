import React, {useEffect, useState} from "react";

const Review = ({leasing, franchise, setReview, newData, bType, disclaimer, setDisclaimer, setUploading, setAppID}) =>{
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    const [appDetails, setAppDetails] = useState([]);

    // const [businessApplicationList, setbusinessApplicationList] = useState([]);

    useEffect(()=>{
        getApplicationDetails();
    },[])

    function getApplicationDetails(){
        
        axios.get('/api/get/appDetails/details',{params:{businessname: newData.businessname}}).then(function(response){
            setAppDetails(response.data);
        });
        // axios.get('/api/get/appDetails/details',{
        //     params:{businessname: newData.businessname}
        // }).then(function(response){
        //     setAppDetails(response.data);
        // });
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
                    {setAppID(det.id)}
                    <div className="w-full text-center p-3 text-xl font-black text-gray-700">Please review information before proceeding.</div>
                    <div className="w-full md:w-2/3 rounded p-3 flex md:flex-row flex-col">
                        <div className="w-full md:w-1/2 p-2">
                            {franchise === 1 ? <div className={reviewDetails}>Business Type: <b>{type[det.business_type-1]}</b></div> : ""}
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
                <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setReview(0)}}>Edit</div>
                <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setUploading(1);setReview(0)}}>Proceed</div>
            </div>
        </div>
    )
}

const Uploading = () =>{
    return(
        <div className="">
            <div className="text-xl">Requirements</div>
            <div className="pl-5">
                <div className="">DTI Registration</div>
                <div className="">Barangay Clearance</div>
                <div className="">Security and Exchange Commision Registration (SEC)</div>
                <div className="">Tax Declaration</div>
                <div className="">Contract of Lease</div>
                <div className="">CGL Insurance</div>
                <div className="">Business Cedula/Corporate Cedula</div>
            </div>
        </div>
    )
}

export default Review;