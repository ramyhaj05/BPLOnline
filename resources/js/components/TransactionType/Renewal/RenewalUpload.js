import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { FaCheckSquare, FaTimes } from 'react-icons/fa';
import LoadingScreen from "../../Layout/loadingScreen";
import SuccessTransaction from "../../Layout/SuccessTransaction";
const RenewalUpload = () =>{
    const {id} = useParams();
    const [disclaimer, setDisclaimer] = useState(1);
    const current_year = new Date().getFullYear();
    const user_id = localStorage.getItem('auth_id');
    const [saveSuccess, setSaveSuccess] = useState(0)
    const [appDetails, setAppDetails] = useState([]);
    const [referenceID, setReferenceID] = useState("")
    // docs to submit
    const [gross, setGross] = useState(null);
    const [itr, setItr] = useState(null);
    const [brgy, setBrgy] = useState(null);
    const [insurance, setInsurance] = useState(null)
    useEffect(()=>{
        id.length === 1 ? setReferenceID("02"+current_year+"000"+id) : "";
        id.length === 2 ? setReferenceID("02"+current_year+"00"+id) : "";
        id.length === 3 ? setReferenceID("02"+current_year+"0"+id) : "";
        id.length === 4 ? setReferenceID("02"+current_year+id) : "";
        setDisclaimer(0)
    },[RenewalUpload])
    
    function handleFile(e){
        let selectedFile = e.target.files[0];
        e.target.name === "gross" ? setGross(selectedFile) : "";
        e.target.name === "ITR" ? setItr(selectedFile) : "";
        e.target.name === "brgy" ? setBrgy(selectedFile) : "";
        e.target.name === "insurance" ? setInsurance(selectedFile) : "";
    }
    const uploadRenewal = async (event) => {
        event.preventDefault();
        let year = new Date().getFullYear()
        const data = new FormData();
        data.append('gross_income', gross);
        data.append('itr', itr);
        data.append('brgy', brgy);
        data.append('insurance', insurance);

        data.append('appID', id);
        data.append('year', year);
        data.append('trans_id', referenceID);
        data.append('user_id', user_id);
        setDisclaimer(1);
        try {
            const response = await axios({
            method: "post",
            url: "/api/upload/requirements/renewal",
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
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-white bg-cloudygrey">List of Requirements - Renewal</div>
                        <div className="card-body">
                            {saveSuccess === 1 ? <SuccessTransaction referenceID={referenceID}/> : ""}
                            {disclaimer === 1 ? <LoadingScreen/> : ""}
                            <div className="w-full text-center">
                                <h1 className="text-red-500 font-black text-md">Disclaimer: Please be advised that we only accept PDF Format file/s or else the application will be invalid.</h1>
                                <h1 className="text-red-500 font-black text-xs">MAXIMUM FILES SIZE - 12MB</h1>
                            </div>
                            {
                                <form className="pl-5 pt-3" encType="multipart/form-data" onSubmit={uploadRenewal}>
                                    <input type="hidden" name="year" value={current_year}/>
                                    {/* Notarized Gross */}
                                    <div className="font-xl font-black pt-3">Notarized Gross Income of {current_year-1}</div>
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
                                    <input type="file" name="ITR" id="ITR" onChange={handleFile} accept="application/pdf,application" className="text-transparent"/>
                                    {itr ? 
                                    <div className="flex flex-row p-1">
                                        <FaCheckSquare className="text-green-500 text-lg"></FaCheckSquare>
                                        <span className="pl-2 font-bold text-green-500">{itr.name}</span>
                                    </div> : 
                                    <div className="flex flex-row">
                                        <FaTimes className="text-red-500 text-lg"></FaTimes>
                                        <span className="pl-3 font-bold text-red-500">No File/s Selected.</span>
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
                                        <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center transition hover:scale-105">Upload</button>
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