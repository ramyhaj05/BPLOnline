import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PopUpMessage from "../../Layout/popUp";
import LoadingScreen from "../../Layout/loadingScreen";
import axios from "axios";

const EditRenewal = () =>{
    const inputLabel = "text-gray-500 text-md";
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const {id} = useParams();
    const user_id = localStorage.getItem('auth_id');
    const [disclaimer, setDisclaimer] = useState(1);
    const current_year = new Date().getFullYear();
    const [enablePopper, setEnablePopper] = useState(0);
    const [popper, setPopper] = useState([{
        'status': '',
        'message': '',
    }]);

    useEffect(()=>{
        getRenewalData()
    },[])
    
    const [newData, setNewData] = useState([
        {
            id: "",
            account_number: "",
            gross_income: "",
            name: "",
            contact: "",
            email: ""
        }
    ]);

    const getRenewalData = () =>{
        axios.get('/api/get/renewal/details',{params:{id: id, user_id:user_id}}).then(function(response){
            const keys = response.data.result.map((key)=>{
                setNewData({...newData, id:key.id, account_number:key.account_number, gross_income:key.gross_income,
                name:key.owners_name, contact:key.contact, email:key.email})
            })
        }).then(()=>{
            setDisclaimer(0);
        })
    }
    
    const renewalEditSubmit = async event =>{
        event.preventDefault()
        setDisclaimer(1);
        const editRenewalForm = new FormData();
        editRenewalForm.append("id", newData.id)
        editRenewalForm.append("account_number", newData.account_number)
        editRenewalForm.append("gross_income", newData.gross_income)
        editRenewalForm.append("name", newData.name)
        editRenewalForm.append("contact", newData.contact)
        editRenewalForm.append("email", newData.email)
        editRenewalForm.append("year", current_year)

        const edit = await axios({
            method: "post",
            url: "/api/edit/renewal/info",
            data: editRenewalForm,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response)=>{
        //   axios.post('/edit/renewal/info',editRenewalForm).then((response)=>{
            if(response.data.status === "success"){
                alert("success")
            }
            else{
                alert("failed")
            }
        })
    }
    return(
        
        <div className="container w-full" key={newData.id}>
            <div className="row justify-content-center">
                <div className="w-full">
                    {/* <div className="w-full text-center tracking-widest text-2xl py-0 md:py-4 font-bold text-pink-500 pb-5">Welcome to BPLO - Santa Rosa Online Application</div> */}
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">Re-newal of Business for {current_year}</div>
                        <div className="card-body">
                            <form method="post" className="w-full py-3 flex md:flex-col p-3 md:p-1" onSubmit={renewalEditSubmit} >
                                {enablePopper === 1 ? <PopUpMessage popper={popper} setEnablePopper={setEnablePopper}/> : ""}
                                {disclaimer === 1 ? <LoadingScreen></LoadingScreen> : ""}
                                <div className="w-full flex md:flex-row flex-col flex-wrap">
                                <div className="w-full md:w-1/2">
                                        <span className="text-gray-400 text-xl underline">Business Information</span>
                                        <input type="hidden" name="" value="2"/>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Account Number</div>
                                            <input type="text" className={inputField+"tracking-widest"} value={newData.account_number} name="account_number" placeholder="X-XXXXX" maxLength={7} id="" onChange={(e)=>{setNewData({...newData, account_number: e.target.value})}} required/>
                                            <div className="pt-2 pl-2"><span className="text-red-400">Note: You can see your Account number in your<br></br> Tax Order of Payment/Business Permit. (e.g. X-XXXXX)</span></div>
                                        </div>
                                        <div className="py-1">
                                            <div className={inputLabel}>Gross Income of {current_year-1}</div>
                                            <input type="number" className={inputField} name="gross_income" id="" value={newData.gross_income} onChange={(e)=>{setNewData({...newData, gross_income: e.target.value})}} required/>
                                        </div>
                                    </div><div className="w-full md:w-1/2">
                                        <span className="text-gray-400 text-xl underline">Contact Information</span>
                                        <input type="hidden" name="" value="2"/>
                                        <div className="py-1 block">
                                            <div className={inputLabel}>Owner's/Representative's Name</div>
                                            <input type="text" className={inputField} name="name" id="" value={newData.name} onChange={(e)=>{setNewData({...newData, name: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1">
                                            <div className={inputLabel}>Contact Number</div>
                                            <input type="number" className={inputField} name="contact" id="" value={newData.contact} onChange={(e)=>{setNewData({...newData, contact: e.target.value})}} required/>
                                        </div>
                                        <div className="py-1">
                                            <div className={inputLabel}>Email Address</div>
                                            <input type="email" className={inputField} name="email" id="" value={newData.email} onChange={(e)=>{setNewData({...newData, email: e.target.value})}} required/>
                                        </div>
                                    </div>
                                    <div className="w-full p-1 flex flex-row justify-between">
                                        <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={()=>{navigate('/addNew')}}>Back</div>
                                        <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Proceed</button>
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

export default EditRenewal