import React,{useState} from "react";
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const businessTableContent = ({business}) =>{
    const tableB = "p-2 border border-white border-2 truncate font-bold";
    const first = business.status === "0" ? "text-gray-400" : "";
    const second = business.status === "1" ? "text-blue-500" : "";
    const third = business.status === "2" ? "text-green-500" : "";
    const fourth = business.status === "3" ? "text-red-500" : "";
    const cancelledStat = business.status === "3" ? " hover:cursor-not-allowed" : "";
    const editButton = business.business_name ? `/edit/`+business.id :  `/edit/renewal/`+business.id ;
    const deleteButton = business.business_name ? `/cancel/`+business.id : `/cancel/renewal/`+business.id;

    const applicationStatus = business.business_name ? `/status/new/`+business.id : `/status/renewal/`+business.id;

    const deletedEditButton = business.status === "3" ? "" : editButton;

    const editOrView = () =>{
        if(business.status === "2"){
            return (
                <Link to={applicationStatus}>
                    <FaEye className={"text-gray-500"+cancelledStat}></FaEye>
                </Link>)
        }
        else{
            return(
                <Link to={deletedEditButton}>
                    <FaEdit className={"text-gray-500"+cancelledStat}></FaEdit>
                 </Link>)
        }
    }
    return(
        // hover:bg-gray-600 hover:text-white
            <tr className={first+second+third+fourth+" p-2 hover:cursor-pointer hover:bg-gray-200 text-gray-500 transition scalehover"}>
                <td className={tableB +" md:w-2/4 w-2/4 text-center"}>{business.business_name ? business.business_name : business.account_number}</td>
                <td className={tableB +" w-2/4 md:table-cell hidden capitalize"}>{business.owners_name}</td>
                <td className={tableB + " md:w-1/4 w-2/4"}>
                    {business.status === "0" ? "Incomplete" : ""}
                    {business.status === "1" ? "For Verification" : ""}
                    {business.status === "2" ? "Verified" : ""}
                    {business.status === "3" ? "Cancelled" : ""}
                </td>
                <td className={tableB + " md:w-1/4 w-1/4 text-center"}>
                    <div className="flex flex-row justify-around text-2xl">
                            {editOrView()}
                        <Link to={business.status === "3" ? "" : deleteButton}>
                            <FaTrashAlt className={"text-red-500"+cancelledStat}></FaTrashAlt>
                        </Link>
                    </div>
                </td>
            </tr>
    )
}

export default businessTableContent;