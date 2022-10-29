import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { FaCheckSquare, FaTimes } from 'react-icons/fa';
import LoadingScreen from "../../Layout/loadingScreen";
const RenewalUpload = () =>{
    const {id} = useParams();
    const [disclaimer, setDisclaimer] = useState(1);
    const current_year = new Date().getFullYear();
    const user_id = localStorage.getItem('auth_id');
    const [appDetails, setAppDetails] = useState([]);
    // docs to submit
    const [gross, setGross] = useState(null);
    const [itr, setItr] = useState(null);
    const [brgy, setBrgy] = useState(null);
    const [insurance, setInsurance] = useState(null)
    useEffect(()=>{
        setDisclaimer(0);
    },[RenewalUpload])
    
    function handleFile(e){
        let selectedFile = e.target.files[0];
        e.target.name === "gross" ? setGross(selectedFile) : "";
        e.target.name === "ITR" ? setItr(selectedFile) : "";
        e.target.name === "brgy" ? setBrgy(selectedFile) : "";
        e.target.name === "insurance" ? setInsurance(selectedFile) : "";
    }

    const uploadRenewal = event =>{
        event.preventDefault();
        alert("di pa tapos")
    }

    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">List of Requirements - Renewal</div>
                        <div className="card-body">
                            {disclaimer === 1 ? <LoadingScreen/> : ""}
                            {
                                <form className="pl-5 pt-3" encType="multipart/form-data" onSubmit={uploadRenewal}>
                                    <input type="hidden" name="year" value={current_year}/>
                                    {/* Notarized Gross */}
                                    <div className="font-xl font-black pt-3">Gross Income of {current_year-1}</div>
                                    <input type="file" name="gross" id="gross" onChange={handleFile} accept="application/pdf,application" className="text-transparent" required/>
                                    {gross ? 
                                    <div className="flex flex-row p-1">
                                        <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                        <span className="pl-2 font-bold text-green-500">{gross.name}</span>
                                    </div> : 
                                    <div className="flex flex-row">
                                        <FaTimes className="text-red-500 text-lg"></FaTimes>
                                        <span className="pl-3 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                    </div>}
                                    {/* ITR of Previous Year */}
                                    <div className="font-xl font-black pt-3">Annual Tax Return of {current_year-1}</div>
                                    <input type="file" name="ITR" id="ITR" onChange={handleFile} accept="application/pdf,application" className="text-transparent" required/>
                                    {itr ? 
                                    <div className="flex flex-row p-1">
                                        <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                        <span className="pl-2 font-bold text-green-500">{itr.name}</span>
                                    </div> : 
                                    <div className="flex flex-row">
                                        <FaTimes className="text-red-500 text-lg"></FaTimes>
                                        <span className="pl-3 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                    </div>}
                                    {/* Barangay Clearance */}
                                    <div className="font-xl font-black pt-3">Business Barangay Clearance({current_year})</div>
                                    <input type="file" name="brgy" id="brgy" onChange={handleFile} accept="application/pdf,application" className="text-transparent"/>
                                    {brgy ? 
                                    <div className="flex flex-row p-1">
                                        <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                        <span className="pl-2 font-bold text-green-500">{brgy.name}</span>
                                    </div> : 
                                    <div className="flex flex-row">
                                        <FaTimes className="text-red-500 text-lg"></FaTimes>
                                        <span className="pl-3 font-bold text-red-500">No File/s Selected.</span>
                                    </div>}
                                    {/* Insurance */}
                                    <div className="font-xl font-black pt-3">CGL Insurance</div>
                                    <input type="file" name="insurance" id="insurance" onChange={handleFile} accept="application/pdf,application" className="text-transparent" required/>
                                    {insurance ? 
                                    <div className="flex flex-row p-1">
                                        <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                        <span className="pl-2 font-bold text-green-500">{insurance.name}</span>
                                    </div> : 
                                    <div className="flex flex-row">
                                        <FaTimes className="text-red-500 text-lg"></FaTimes>
                                        <span className="pl-3 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                    </div>}
                                    
                                        
                                    <div className="w-full flex flex-row justify-end p-1">
                                        <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Upload</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenewalUpload;