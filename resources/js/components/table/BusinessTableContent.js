import React from "react";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const businessTableContent = ({business}) =>{
    const tableB = "p-2 border border-white border-2 truncate font-bold";
    return(
            <tr className="p-2 hover:cursor-pointer hover:bg-blue-400 hover:text-white text-gray-500">
                <td className={tableB +" md:w-2/4 w-2/4"}>{business.business_name}</td>
                <td className={tableB +" w-2/4 md:table-cell hidden"}>{business.owner_name}</td>
                <td className={tableB + " md:w-1/4 w-2/4 "}>
                    {business.status === "0" ? "Incomplete" : ""}
                    {business.status === "1" ? "For Verification" : ""}
                    {business.status === "2" ? "Verified" : ""}
                    {business.status === "3" ? "Cancelled" : ""}
                </td>
                <td className={tableB + " md:w-1/4 w-1/4 text-center"}>
                    <div className="flex flex-row justify-around text-2xl">
                        <Link to={`/edit/`+business.id} ><FaEdit ></FaEdit></Link>
                        <Link to={`/edit/`+business.id} ><FaTrashAlt></FaTrashAlt></Link>
                    </div>
                </td>
            </tr>
    )
}

export default businessTableContent;