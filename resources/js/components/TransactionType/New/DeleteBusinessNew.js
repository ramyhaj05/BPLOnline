import axios from "axios";
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import LoadingScreen from "../../Layout/loadingScreen";

const DeleteBusinessNew = () =>{
    const {id} = useParams();
    const [disclaimer, setDisclaimer] = useState(0)
    const [deleteConfirm, setDeleteConfirm] = useState(0)
    const [newData, setNewData] = useState([{id: "",businesname: "", business_address: "",barangay: "",type: "",franchise: "",leasing: "",capital: "",description: "", owners_name: "",owners_address: "",contact: "",email: ""}]);
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    const [deletePopUp, setDeletePopUp] = useState(0)
    const [confirmed, setConfirmed] = useState("")
    const user_id = localStorage.getItem('auth_id');
    useEffect(()=>{
        getData();
    },[])
    const getData = () =>{
        setDisclaimer(1);
        axios.get("/api/get/appDetails/getdet",{params:{app_id:id, user_id:user_id}}).then(function(response){
            const keys = response.data.result.map((key)=>{
                setNewData({...newData, id: key.id, businessname: key.business_name, business_address: key.business_address,
                    type: key.business_type, barangay: key.barangay, franchise: key.franchise, leasing: key.leasing, 
                    capital: key.capital_investment, description: key.description, owners_name: key.owners_name, owners_address: key.owners_address,
                    contact: key.contact, email: key.email
                });
            })
            setDisclaimer(0);
        });
    }

    const deleteNewApp = async event  =>{
        // event.preventDefault();
        if(confirmed == "CONFIRM"){
            setDisclaimer(1);
            const deleteBusiness = await axios.post("/api/delete/business/",{app_id:id, user_id:user_id}).then(()=>{
                setDisclaimer(0);
                setDeletePopUp(0)
            }).then(()=>{
                setDeleteConfirm(1)
            })
        }
        else{
            alert("Invalid Confirmation")
        }

    }

    const confirmDelete = event=>{
        event.preventDefault();
        setDeletePopUp(1);
    }
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">Cancel Application</div>
                        <div className="card-body">
                            {deletePopUp === 1 ? <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
                                <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-rose-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                                    <span className="font-bold text-xl text-rose-500 p-3">Transaction Successfully Deleted!</span>
                                    <span className="text-rose-500">Please take note that this action cannot be undo.</span>
                                    <span>Type "CONFIRM" to continue deleting</span>
                                    <span className="font-black text-2xl text-gray-400 p-3"><input type="text" name="confirmed" id="confirmed" className="bg-gray-200" onChange={(e)=>{setConfirmed(e.target.value)}}/></span>
                                    <div onClick={deleteNewApp} className="p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-rose-500">Confirm</div>
                                </div>
                            </div> : ""}
                            {deleteConfirm === 1 ? <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
                                <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-rose-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                                    <span className="font-bold text-xl text-rose-500 p-3">Transaction Successfully Deleted!</span>
                                    
                                    <span className="font-black text-2xl text-gray-400 p-3"></span>
                                    <Link to="/dashboard" className="p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-rose-500">Done</Link>
                                </div>
                            </div> : ""}
                            <span className="text-rose-400">This action will cancel your application and this can't be undo.</span>
                            <form className="w-full flex flex-wrap flex-col md:flex-row p-2" onSubmit={confirmDelete}>
                                {disclaimer === 1 ? <LoadingScreen/> : ""}
                                <div className="w-full md:w-1/2 p-2">
                                    {newData.franchise === 1 ? <div className={reviewDetails}>Business Type: <b className="capitalize">{type[newData.business_type-1]}</b></div> : ""}
                                    {/* <input type="hidden" name="id" onInput={setAppID(newData.id)} value={newData.id}/> */}
                                    <div className={reviewDetails}>Business Name: <span className="font-bold">{newData.businessname}</span></div>
                                    <div className={reviewDetails+" capitalized flex flex-col"}>Business Address:
                                        <div className="pl-6 font-bold capitalize">{newData.business_address}</div>
                                        <div className="pl-6 font-bold capitalize">{newData.barangay}</div>
                                    </div>
                                    <div className={reviewDetails}>Capital Investment: <b>{newData.capital_investment}</b></div>
                                    <div className={reviewDetails}>Description: <b>{newData.description}</b></div>
                                    <div className={reviewDetails}>Email: <b>{newData.email}</b></div>

                                </div>
                                <div className="w-full md:w-1/2 p-2">
                                    {newData.franchise === "1" ? <div className={reviewDetails}>Franchise: <b>Yes</b></div> : ""}
                                    {newData.leasing === "1" ? <div className={reviewDetails}>Leasing: <b>Yes</b></div> : ""}
                                    <div className={reviewDetails+" flex flex-col"}>
                                        <span>Owner's/Company Name:</span> 
                                        <div className="pl-6 font-bold capitalize">{newData.owners_name}</div>
                                    </div>
                                    <div className={reviewDetails}><span>Owner's/Company Address:</span> 
                                        <div className="pl-6 font-bold capitalize">{newData.owners_address}</div>
                                    </div>
                                    <div className={reviewDetails}>Contact #: <b>{newData.contact}</b></div>
                                </div>
                                <div className="w-full flex flex-row justify-content-between">
                                    <Link  to="/dashboard" className="p-1 px-2 bg-white border-2 tracking-widest border-gray-400 shadow-lg rounded-md text-gray-500 font-black">Back</Link>
                                    <button className="p-1 px-2 bg-white border-2 border-rose-400 tracking-widest  shadow-md rounded-md text-rose-500 font-black">Cancel Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBusinessNew;