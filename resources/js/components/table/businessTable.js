import axios from "axios";
import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import BusinessTableContent from './BusinessTableContent';
import ScaleLoader from "react-spinners/ScaleLoader";
const BusinessTable = () =>{
    const tableH = "p-2 text-center border border-white border-2 truncate tracking-widest h5";
    const [businessApplicationList, setbusinessApplicationList] = useState([]);
    const [year, setYear] = useState("2022");
    const [typeOfTable, setTypeOfTable] = useState(1);
    const [disclaimer, setDisclaimer] = useState(1)
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
        setDisclaimer(1)
        const newBusiness = await axios.get('/api/get/businessapplication/list',{params:{year: year}}).then(function(response){
           setbusinessApplicationList(response.data)
        }).then(()=>{
            setDisclaimer(0)
        })
    }

    const getRenewals = async()=>{
        setTypeOfTable(2);
        setDisclaimer(1)
        const renewal = await axios.get('/api/get/renewal/list',{params:{year: year}}).then(function(response){
           setbusinessApplicationList(response.data)
        }).then(()=>{
            setDisclaimer(0)
        })
    }
    return(
        <div className="w-full md:p-5 p-1">
            {disclaimer === 1 ?<div className="fixed z-100 left-0 top-0 w-full h-full flex flex-col items-center justify-center bg-black/50 bg-opacity-1">
                <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                    <ScaleLoader
                    color="#36d7b7"
                    margin={10}
                    />
                </div>
            </div> : ""}
            <div className="w-full p-2 pt-3 flex flex-row justify-between">
                <div className="font-bold tracking-widest text-gray-600">Permit Application: 
                    <select name="" id="" onChange={(e)=>{setYear(e.target.value)}}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select> 
                
                </div>
                <Link to='../addNew' className="w-8 rounded font-bold text-xl text-center text-green-500 ring ring-green-500 hover:bg-green-400 hover:ring-green-400 hover:text-white">+</Link>
            </div>
            <div className="w-full p-1 flex flex-row justify-left">
                <div className="px-1" >
                    <button className="px-2 rounded-sm bg-gray-200" onClick={getBusinesApplications}>New</button>
                </div>
                <div className="px-1">
                    <button className="px-2 rounded-sm bg-gray-200" onClick={getRenewals}>Renewal</button>
                </div>
            </div>
            <div className="w-full p-1 flex flex-row justify-center">
                <div className="text-xl text-gray-600">List of {typeOfTable === 1 ? "New" : "Renewal of"} Business Permit Application(s) Submitted.</div>
            </div>
        <table border="2" className="w-full table-fixed ring ring-4 ring-gray-500 text-white font-normal tracking-widest rounded-sm">
            <thead className="bg-gray-500 ">
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