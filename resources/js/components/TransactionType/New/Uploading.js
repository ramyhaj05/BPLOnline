import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheckSquare, FaTimes } from 'react-icons/fa';
import LoadingScreen from "../../Layout/loadingScreen";
import {useNavigate, Link} from 'react-router-dom';
import SuccessTransaction from "../../Layout/SuccessTransaction";

const Uploading = () =>{
    const navigate = useNavigate();
    const {id} = useParams();
    const user_id = localStorage.getItem('auth_id');
    const currentYear = new Date().getFullYear()
    const [appDet, setAppDet] = useState([]);
    const [type, setType] = useState(null);
    const [brgy, setBrgy] = useState(null);
    const [leasing, setLeasing] = useState(null);
    const [franchise, setFranchise] = useState(null);
    const [insurance, setInsurance] = useState(null);
    // const [cedula, setCedula] = useState(null);
    const [referenceID, setreferenceID] = useState();
    const [disclaimer, setDisclaimer] = useState(1);
    const [saveSuccess, setSaveSuccess] = useState(0)
    const inputFile = "bg-white p-1 rounded-md font-bold text-gray-700 border-2 border-gray-500 tracking-widest hover:cursor-pointer";
    // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt getAppDet
    useEffect(() => {
        getDet();
    }, [])


    
    function getDet(){
        id.length === 1 ? setreferenceID("01"+currentYear+"000"+id) : "";
        id.length === 2 ? setreferenceID("01"+currentYear+"00"+id) : "";
        id.length === 3 ? setreferenceID("01"+currentYear+"0"+id) : "";
        id.length === 4 ? setreferenceID("01"+currentYear+id) : "";
        axios.get("/api/get/appDetails/getdet",{params:{app_id:id, user_id:user_id}}).then(function(response){
            setAppDet(response.data.result);
        }).then(()=>{
            setDisclaimer(0)
        });
    }

    function handleFile(e){
        let selectedFile = e.target.files[0];
        e.target.name === "type" ? setType(selectedFile) : "";
        e.target.name === "brgy" ? setBrgy(selectedFile) : "";
        e.target.name === "leasing" ? setLeasing(selectedFile) : "";
        e.target.name === "insurance" ? setInsurance(selectedFile) : "";
        e.target.name === "franchise" ? setFranchise(selectedFile) : "";
    }

    const uploadReqs = async (event) => {
        event.preventDefault();
        let year = new Date().getFullYear()
        const data = new FormData();
        data.append('type', type);
        data.append('brgy', brgy);
        data.append('leasing', leasing);
        data.append('insurance', insurance);
        franchise ? data.append('franchise', franchise) : "";
        data.append('appID', id);
        data.append('year', year);
        data.append('trans_id', referenceID);
        data.append('user_id', user_id);
        setDisclaimer(1);
        try {
            const response = await axios({
            method: "post",
            url: "/api/upload/requirements/new",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
            }).then((response)=>{
                setTimeout(() => {
                    setDisclaimer(0);
                    setSaveSuccess(1);
                }, 1000);
            });
        } catch(error) {
            alert(error);
            console.log(error)
        }
    }
    
    return(
        <div className="container w-full md:p-5 p-1">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-white bg-cloudygrey">List of Requirements - New</div>
                        <div className="card-body">
                            {saveSuccess === 1 ? <SuccessTransaction referenceID={referenceID}/> : ""}
                        {disclaimer === 1 ? <LoadingScreen/> : ""}
                            <h1 className="text-red-500 font-black text-md">Disclaimer: Please be advised that we only accept PDF Format file/s or else the application will be invalid.</h1>
                            <h1 className="text-red-500 font-black text-xs">MAXIMUM FILES SIZE - 12MB</h1>
                            {appDet.map((det)=>{
                                let year = new Date().getFullYear()
                                return(
                                    <form className="pl-5 pt-3" key={det.id} encType="multipart/form-data" onSubmit={uploadReqs}>
                                        <input type="hidden" name="appID" value={det.id}/>
                                        <input type="hidden" name="year" value={year}/>
                                        {det.business_type === "1" || det.business_type === "3" || det.business_type === "4" || det.business_type === "5" ? 
                                        <div className="font-xl font-black">Security and Exchange Commision Registration (SEC)</div> : ""}
                                        {det.business_type === "2" ? 
                                        <div className="font-xl font-black">Cooperative Development Authority Registration (CDA)</div> : ""}
                                        {det.business_type === "6" ? 
                                        <div className="font-xl font-black">PEZA Registration</div> : ""}
                                        {det.business_type === "7" ? 
                                        <div className="font-xl font-black">DTI Registration</div> : ""}
                                        {det.business_type === "8" ? 
                                        <div className="font-xl font-black">DTI Registration/SEC Registration</div> : ""}
                                        <input type="file" name="type" id="type" onChange={handleFile} accept="application/pdf,application" className="text-transparent p-2" required/>
                                        {type ? 
                                            <div className="flex flex-row p-1">
                                                <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                                <span className="pl-2 font-bold text-green-500">{type.name}</span>
                                            </div> : 
                                            <div className="flex flex-row">
                                                <FaTimes className="text-red-500 text-lg"></FaTimes>
                                                <span className="pl-3 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                            </div>}
                                        
                                        <div className="font-xl font-black">Barangay Clearance</div>
                                        <input type="file" name="brgy" id="brgy" onChange={handleFile} accept="application/pdf,application" className="text-transparent p-2"/>
                                        {/* <div className="p-1 pl-5"><label htmlFor="brgy" className={inputFile}>Choose File</label></div> */}
                                        {brgy ? 
                                            <div className="flex flex-row p-1">
                                                <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                                <span className="pl-2 font-bold text-green-500">{brgy.name}</span>
                                            </div> : 
                                            <div className="flex flex-row">
                                                <FaTimes className="text-red-500 text-lg"></FaTimes>
                                                <span className="pl-2 font-bold text-red-500">No File/s Selected.</span>
                                            </div>}
                                        
                                        
                                        {det.leasing === "2" ? 
                                        <div className="font-xl font-black">Tax Declaration</div> : 
                                        <div className="font-xl font-black">Contract of Lease</div>}
                                        <input type="file" name="leasing" id="leasing" onChange={handleFile} accept="application/pdf,application" className="text-transparent p-2" required/>
                                        {/* <div className="p-1 pl-5"><label htmlFor="leasing" className={inputFile}>Choose File</label></div> */}
                                        {leasing ? 
                                            <div className="flex flex-row p-1">
                                                <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                                <span className="pl-2 font-bold text-green-500">{leasing.name}</span>
                                            </div> : 
                                            <div className="flex flex-row">
                                                <FaTimes className="text-red-500 text-lg"></FaTimes>
                                                <span className="pl-2 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                            </div>}
                                        
                                        <div className="font-xl font-black">CGL Insurance</div>
                                        <input type="file" name="insurance" id="insurance" onChange={handleFile} accept="application/pdf,application" className="text-transparent p-2" required/>
                                        {/* <div className="p-1 pl-5"><label htmlFor="insurance" className={inputFile}>Choose File</label></div> */}
                                        {insurance ? 
                                            <div className="flex flex-row p-1">
                                                <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                                <span className="pl-2 font-bold text-green-500">{insurance.name}</span>
                                            </div> : 
                                            <div className="flex flex-row">
                                                <FaTimes className="text-red-500 text-lg"></FaTimes>
                                                <span className="pl-2 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                            </div>}
                                        
                                        
                                        {det.franchise === "1" ? 
                                        <>
                                            <div className="font-xl font-black">Franchise</div> 
                                            <input type="file" name="franchise" id="franchise" onChange={handleFile} accept="application/pdf,application" className="text-transparent p-2" required={det.franchise === "1" ? true : false}/>
                                            {/* <div className="p-1 pl-5"><label htmlFor="franchise" className={inputFile}>Choose File</label></div> */}
                                            {franchise ? 
                                            <div className="flex flex-row p-1">
                                                <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                                <span className="pl-2 font-bold text-green-500">{franchise.name}</span>
                                            </div> : 
                                            <div className="flex flex-row">
                                                <FaTimes className="text-red-500 text-lg"></FaTimes>
                                                <span className="pl-2 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                            </div>}
                                        </>
                                        : ""}
                                        
                                        <div className="w-full flex flex-row justify-end p-1">
                                            <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center transition hover:scale-105">Upload</button>
                                        </div>
                                    </form>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uploading;