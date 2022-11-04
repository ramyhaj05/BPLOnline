import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ConfirmDelete from "../../Layout/confirmDelete";
import PopupDelete from "../../Layout/popUpDelete";
import LoadingScreen from "../../Layout/loadingScreen";


const DeleteBusinessRenewal = () =>{
    const {id} = useParams();
    const user_id = localStorage.getItem('auth_id');
    const [disclaimer, setDisclaimer] = useState(0)
    const [deleteConfirm, setDeleteConfirm] = useState(0)
    const [deletePopUp, setDeletePopUp] = useState(0)
    const [confirmed, setConfirmed] = useState()
    const [newData, setNewData] = useState([]);
    const reviewDetails = "text-gray-600 text-md tracking-widest";
    const reviewData = "pl-6 font-bold capitalize text-lg";
    useEffect(()=>{
        getRenewalData();
    },[])
    
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
    const deleteNewApp = async event  =>{
        event.preventDefault();
        if(confirmed == "CONFIRM"){
            setDisclaimer(1);
            const deleteBusiness = await axios.post("/api/delete/renewal/",{app_id:id, user_id:user_id}).then(()=>{
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

    const deleteClick = event=>{
        event.preventDefault();
        setDeletePopUp(1);
    }
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-white bg-cloudygrey">Cancel Application</div>
                        <div className="card-body">
                            {deletePopUp === 1 ? <ConfirmDelete deleteNewApp={deleteNewApp} setConfirmed={setConfirmed} /> : ""}
                            {deleteConfirm === 1 ? <PopupDelete/> : ""}
                            <span className="text-rose-400">This action will cancel your application and this can't be undo.</span>
                            <form className="w-full flex flex-wrap flex-col md:flex-row p-2" onSubmit={deleteClick}>
                               {disclaimer === 1 ? <LoadingScreen/> : ""}
                                <div className="w-full md:w-1/2 p-2">
                                    <div className={reviewDetails+" capitalized flex flex-col"}>Account Number
                                        <div className={reviewData}>{newData.account_number}</div>
                                    </div>
                                    <div className={reviewDetails+" capitalized flex flex-col"}>Gross Income
                                        <div className={reviewData}>{newData.gross_income}</div>
                                    </div>
                                    <div className={reviewDetails+" capitalized flex flex-col"}>Owner's/Representative's Name
                                        <div className={reviewData}>{newData.name}</div>
                                    </div>
                                    <div className={reviewDetails+" capitalized flex flex-col"}>Email Address
                                        <div className={reviewData}>{newData.email}</div>
                                    </div>
                                    <div className={reviewDetails+" capitalized flex flex-col"}>Contact
                                        <div className={reviewData}>{newData.contact}</div>
                                    </div>

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

export default DeleteBusinessRenewal;