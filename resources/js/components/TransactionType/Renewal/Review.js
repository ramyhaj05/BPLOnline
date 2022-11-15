import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import LoadingScreen from "../../Layout/loadingScreen";

const Review = () =>{
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    const [appDetails, setAppDetails] = useState([]);
    const [disclaimer, setDisclaimer] = useState(1);
    const [appID, setAppID] = useState()
    const {id} = useParams();
    const user_id = localStorage.getItem('auth_id');
    
    useEffect(()=>{
        getApplicationDetails(id)
    },[Review])

    function getApplicationDetails(id){
        setDisclaimer(1)
        axios.get('/api/get/renewal/details',{params:{id: id, user_id:user_id}}).then(function(response){
            setAppDetails(response.data.result);
            const key = response.data.result.map((det)=>{
                setAppID(det.id)
            })
        }).then(()=>{
            setDisclaimer(0)
        })
    }
    return(
        <div className="w-full md:p-5 p-2 bg-white rounded shadow">
            {disclaimer === 1 ? <LoadingScreen/> : ""}
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
                <Link to={`/edit/renewal/`+id} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Edit</Link>
                <Link to={`/upload/renewal/`+appID} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Proceed</Link>
            </div>
        </div>
    )
}


export default Review;