import React,{useEffect,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingScreen from "../../Layout/loadingScreen";
import {FaCheckCircle, FaTimes, FaFileExcel } from 'react-icons/fa';
import { MdOutlineIncompleteCircle } from 'react-icons/md';

const RenewalStatus = () =>{
    const navigate = useNavigate();
    const [disclaimer, setDisclaimer] = useState(1);
    const [appDetails, setAppDetails] = useState([]);
    const {id} = useParams();
    const current_year = new Date().getFullYear();
    const user_id = localStorage.getItem('auth_id');
    const iFrameClass = "w-full md:w-3/4 p-2 text-center bg-gray-300 rounded mt-4 flex flex-col text-gray-500 text-xl h-96";
    const [directoryID, setdirectoryID] = useState()
    useEffect(()=>{
        id.length === 1 ? setdirectoryID("000"+id) : "";
        id.length === 2 ? setdirectoryID("00"+id) : "";
        id.length === 3 ? setdirectoryID("0"+id) : "";
        id.length === 4 ? setdirectoryID(id) : "";
        getApplicationDetails()
    },[RenewalStatus])
    const iconColor = (x) =>{
        if(x === "0"){
            return "text-gray-500"
        }
        else if(x === "1"){
            return "text-orange-500"
        }
        else if(x === "2"){
            return "text-green-500"
        }
        else if(x === "3"){
            return "text-rose-500"
        }
    }
    function getApplicationDetails(){
        setDisclaimer(1)
        axios.get('/api/get/renewal/details',{params:{id: id, user_id:user_id}}).then(function(response){
            setAppDetails(response.data.result);
        }).then(()=>{
            setDisclaimer(0)
        })
    }
    return(
        <div className="container w-full">
            {disclaimer === "1" ? <LoadingScreen/> : ""}
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-white bg-cloudygrey">Application Status</div>
                        <div className="card-body">
                        <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center transition hover:scale-105" onClick={()=>{navigate('/dashboard')}}>Back</div>
                            {appDetails.map((res)=>{
                                const filesDirectory = "/Files/"+current_year+"/renewal/"+directoryID+"-"+current_year;
                                return (
                                    <div className="w-full flex flex-col font-bold bg-gray-100 rounded mt-3 p-3" key={res.id}>
                                        <span className="w-full pb-1 flex justify-center block">
                                            {res.status === "0" ? <MdOutlineIncompleteCircle className="text-7xl text-gray-500 animate-pulse"/> : ""}
                                            {res.status === "1" ? <FaFileExcel className="text-7xl text-orange-500 animate-pulse"/> : ""}
                                            {res.status === "2" ? <FaCheckCircle className="text-7xl text-green-500 animate-pulse"/> : ""}
                                            {res.status === "3" ? <FaTimes className="text-7xl text-rose-500 animate-pulse"/> : ""}
                                        </span>
                                        <span className={"w-full text-center font-bold text-3xl " + iconColor(res.status)}>
                                            {res.status === "0" ? <><span>Incomplete</span><br></br><span className="text-sm italic text-red-500 font-normal">(Please upload necessary document(s).)</span></> : ""}
                                            {res.status === "1" ? <><span>For Verification</span><br></br><span className="text-sm italic text-red-500 font-normal">(Please wait for 24hrs-48hrs to be verified.)</span></> : ""}
                                            {res.status === "2" ? <><span>Verified</span><br></br><span className="text-sm italic font-normal">(Please check your e-mail ({res.email}) for further instructions.)</span></> : ""}
                                            {res.status === "3" ? "Cancelled" : ""}
                                        </span>

                                        <span className="">Account Number: {res.account_number}</span>
                                        <span className="">Account Details</span>
                                        <div className="pl-3 flex flex-col text-gray-400">
                                            <span>Business Name: </span>
                                            <span>Business Address: </span>
                                            <span className="pt-3">Owners Name: </span>
                                            <span>Owners Address: </span>
                                            <span>Contact: {res.contact}</span>
                                            <span>Email: {res.email}</span>
                                        </div>
                                        <span className="">Notatized Gross: {res.gross_income}</span>

                                        <div className={iFrameClass}>
                                            <span>Notarized Gross Income of {current_year}</span>
                                            <iframe src={filesDirectory+"/Gross.pdf"} className="w-full h-full" alt="" />                                      
                                        </div>
                                        
                                        <div className={iFrameClass}>
                                            <span>Barangay Business Clearance</span>
                                            {res.brgy === "1" ? <iframe src={filesDirectory+"/brgy.pdf"} className="w-full h-full"/> : <span className="text-red-500 italic font-bold text-xs">No Barangay Clearance Submitted.</span> }                          
                                        </div>

                                        <div className={iFrameClass}>
                                            <span>Annual Income Tax Return ({current_year})</span>
                                            {res.itr === "1" ? <iframe src={filesDirectory+"/ITR.pdf"} className="w-full h-full"/> : <span className="text-red-500 italic font-bold text-xs">No Barangay Clearance Submitted.</span> }                          
                                        </div>

                                        <div className={iFrameClass}>
                                            <span>CGL Insurance</span>
                                            <iframe src={filesDirectory+"/insurance.pdf"} className="w-full h-full" alt="" />                                      
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenewalStatus