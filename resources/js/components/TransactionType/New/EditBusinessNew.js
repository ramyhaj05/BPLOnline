import axios from "axios";
import React, {useState, useEffect}  from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const EditBusinessNew = () =>{
    const navigate = useNavigate();
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md";
    const {id} = useParams();
    const [appDet, setAppDet] = useState([])
    const [disclaimer, setDisclaimer] = useState(0);
    const [newData, setNewData] = useState([
        {
            id: "",
            businesname: "",
            type: "",
            franchise: "",
            leasing: "",
            capital: "",
            description: "",
            ownersname: "",
            contact: "",
            email: ""
        }
    ]);
    useEffect(()=>{
        getData();
    },[])
    const getData = () =>{
        setDisclaimer(1);
        axios.get("/api/get/appDetails/getdet",{params:{app_id:id}}).then(function(response){
            setAppDet(response.data);
            const keys = response.data.map((key)=>{
                setNewData({...newData, id: key.id, businessname: key.business_name, type: key.business_type, 
                    franchise: key.franchise, leasing: key.leasing, capital: key.capital_investment, 
                    description: key.description, ownersname: key.owner_name, contact: key.contact, email: key.email
                });
            })
            setDisclaimer(0);
        });
    }
    const saveEdit = async (event) =>{
        event.preventDefault();
        const editData = new FormData();
        editData.append('appID', newData.id);
        editData.append('businessname', newData.businessname);
        editData.append('type', newData.type);
        editData.append('leasing', newData.leasing);
        editData.append('franchise', newData.franchise);
        editData.append('capital', newData.capital);
        editData.append('description', newData.description);
        editData.append('ownersname', newData.ownersname);
        editData.append('contact', newData.contact);
        editData.append('email', newData.email);
        setDisclaimer(1)
        try {
            const response = await axios({
                method: "post",
                url: "/api/edit/business",
                data: editData,
                headers: { "Content-Type": "multipart/form-data" },
              }).then((response)=>{
                  setDisclaimer(0)
                navigate('/new-business/upload/'+newData.id);
              })
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
                        <div className="card-header text-lg font-semibold text-gray-700">Edit Application Information</div>
                        <div className="card-body">
                            <form method="post" className="w-full py-3 flex md:flex-col p-3 md:p-1" onSubmit={saveEdit}>
                            {disclaimer === 1 ?<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
                                <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                                    <ScaleLoader
                                    color="#36d7b7"
                                    margin={10}
                                    />
                                </div>
                            </div> : ""}
                                <div className="w-full flex md:flex-row flex-col flex-wrap" key={newData.id}>
                                    <div className="w-full md:w-1/2">
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Business Name</div>
                                            <input type="text" className={inputField} name="businessname" id="businessname" value={newData.businessname} onChange={(e)=>{setNewData({...newData, businessname: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Business Type</div>
                                            {/* // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt getAppDet */}
                                            <select name="type" id="type" value={newData.type} onChange={(e)=>{setNewData({...newData, type: e.target.value})}} className={inputField}>
                                                <option value="1">Association</option>
                                                <option value="2">Cooperative</option>
                                                <option value="3">Corporation</option>
                                                <option value="4">Foundation</option>
                                                <option value="5">Partnership</option>
                                                <option value="6">Peza</option>
                                                <option value="7">Single Proprietor</option>
                                                <option value="8">Tax Exempt</option>
                                            </select>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Leasing</div>
                                            {/* // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt getAppDet */}
                                            <select name="leasing" id="leasing" value={newData.leasing} onChange={(e)=>{setNewData({...newData, leasing: e.target.value})}} className={inputField}>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                            </select>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Franchise</div>
                                            {/* // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt getAppDet */}
                                            <select name="franchise" id="franchise" value={newData.franchise} onChange={(e)=>{setNewData({...newData, franchise: e.target.value})}} className={inputField}>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                            </select>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Capital Investment</div>
                                            <input type="number" className={inputField} name="capital" id="capital" value={newData.capital} onChange={(e)=>{setNewData({...newData, capital: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1">
                                            <div className={inputLabel}>Description</div>
                                            <textarea shape="square" coords="" href="" alt=""  name="description" className={inputField} value={newData.description} onChange={(e)=>{setNewData({...newData, description: e.target.value})}} required/>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Owners Name</div>
                                            <input type="text" className={inputField} name="ownersname" value={newData.ownersname} id="" onChange={(e)=>{setNewData({...newData, ownersname: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Contact</div>
                                            <input type="number" className={inputField} name="contact" value={newData.contact} id="" onChange={(e)=>{setNewData({...newData, contact: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>E-mail</div>
                                            <input type="email" className={inputField} name="email" value={newData.email} id="" onChange={(e)=>{setNewData({...newData, email: e.target.value})}} required/>
                                        </div>
                                    </div>
                                    <div className="w-full p-1 flex flex-row justify-between">
                                        <Link to="/home" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setLeasing(0)}}>Back</Link>
                                        <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBusinessNew;