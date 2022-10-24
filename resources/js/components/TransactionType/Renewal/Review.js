import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";

const Review = () =>{
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    const [appDetails, setAppDetails] = useState([]);
    const [disclaimer, setDisclaimer] = useState(0);
    const [appID, setAppID] = useState()
    const {id} = useParams();
    
    useEffect(()=>{
        getApplicationDetails(id)
    },[])

    function getApplicationDetails(id){
        setDisclaimer(1)
        axios.get('/api/get/renewal/details',{params:{account_number: id}}).then(function(response){
            setAppDetails(response.data);
            const key = response.data.map((det)=>{
                setAppID(det.id)
            })
        }).then(()=>{
            setDisclaimer(0)
        })
    }
    return(
        <div className="w-full md:p-5 p-1">
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
                <div className="w-full flex justify-around bg-gray-100 flex-wrap" key={det.id}>
                    <div className="w-full text-center p-3 text-xl font-black text-gray-700">Please review information before proceeding.</div>
                    <div className="w-full md:w-2/3 rounded p-3 flex md:flex-row flex-col flex-wrap">
                        <div className="w-full p-2">
                            <div className={reviewDetails}>Account Number: <b>{det.account_number}</b></div>
                            <div className={reviewDetails}>Gross Income: <b>{det.gross_income}</b></div>
                            <div className={reviewDetails}>Owner's/Representative Name: <b>{det.owners_name}</b></div>
                            <div className={reviewDetails}>Contact: <b>{det.contact}</b></div>
                            <div className={reviewDetails}>email: <b>{det.email}</b></div>

                        </div>
                    </div>
                </div>)
            })}
            
            <div className="w-full p-1 flex flex-row justify-between">
                <Link to={`/edit/`+id} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Edit</Link>
                <Link to={`/upload/renewal/`+appID} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Proceed</Link>
            </div>
        </div>
    )
}


export default Review;