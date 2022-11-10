import axios from "axios";
import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import BusinessTableContent from './BusinessTableContent';
import LoadingScreen from "../Layout/loadingScreen";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
// import apiClient from '../services/api';
const BusinessTable = () =>{
    const tableH = "p-2 text-center border border-white border-2 truncate h5 bg-redwine font-semibold text-yellow-400";
    const [businessApplicationList, setbusinessApplicationList] = useState([]);
    const [year, setYear] = useState("2022");
    const [typeOfTable, setTypeOfTable] = useState(1);
    const [disclaimer, setDisclaimer] = useState(1)
    const transButton = "p-1 px-3 rounded-sm bg-redwine text-gray-100";
    //lifecycle method.
    useEffect(()=>{
        setDisclaimer(0)
    },[businessApplicationList])
    useEffect(()=>{
        if(typeOfTable === 1){
            getBusinesApplications();
        }
        else{
            getRenewals();
        }
    },[year,typeOfTable])

    const getBusinesApplications = async()=>{
        setTypeOfTable(1);
        setDisclaimer(1);
        const user_token = localStorage.getItem('auth_token');
        const user_id = localStorage.getItem('auth_id');
        const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + user_token
        }
            axios.get('/api/get/businessapplication/list',{params:{year: year, user_id:user_id}},{
                headers:headers
            }).then((response)=>{
                if(response.data.status === 'success'){
                    setbusinessApplicationList(response.data.result.original)
                }
                else{
                    alert(response.data.message)
                }
            }).then(()=>{
                setDisclaimer(0)
            }).catch((res)=>{
                alert(res)
            })
    }

    const getRenewals = async()=>{
        setTypeOfTable(2);
        setDisclaimer(1)
        const user_id = localStorage.getItem('auth_id');
        const renewal = await axios.get('/api/get/renewal/list',{params:{year: year, user_id:user_id}}).then(function(response){
           if(response.data.status === 'success'){
            setbusinessApplicationList(response.data.result.original)
           }
           else{
            alert(response.data.message);
           }
        }).then(()=>{
            setDisclaimer(0)
        })
    }
    return(
        <div className="w-full md:p-5 p-1">
            
            {disclaimer === 1 ? <LoadingScreen/> : ""}
            <div className="w-full p-2 flex flex-row justify-between">
                <div className="font-bold tracking-widest text-gray-600">Permit Application: 
                    <select name="" id="" onChange={(e)=>{setYear(e.target.value)}}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select> 
                
                </div>
                <Link to='../addNew' className="p-2 px-3 rounded text-gray-100 text-lg text-center bg-redwine hover:text-red-500 border-2 hover:bg-white hover:border-red-700 transition hover:scale-110"><FaPlus/></Link>
            </div>
            <div className="w-full p-1 flex flex-row justify-left">
                <div className="px-1" >
                    <button className={transButton} onClick={getBusinesApplications}>New</button>
                </div>
                <div className="px-1">
                    <button className={transButton} onClick={getRenewals}>Renewal</button>
                </div>
            </div>
            <div className="w-full p-1 flex flex-row justify-center">
                <div className="text-cloudygrey text-2xl font-bold">List of {typeOfTable === 1 ? "New" : "Renewal of"} Business Permit Application(s) Submitted.</div>
            </div>
        <div className="w-full flex flex-row flex-wrap">
            <div className="p-1 md:p-3 w-1/2 md:w-1/4 hover:cursor-pointer">
                <div className=" rounded-xl shadow-md border-4 border-gray-100 bg-gray-200 p-2 flex flex-col justify-content-center justify-center content-center h-36 hover:border-red-300 text-red-700  hover:bg-red-700 hover:scale-110 transition">
                    <Link to='../addNew' className="flex justify-center p-5 text-5xl transition hover:text-white"><FaPlusCircle className=" "/></Link>
                </div>
            </div>
                {
                    businessApplicationList.map((business)=>{
                        return(
                        <div className="p-1 md:p-3 w-1/2 md:w-1/4 man-h-80" key={business.id}> {business ?
                            <BusinessTableContent key={business.id} business={business}/>
                            : <div className=" rounded-t-xl shadow-md border-4 border-white bg-gray-200 p-2 flex flex-col">
                                <span className="w-full text-center font-bold">Title</span>
                                <span>Status</span>
                                <span>Name</span>
                                <span>Address</span>
                            </div>
                    }
                        </div>)
                    })
                }
        </div>
    </div>
    )
}

export default BusinessTable