import React,{useState} from "react";
import NewForm from "./NewForm";
import Review from "./Review";
import {Link} from 'react-router-dom';
import LoadingScreen from "../../Layout/loadingScreen";
const NewBusiness = () =>{
    const [bType, setBType] = useState(0);
    const [franchise, setFranchise] = useState(0);
    const [leasing, setLeasing] = useState(0);
    const [review, setReview] = useState(0);
    const [disclaimer, setDisclaimer] = useState(1);
    const [appID, setAppID] = useState("");
    const [newData, setNewData] = useState([
        {
            businesname: "",
            businessaddress: "",
            barangay: "",
            capital: "",
            description: "",
            owners_name: "",
            owners_address: "",
            contact: "",
            email: ""
        }
    ]);
    return(
        <div className="w-full md:p-5 p-1">
            {disclaimer === "1" ? <LoadingScreen/> : ""}
            <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-gray-500">APPLICATION FOR NEW BUSINESS PERMIT</div>
            <div className="card bg-white">
                <div className="card-header  text-lg font-semibold  text-white  bg-cloudygrey">APPLICATION FOR NEW BUSINESS</div>
                <div className="p-2 md:p-3 flex flex-col w-full ">
                    {bType === 0 ? <BusinessType setBType={setBType} /> : ""}
                    
                    {franchise === 0 && bType !== 0 ? <Franchise setFranchise={setFranchise} setBType={setBType}/> : ""}
                    
                    {leasing === 0 && bType !== 0 && franchise !== 0 ? <Leasing setFranchise={setFranchise} setBType={setBType} setLeasing={setLeasing}/> : ""}
                    
                    {bType !== 0 && franchise !== 0  && leasing !== 0 && review === 0 ? 
                    <NewForm setLeasing={setLeasing} setReview={setReview} 
                    setDisclaimer={setDisclaimer} disclaimer={disclaimer} 
                    setNewData={setNewData} newData={newData} franchise={franchise} leasing={leasing}
                    bType={bType}/> : ""}

                    {review === 1 ? <Review appID={appID} setAppID={setAppID}
                    setNewData={setNewData} newData={newData} 
                    disclaimer={disclaimer} setDisclaimer={setDisclaimer} review={review} /> : ""}
                </div>
            </div>
        </div>
    )
}

const BusinessType = ({setBType}) =>{
    const bTypeContainer = "w-1/2 md:w-1/4 p-3";
    const bTypeButton = "bg-gray-100 w-full rounded-sm text-center text-xl font-black py-3 border-4 border-white shadow-sm hover:cursor-pointer";
    return(
        <div className="w-full flex flex-col justify-content-center items-center">
            <span className="font-black tracking-widest text-xl">PLEASE SELECT BUSINESS TYPE:</span>
            <div className="w-full flex flex-wrap">
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(1)}}>Association</div>
                </div>
                
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(2)}}>Cooperative</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(3)}}>Corporation</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(4)}}>Foundation</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(5)}}>Partnership</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(6)}}>PEZA</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(7)}}>Single Proprietor</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setBType(8)}}>Tax Exempt</div>
                </div>
            </div>
                <div className="w-full flex flex-row justify-between p-1">
                    <Link to="/addNew" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</Link>
                </div>
        </div>
    )
}

const Franchise = ({setFranchise,setBType})=>{
    const bTypeContainer = "w-1/2 md:w-1/6 p-3";
    const bTypeButton = "bg-gray-100 w-full rounded-sm text-center text-xl font-black py-3 border-4 border-white shadow-sm hover:cursor-pointer";
    return(
        <div className="w-full flex flex-col justify-content-center items-center">
            <span className="font-black tracking-widest text-xl text-gray-500">FRANCHISING?</span>
            <div className="w-full flex flex-wrap justify-center">
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setFranchise(1)}}>Yes</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setFranchise(2)}}>No</div>
                </div>
            </div>
                <div className="w-full flex flex-row justify-between p-1">
                    <button onClick={(e)=>{setBType(0);setFranchise(0)}} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</button>
                </div>
        </div>
    )
}

const Leasing = ({setFranchise, setLeasing}) =>{
    const bTypeContainer = "w-1/2 md:w-1/6 p-3";
    const bTypeButton = "bg-gray-100 w-full rounded-sm text-center text-xl font-black py-3 border-4 border-white shadow-sm hover:cursor-pointer";
    return(
        <div className="w-full flex flex-col justify-content-center items-center">
            <span className="font-black tracking-widest text-xl text-gray-500">Leasing?</span>
            <div className="w-full flex flex-wrap justify-center">
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setLeasing(1)}}>Yes</div>
                </div>
                <div className={bTypeContainer}>
                    <div className={bTypeButton} onClick={(e)=>{setLeasing(2)}}>No</div>
                </div>
            </div>
                <div className="w-full flex flex-row justify-between p-1">
                <button onClick={(e)=>{setFranchise(0)}} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</button>

                </div>
        </div>
    )
}

export default NewBusiness