import React,{useState} from "react";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const businessTableContent = ({business}) =>{
    const tableB = "p-2 border border-white border-2 truncate font-bold";
    const first = business.status === "0" ? "text-gray-400" : "";
    const second = business.status === "1" ? "text-blue-500" : "";
    const third = business.status === "2" ? "text-green-500" : "";
    const fourth = business.status === "3" ? "text-red-500" : "";
    return(
            <tr className={first+second+third+fourth+" p-2 hover:cursor-pointer hover:bg-blue-400 hover:text-white text-gray-500"}>
                <td className={tableB +" md:w-2/4 w-2/4"}>{business.business_name}</td>
                <td className={tableB +" w-2/4 md:table-cell hidden"}>{business.owner_name}</td>
                <td className={tableB + " md:w-1/4 w-2/4"}>
                    {business.status === "0" ? "Incomplete" : ""}
                    {business.status === "1" ? "For Verification" : ""}
                    {business.status === "2" ? "Verified" : ""}
                    {business.status === "3" ? "Cancelled" : ""}
                </td>
                <td className={tableB + " md:w-1/4 w-1/4 text-center"}>
                    <div className="flex flex-row justify-around text-2xl">
                        <Link to={`/edit/`+business.id} ><FaEdit className="text-gray-500"></FaEdit></Link>
                        <Link to={`/edit/`+business.id} ><FaTrashAlt className="text-red-500"></FaTrashAlt></Link>
                    </div>
                </td>
            </tr>
    )
}

export default businessTableContent;