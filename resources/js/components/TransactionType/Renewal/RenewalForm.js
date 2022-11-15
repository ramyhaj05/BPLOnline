import React, {useState} from "react";
import LoadingScreen from "../../Layout/loadingScreen";
import {useNavigate} from 'react-router-dom';
import PopUpMessage from "../../Layout/popUp";

const RenewalForm = () =>{
    const navigate = useNavigate();
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md";
    const [disclaimer, setDisclaimer] = useState(0);
    const current_year = new Date().getFullYear();
    const user_id = localStorage.getItem('auth_id');
    const [popper, setPopper] = useState([{
        'status': '',
        'message': '',
    }]);
    const [enablePopper, setEnablePopper] = useState(0);
    const [newData, setNewData] = useState([
        {
            account_number: "",
            gross_income: "",
            name: "",
            contact: "",
            email: ""
        }
    ]);

    const renewalSubmit = async event =>{
        event.preventDefault();
        setDisclaimer(1);
        const renewalForm = new FormData();
        renewalForm.append("account_number", newData.account_number)
        renewalForm.append("gross_income", newData.gross_income)
        renewalForm.append("name", newData.name)
        renewalForm.append("contact", newData.contact)
        renewalForm.append("email", newData.email)
        renewalForm.append("user_id", user_id)
        renewalForm.append("year", current_year)
        const renewal = await axios({
            method: "post",
            url: "/api/add/renewal",
            data: renewalForm,
            headers: { "Content-Type": "multipart/form-data" },
          }).then((response)=>{
            if(response.data.status === "exist"){
                setPopper({...popper, status:response.data.status, message:response.data.message})
                setEnablePopper(1)
                setDisclaimer(0);
            }
            else if(response.data.status === 'success'){
                setDisclaimer(0)
                navigate('/review/renewal/'+response.data.result);
            }
            else{
                setPopper({...popper, status:response.data.status, message:response.data.message})
                setEnablePopper(1)
                setDisclaimer(0);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }

    return(
        <form method="post" className="w-full py-3 flex md:flex-col p-3 md:p-1" onSubmit={renewalSubmit}>
            {enablePopper === 1 ? <PopUpMessage popper={popper} setEnablePopper={setEnablePopper}/> : ""}
            {disclaimer === 1 ? <LoadingScreen></LoadingScreen> : ""}
            <div className="w-full flex md:flex-row flex-col flex-wrap">
            <div className="w-full md:w-1/2">
                    <span className="text-gray-400 text-xl underline">Business Information</span>
                    <input type="hidden" name="" value="2"/>
                    <div className="py-1 block">
                        <div className={inputLabel}>Account Number</div>
                        <input type="text" className={inputField+"tracking-widest"} name="account_number" placeholder="X-XXXXX" maxLength={7} id="" onChange={(e)=>{setNewData({...newData, account_number: e.target.value})}} required/>
                        <div className="pt-2 pl-2"><span className="text-red-400">Note: You can see your Account number in your<br></br> Tax Order of Payment/Business Permit. (e.g. X-XXXXX)</span></div>
                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>Gross Income of {current_year-1}</div>
                        <input type="number" className={inputField} name="gross_income" id="" onChange={(e)=>{setNewData({...newData, gross_income: e.target.value})}} required/>
                    </div>
                </div><div className="w-full md:w-1/2">
                    <span className="text-gray-400 text-xl underline">Contact Information</span>
                    <input type="hidden" name="" value="2"/>
                    <div className="py-1 block">
                        <div className={inputLabel}>Owner's/Representative's Name</div>
                        <input type="text" className={inputField} name="name" id="" onChange={(e)=>{setNewData({...newData, name: e.target.value})}} required/>
                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>Contact Number</div>
                        <input type="number" className={inputField} name="contact" id="" onChange={(e)=>{setNewData({...newData, contact: e.target.value})}} required/>
                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>Email Address</div>
                        <input type="email" className={inputField} name="email" id="" onChange={(e)=>{setNewData({...newData, email: e.target.value})}} required/>
                    </div>
                </div>
                <div className="w-full p-1 flex flex-row justify-between">
                    <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center transition hover:scale-105" onClick={()=>{navigate('/addNew')}}>Back</div>
                    <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center hover:scale-105">Proceed</button>
                </div>
            </div>
        </form>
    );
}

export default RenewalForm;