import React,{useState} from "react";
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const businessTableContent = ({business}) =>{
    const cancelledStat = business.status === "3" ? " hover:cursor-not-allowed" : "";
    const editButton = business.business_name ? `/edit/`+business.id :  `/edit/renewal/`+business.id ;
    const deleteButton = business.business_name ? `/cancel/`+business.id : `/cancel/renewal/`+business.id;

    const applicationStatus = business.business_name ? `/status/new/`+business.id : `/status/renewal/`+business.id;
    const statusButton = business.status === "3" ? "" : applicationStatus;
    const deletedEditButton = business.status === "3" ? "" : editButton;
    return(
            <div className=" rounded-b-xl shadow-md border-4 border-white bg-gray-200 flex flex-col hover:scale-110 transition text-gray-600 font-bold">
                <span className="w-full text-center font-bold truncate text-xl bg-gray-500 p-1 text-white">{business.business_name ? business.business_name : business.account_number}</span>
                <span className="truncate pl-2 pt-2">
                    Status:
                    {business.status === "0" ? "Incomplete" : ""}
                    {business.status === "1" ? "For Verification" : ""}
                    {business.status === "2" ? "Verified" : ""}
                    {business.status === "3" ? "Cancelled" : ""}
                </span>
                <span className="truncate pl-2">Owner: {business.owners_name}</span>
                {business.capital_investment ? <span className="truncate pl-2">Capital: {business.capital_investment}</span>: <span className="truncate pl-2">Gross:{business.gross_income}</span>}
                <div className="flex justify-end w-full pl-2">
                    <Link to={statusButton}>
                        <FaEye className={"text-gray-500 text-3xl p-1"+cancelledStat}></FaEye>
                    </Link>
                    
                    <Link to={deletedEditButton}>
                        <FaEdit className={"text-gray-500 text-3xl p-1"+cancelledStat}></FaEdit>
                    </Link>
                    <Link to={business.status === "3" ? "" : deleteButton}>
                        <FaTrashAlt className={"text-red-500 text-3xl p-1"+cancelledStat}></FaTrashAlt>
                    </Link>
                </div>
            </div>
    )
}

export default businessTableContent;