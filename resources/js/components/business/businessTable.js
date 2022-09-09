import React,{useState} from "react";
import {Link} from 'react-router-dom'
const BusinessTable = () =>{
    const tableH = "p-2 text-center border border-white border-2 truncate tracking-widest h5"
    const tableB = "p-2 border border-white border-2 truncate font-bold"
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
                    <th className={tableH + " w-1/4 md:table-cell hidden"}>Barangay</th>
                    <th className={tableH + " md:w-2/4 w-1/4"}>Status</th>
                </tr>
            </thead>
            <tbody className="">
                <tr className="p-2 hover:cursor-pointer hover:bg-blue-400 hover:text-white text-gray-500">
                    <td className={tableB +" md:w-3/4 w-3/4"}>Esperer Esthetiques Beauty and Wellness Hub</td>
                    <td className={tableB +" w-2/4 md:table-cell hidden"}>Ingal, Urush Duanne Manalili</td>
                    <td className={tableB +" w-1/4 md:table-cell hidden"}>Dita</td>
                    <td className={tableB + " w-1/4 md:w-2/4 w-1/4"}>
                        <div className="w-3/4 bg-gray-400 rounded h-4 dark:bg-gray-200 ring-1 ring-blue-400">
                            <div className="bg-green-400 font-bold text-xs font-medium text-green-800 text-center p-0.5 leading-none rounded" style={{"width": "45%"}}> 45%</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default BusinessTable