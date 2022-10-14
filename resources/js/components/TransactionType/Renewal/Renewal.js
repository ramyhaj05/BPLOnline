import React from "react";
import RenewalForm from "./RenewalForm";
const Renewal = () =>{
    const current_year = new Date().getFullYear();
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="w-full text-center tracking-widest text-2xl py-0 md:py-4 font-bold text-pink-500 pb-5">Welcome to BPLO - Santa Rosa Online Application</div>
                    <div className="card">
                        <div className="card-header text-lg font-semibold text-gray-700">Re-newal of Business for {current_year}</div>
                        <div className="card-body">
                            <RenewalForm></RenewalForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Renewal;