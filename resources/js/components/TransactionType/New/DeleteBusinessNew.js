import axios from "axios";
import React,{useState, useEffect} from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";


const DeleteBusinessNew = () =>{
    const {id} = useParams();
    const [disclaimer, setDisclaimer] = useState(0)
    const [newData, setNewData] = useState([{id: "",businesname: "", business_address: "",barangay: "",type: "",franchise: "",leasing: "",capital: "",description: "", owners_name: "",owners_address: "",contact: "",email: ""}]);
    const type = ["Association", "Cooperative", "Corporation", "Foundation", "Partnership", "PEZA", "Single Proprietor", "Tax Exempt"];
    const reviewDetails = "text-gray-600 text-lg tracking-widest";
    useEffect(()=>{
        getData();
    },[])
    const getData = () =>{
        setDisclaimer(1);
        axios.get("/api/get/appDetails/getdet",{params:{app_id:id}}).then(function(response){
            const keys = response.data.map((key)=>{
                setNewData({...newData, id: key.id, businessname: key.business_name, business_address: key.business_address,
                    type: key.business_type, barangay: key.barangay, franchise: key.franchise, leasing: key.leasing, 
                    capital: key.capital_investment, description: key.description, owners_name: key.owners_name, owners_address: key.owners_address,
                    contact: key.contact, email: key.email
                });
            })
            setDisclaimer(0);
        });
    }

    const deleteNewApp = event =>{
        event.preventDefault();
        alert("DELTE!");
    }
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">Cancel Application</div>
                        <div className="card-body">
                            <form className="w-full flex flex-wrap flex-col md:flex-row p-2" onSubmit={deleteNewApp}>
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
                                    <button className="p-1 px-2 bg-white border-2 border-rose-400 tracking-widest  shadow-md rounded-md text-rose-500 font-black">Cancel</button>
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