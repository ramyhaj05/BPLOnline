import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../Layout/loadingScreen";
const NewStatus = () =>{
    const [disclaimer, setDisclaimer] = useState(1);
    const {id} = useParams();
    const current_year = new Date().getFullYear();
    const user_id = localStorage.getItem('auth_id');
    const [appDetails, setAppDetails] = useState([]);
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];

    
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
                            {appDetails.map((res)=>{
                                    const filesDirectory = "/Files/"+current_year+"/new/"+res.id+user_id;
                                    const iFrameClass = "w-full md:w-3/4 p-2 text-center bg-gray-100 mt-4 flex flex-col";
                                return (
                                    <div className="w-full flex flex-col font-bold" key={res.id}>
                                        <span>Status: {res.status === "2" ? "Verified" : ""}</span>
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
                                            <iframe src={filesDirectory+"/DTI-SEC.pdf"} className="w-full" alt="" />                             
                                        </div>
                                        {res.franchise === "1" ? <div className={iFrameClass}>
                                            <span>Franchise Agreement</span>
                                            <iframe src={filesDirectory+"/Franchise.pdf"} className="w-full" alt="" />                                      
                                        </div> : ""}

                                        <div className={iFrameClass}>
                                            <span>{res.leasing === "1" ? "Contract of Lease" : "Tax Declaration"}</span>
                                            <iframe src={filesDirectory+"/CLease-TaxDec.pdf"} className="w-full" alt="" />                                      
                                        </div>
                                        
                                        <div className={iFrameClass}>
                                            <span>Barangay Business Clearance</span>
                                            {res.brgyClearance === "1" ? <iframe src={filesDirectory+"/brgy.pdf"} className="w-full"/> : <span className="text-red-500 italic font-bold text-xs">No Barangay Clearance Submitted.</span> }                          
                                        </div>

                                        <div className={iFrameClass}>
                                            <span>CGL Insurance</span>
                                            <iframe src={filesDirectory+"/insurance.pdf"} className="w-full" alt="" />                                      
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