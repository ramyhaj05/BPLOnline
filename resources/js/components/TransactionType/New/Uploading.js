import React from "react";
import { useParams } from "react-router-dom";

const Uploading = () =>{
    const {id} = useParams();
    // 1-assoc 2-coop 3-corp 4-foundation 5-partnership 6-peza 7-single 8-taxexempt
    return(
        <div className="">
            <div className="text-xl">Requirements</div>
            <div className="pl-5">
                {id}
                <div className="">DTI Registration</div>
                <div className="">Barangay Clearance</div>
                <div className="">Security and Exchange Commision Registration (SEC)</div>
                <div className="">Tax Declaration</div>
                <div className="">Contract of Lease</div>
                <div className="">CGL Insurance</div>
                <div className="">Business Cedula/Corporate Cedula</div>
            </div>
        </div>
    )
}

export default Uploading;