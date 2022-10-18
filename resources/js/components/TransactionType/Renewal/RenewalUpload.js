import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FaCheckSquare, FaTimes } from 'react-icons/fa';
const RenewalUpload = () =>{
    const {id} = useParams();
    const [disclaimer, setDisclaimer] = useState(1);
    const [gross, setGross] = useState(null);
    const [appDet, setAppDet] = useState([]);
    const current_year = new Date().getFullYear();
    useEffect(()=>{
        setDisclaimer(0);
    },[])
    
    function handleFile(e){
        let selectedFile = e.target.files[0];
        e.target.name === "gross" ? setGross(selectedFile) : "";
    }
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">List of Requirements - Renewal</div>
                        <div className="card-body">
                            {disclaimer === 1 ?<div className="fixed z-100 left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-black/50 bg-opacity-1">
                                <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                                    <ScaleLoader
                                    color="#36d7b7"
                                    margin={10}
                                    />
                                </div>
                            </div> : ""}
                            {
                                <form className="pl-5 pt-3" key={det.id} encType="multipart/form-data">
                                    <input type="hidden" name="account_number" value={det.account_number}/>
                                    <input type="hidden" name="year" value={current_year}/>
                                    <div className="font-xl font-black">Gross Income of {current_year-1}</div>
                                    <input type="file" name="gross" id="gross" onChange={handleFile} accept="application/pdf,application" className="text-transparent p-2" required/>
                                    {gross ? 
                                    <div className="flex flex-row p-1">
                                        <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                        <span className="pl-2 font-bold text-green-500">{gross.name}</span>
                                    </div> : 
                                    <div className="flex flex-row">
                                        <FaTimes className="text-red-500 text-lg"></FaTimes>
                                        <span className="pl-3 font-bold text-red-500">No File/s Selected.(REQUIRED)</span>
                                    </div>}
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