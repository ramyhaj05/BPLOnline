import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Uploading = () =>{
    const {id} = useParams();
    const [appDet, setAppDet] = useState([]);
    const [type, setType] = useState(null);
    const [brgy, setBrgy] = useState(null);
    const [leasing, setLeasing] = useState(null);
    const [franchise, setFranchise] = useState(null);
    const [insurance, setInsurance] = useState(null);
    // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt getAppDet
    useEffect(() => {
        getDet();
    }, [])
    
    function getDet(){
        axios.get("/api/get/appDetails/getdet",{params:{app_id:id}}).then(function(response){
            setAppDet(response.data);
            console.log(response.data);
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
    return(
        <div className="container w-full">
        <div className="row justify-content-center">
            <div className="w-full">
                <div className="card">
                    <div className="card-header text-lg font-semibold text-gray-700">List of Requirements</div>

                    <div className="card-body">
                        <h1 className="text-red-500 font-black">Disclaimer: Please be advised that we only accept PDF Format file/s or else the application will be invalid.</h1>
                        {appDet.map((det)=>{
                            return(
                                <form className="pl-5" key={det.id}>
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
                                    <input type="file" name="type" id="type" onChange={handleFile} accept="application/pdf,application/vnd.ms-excel" className="pl-5"/>
                                    <hr></hr>
                                    <div className="font-xl font-black">Barangay Clearance</div>
                                    <input type="file" name="brgy" id="brgy" onChange={handleFile} accept="application/pdf,application/vnd.ms-excel" className="pl-5"/>
                                    <hr></hr>
                                    {det.leasing === "2" ? 
                                    <div className="font-xl font-black">Tax Declaration</div> : 
                                    <div className="font-xl font-black">Contract of Lease</div>}
                                    <input type="file" name="leasing" id="leasing" onChange={handleFile} accept="application/pdf,application/vnd.ms-excel" className="pl-5"/>
                                    <hr></hr>
                                    <div className="font-xl font-black">CGL Insurance</div>
                                    <input type="file" name="insurance" id="insurance" onChange={handleFile} accept="application/pdf,application/vnd.ms-excel" className="pl-5"/>
                                    <hr></hr>
                                    {det.franchise === "1" ? 
                                    <>
                                        <div className="font-xl font-black">Franchise</div> 
                                        <input type="file" name="franchise" id="franchise" onChange={handleFile} accept="application/pdf,application/vnd.ms-excel" className="pl-5"/>
                                    </>
                                    : ""}
                                    <hr></hr>
                                    <div className="font-xl font-black">Business Cedula/Corporate Cedula</div>
                                    <hr></hr>
                                    {type ? type.name : ""}<br></br>
                                    {brgy ? brgy.name :""}<br></br>
                                    {franchise ? franchise.name :""}<br></br>
                                    {leasing ? leasing.name :""}<br></br>
                                    {insurance ? insurance.name :""}<br></br>
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