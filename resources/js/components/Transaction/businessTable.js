import axios from "axios";
import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import BusinessTableContent from './BusinessTableContent';
const BusinessTable = () =>{
    const tableH = "p-2 text-center border border-white border-2 truncate tracking-widest h5";
    const [businessApplicationList, setbusinessApplicationList] = useState([]);

    //lifecycle method.
    
    useEffect(()=>{
        getBusinesApplications();
    },[])

    function getBusinesApplications(){
        axios.get('/api/get/businessapplication/list').then(function(response){
            setbusinessApplicationList(response.data);
        });
    }
    return(
        <div className="w-full md:p-5 p-1">
            
            <div className="w-full p-2 py-3 flex flex-row justify-between">
                <div className="font-bold tracking-widest">Permit Application: 2022</div>
                <Link to='../addNew' className="w-8 rounded font-bold text-xl text-center text-green-500 ring ring-green-500 hover:bg-green-400 hover:ring-green-400 hover:text-white">+</Link>
            </div>
        <table border="1" className="w-full table-fixed ring ring-5 ring-gray-500 text-white font-normal tracking-widest b">
            <thead className="bg-gray-500 ">
                <tr className="p-3">
                    <th className={tableH + " md:w-3/4 w-3/4"}>Business Name</th>
                    <th className={tableH + " w-2/4 md:table-cell hidden"}>Owner Name</th>
                    <th className={tableH + " w-2/4 md:table-cell hidden"}>Status</th>
                    <th className={tableH + " md:w-1/4 w-1/4"}></th>
                </tr>
            </thead>
            <tbody className="">
                {businessApplicationList.map((business)=>{
                    return <BusinessTableContent key={business.id} business={business}/>
                })}
            </tbody>
        </table>
    </div>
    )
}

export default BusinessTable