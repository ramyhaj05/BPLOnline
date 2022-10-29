import axios from "axios";
import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import LoadingScreen from "../../Layout/loadingScreen";

const EditBusinessNew = () =>{
    const navigate = useNavigate();
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md";
    const {id} = useParams();
    const [saveSuccess, setSaveSuccess] = useState(0)
    const [disclaimer, setDisclaimer] = useState(0);
    const brgy = ["Aplaya","Balibago","Caingin","Dila","Dita","Don Jose","Ibaba","Kanluran","Labas","Macabling","Malitlit","Malusak","Market Area","Pooc","Pulong Santa Cruz","Sinalhan","Sto. Domingo","Tagapo"];
    const [newData, setNewData] = useState([{id: "",businesname: "", business_address: "",barangay: "",type: "",franchise: "",leasing: "",capital: "",description: "", owners_name: "",owners_address: "",contact: "",email: ""}]);
    const user_id = localStorage.getItem('auth_id');
    useEffect(()=>{
        getData();
    },[])
    const getData = () =>{
        setDisclaimer(1);
        axios.get("/api/get/appDetails/getdet",{params:{app_id:id,user_id:user_id}}).then(function(response){
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
    const saveEdit = async (event) =>{
        event.preventDefault();
        const editData = new FormData();
        editData.append('appID', newData.id);
        editData.append('businessname', newData.businessname);
        editData.append('business_address', newData.business_address);
        editData.append('barangay', newData.barangay);
        editData.append('type', newData.type);
        editData.append('leasing', newData.leasing);
        editData.append('franchise', newData.franchise);
        editData.append('capital', newData.capital);
        editData.append('description', newData.description);
        editData.append('owners_name', newData.owners_name);
        editData.append('owners_address', newData.owners_address);
        editData.append('contact', newData.contact);
        editData.append('email', newData.email);
        editData.append('user_id', user_id);
        setDisclaimer(1)
        try {
            const response = await axios({
                method: "post",
                url: "/api/edit/business",
                data: editData,
                headers: { "Content-Type": "multipart/form-data" },
              }).then((response)=>{
                  setDisclaimer(0)
              }).then(()=>{
                setSaveSuccess(1)
              })
        } catch(error) {
            alert(error);
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
                            {saveSuccess === 1 ? <div className="fixed left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-gray-500/70 bg-opacity-1">
                                <div className="flex flex-col align-items-center bg-gray-100 rounded border-4 border-emerald-500 w-3/4 md:w-1/2 p-4 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg bg-white">
                                    <span className="font-bold text-xl text-emerald-500 p-3">Application Details Successfully Updated!</span>
                                    <span className="text-sm text-rose-500">Please click continue to start upload of necessary requirements.</span>
                                    <div onClick={()=>{navigate(`/new-business/upload/`+id)}} className="p-1 px-2 bg-white border-2 rounded-md border-gray-300 shadow-md hover:text-emerald-500 cursor-pointer">Continue</div>
                                </div>
                            </div> : ""}
                            {disclaimer === 1 ? <LoadingScreen/> : ""}
                                <div className="w-full flex md:flex-row flex-col flex-wrap" key={newData.id}>
                                    <div className="w-full md:w-1/2">
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Business Name</div>
                                            <input type="text" className={inputField} name="businessname" id="businessname" value={newData.businessname} onChange={(e)=>{setNewData({...newData, businessname: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Business Address</div>
                                            <div className="p-2">
                                                <select name="barangay" id="barangay" className={inputField} value={newData.barangay} onChange={(e)=>{setNewData({...newData, barangay: e.target.value})}} required>
                                                    <option value="">- Select Barangay -</option>
                                                    {brgy.map(object=>
                                                        <option value={object} key={object}>{object}</option>
                                                    )}
                                                </select>
                                            </div>
                                            <div className="p-2">
                                                <input type="text" className={inputField+" tracking-widest"} value={newData.business_address} name="business_address" id="" placeholder="Unit/Sub/Blk/Lot" onChange={(e)=>{setNewData({...newData, business_address: e.target.value})}} required/>
                                            </div>
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
                                            <div className={inputLabel}>Leasing</div>
                                            {/* // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt getAppDet */}
                                            <select name="leasing" id="leasing" value={newData.leasing} onChange={(e)=>{setNewData({...newData, leasing: e.target.value})}} className={inputField}>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                            </select>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Owner's/Company Name</div>
                                            <input type="text" className={inputField} name="owners_name" value={newData.owners_name} id="" onChange={(e)=>{setNewData({...newData, owners_name: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Owner's/Company Address</div>
                                                <input type="text" className={inputField} name="owners_address" value={newData.owners_address} id="" onChange={(e)=>{setNewData({...newData, owners_address: e.target.value})}} required/>
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
                                        <Link to="/dashboard" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setLeasing(0)}}>Back</Link>
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