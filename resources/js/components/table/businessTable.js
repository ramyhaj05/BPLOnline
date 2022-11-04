import axios from "axios";
import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import BusinessTableContent from './BusinessTableContent';
import LoadingScreen from "../Layout/loadingScreen";
import { FaPlus } from "react-icons/fa";
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
        <table border="2" className="overflow-hidden w-full table-fixed outline outline-4 outline-offset-1 outline-red-800 ring-gray-500 text-white font-normal tracking-widest">
            <thead className="">
                <tr className="p-3">
                    <th className={tableH + " md:w-3/4 w-2/5"}>{typeOfTable === 1 ? "Business Name" : "Account Number"}</th>
                    <th className={tableH + " w-2/4 md:table-cell hidden"}>Owner/Representative Name</th>
                    <th className={tableH + " md:w-2/4 w-2/5"}>Status</th>
                    <th className={tableH + " md:w-1/4 w-1/5"}></th>
                </tr>
            </thead>
            <tbody className="">
                {
                    businessApplicationList.map((business)=>{
                        return business ?
                         <BusinessTableContent key={business.id} business={business}/>
                        : <tr><td colSpan={4} className="text-gray-500">No Record(s) Found!</td></tr>
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default BusinessTable