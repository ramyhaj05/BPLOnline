import axios from "axios";
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";

const DeleteBusinessNew = () =>{
    const {id} = useParams();
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">Edit Application</div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBusinessNew;