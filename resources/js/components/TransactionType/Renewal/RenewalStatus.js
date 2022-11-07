import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../Layout/loadingScreen";

const RenewalStatus = () =>{
    const [disclaimer, setDisclaimer] = useState(1);
    const {id} = useParams;
    const current_year = new Date().getFullYear();
    useEffect(()=>{
        setDisclaimer(0)
    })
    return(
        <div className="container w-full">
            {disclaimer === "1" ? <LoadingScreen/> : ""}
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-white bg-cloudygrey">Application Status</div>
                        <div className="card-body">
                            <div className="flex flex-col">
                                <span>Status:</span>
                                <span className="">Account Number:</span>
                                <div className="pl-3 flex flex-col text-gray-300">
                                    <span className="font-bold">Account Details</span>
                                    <span>Business Name</span>
                                    <span>Business Address</span>
                                    <span>Owners Name</span>
                                    <span>Owners Address</span>
                                    <span>Last Renewal:</span>
                                </div>
                                <span className="">Notarized Gross:</span>
                                <div className="">
                                    
                                    {/* // Files/Year/01-xxx-xx */}
                                    <iframe src="/Files/2022/0111/brgy.pdf" className="w-1/2" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenewalStatus