import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
const RenewalUpload = () =>{
    const {id} = useParams();
    const [disclaimer, setDisclaimer] = useState(1);
    const current_year = new Date().getFullYear();
    useEffect(()=>{
        setDisclaimer(0);
    },[])
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
                            <form className="pl-5 pt-3" key={det.id} encType="multipart/form-data" onSubmit={uploadReqs}>
                                <input type="hidden" name="account_number" value={det.id}/>
                                <input type="hidden" name="year" value={current_year}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenewalUpload;