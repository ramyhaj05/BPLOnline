import React from "react";
const businessTableContent = ({business}) =>{
    const tableB = "p-2 border border-white border-2 truncate font-bold";
    return(
        <tr className="p-2 hover:cursor-pointer hover:bg-blue-400 hover:text-white text-gray-500">
            <td className={tableB +" md:w-3/4 w-3/4"}>{business.business_name}</td>
            <td className={tableB +" w-2/4 md:table-cell hidden"}>{business.owner_name}</td>
            <td className={tableB + " w-1/4 md:table-cell hidden"}>
                <div className="w-3/4 bg-gray-400 rounded h-4 dark:bg-gray-200 ring-1 ring-blue-400 md:w-2/4 w-1/4 ">
                    <div className="bg-green-400 font-bold text-xs font-medium text-green-800 text-center p-0.5 leading-none rounded" style={{"width": "45%"}}> 45%</div>
                </div>
            </td>
            <td className={tableB +" w-1/4 md:table-cell hidden"}>Add/Edit/Delete</td>
        </tr>
    )
}

export default businessTableContent;