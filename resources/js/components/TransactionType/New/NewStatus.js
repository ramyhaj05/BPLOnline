import React,{useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingScreen from "../../Layout/loadingScreen";
import {BsClockHistory} from 'react-icons/bs';
import {FaCheckCircle, FaTimes, FaFileExcel } from 'react-icons/fa';
import { MdOutlineIncompleteCircle } from 'react-icons/md';
const NewStatus = () =>{
    const navigate = useNavigate();
    const [disclaimer, setDisclaimer] = useState(1);
    const {id} = useParams();
    const current_year = new Date().getFullYear();
    const user_id = localStorage.getItem('auth_id');
    const [appDetails, setAppDetails] = useState([]);
    const iFrameClass = "w-full md:w-3/4 p-2 text-center bg-gray-100 mt-4 flex flex-col text-gray-400 text-xl h-96";
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];

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
    useEffect(()=>{
        getApplicationDetails();
    },[NewStatus])

    function getApplicationDetails(){
        axios.get('/api/get/appDetails/details',{params:{appID: id, user_id: user_id}}).then(function(response){
            if(response.data.status === 'success'){
                setAppDetails(response.data.result);
            }
            else{
                alert(response.data.message);
            }
        }).then(()=>{
            setDisclaimer(1);
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
                        <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={()=>{navigate('/dashboard')}}>Back</div>
                            {appDetails.map((res)=>{
                                    const filesDirectory = "/Files/"+current_year+"/new/"+res.id+user_id;
                                return (
                                    <div className="w-full flex flex-col font-bold" key={res.id}>
                                        <span className="w-full pb-1 flex justify-center block">
                                            {res.status === "0" ? <MdOutlineIncompleteCircle className="text-7xl text-gray-500 animate-pulse"/> : ""}
                                            {res.status === "1" ? <FaFileExcel className="text-7xl text-orange-500 animate-pulse"/> : ""}
                                            {res.status === "2" ? <FaCheckCircle className="text-7xl text-green-500 animate-pulse"/> : ""}
                                            {res.status === "3" ? <FaTimes className="text-7xl text-rose-500 animate-pulse"/> : ""}
                                        </span>
                                        <span className={"w-full text-center font-bold text-3xl " + iconColor(res.status)}>
                                            {res.status === "0" ? "Incomplete" : ""}
                                            {res.status === "1" ? "For Verification" : ""}
                                            {res.status === "2" ? "Verified" : ""}
                                            {res.status === "3" ? "Cancelled" : ""}
                                        </span>

                                        <span className="">Business Type: {type[res.business_type-1]}</span>
                                        <span className="">Business Name: {res.business_name}</span>
                                        <div className="pl-3 flex flex-col text-gray-400">
                                            <span className="">{res.business_address}</span>
                                            <span>Owners Name: {res.owners_name}</span>
                                            <span>Owners Address: {res.owners_address}</span>
                                            <span>Contact: {res.contact}</span>
                                            <span>Email: {res.email}</span>
                                            {res.leasing === "1" ? <span>Leasing: Yes </span>: ""}
                                            {res.franchise === "1" ? <span>Franchise: Yes </span>: ""}
                                        </div>
                                        <span className="">Capital Investment: {res.capital_investment}</span>

                                        <div className={iFrameClass}>
                                            {res.business_type === "1" || res.business_type === "3" || res.business_type === "4" || res.business_type === "5" ? 
                                            <span>Security and Exchange Commision Registration (SEC)</span> : ""}
                                            {res.business_type === "2" ? 
                                            <span>Cooperative Development Authority Registration (CDA)</span> : ""}
                                            {res.business_type === "6" ? 
                                            <span>PEZA Registration</span> : ""}
                                            {res.business_type === "7" ? 
                                            <span>DTI Registration</span> : ""}
                                            {res.business_type === "8" ? 
                                            <span>DTI Registration/SEC Registration</span> : ""}          
                                            <iframe src={filesDirectory+"/DTI-SEC.pdf"} className="w-full h-full" alt="" />                             
                                        </div>
                                        {res.franchise === "1" ? <div className={iFrameClass}>
                                            <span>Franchise Agreement</span>
                                            <iframe src={filesDirectory+"/Franchise.pdf"} className="w-full h-full" alt="" />                                      
                                        </div> : ""}

                                        <div className={iFrameClass}>
                                            <span>{res.leasing === "1" ? "Contract of Lease" : "Tax Declaration"}</span>
                                            <iframe src={filesDirectory+"/CLease-TaxDec.pdf"} className="w-full h-full" alt="" />                                      
                                        </div>
                                        
                                        <div className={iFrameClass}>
                                            <span>Barangay Business Clearance</span>
                                            {res.brgyClearance === "1" ? <iframe src={filesDirectory+"/brgy.pdf"} className="w-full h-full"/> : <span className="text-red-500 italic font-bold text-xs">No Barangay Clearance Submitted.</span> }                          
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

export default NewStatus