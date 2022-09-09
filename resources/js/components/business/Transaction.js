import React, { Component } from "react";

class Transaction extends Component{
    render()
    {
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full  ">
                    <div className="w-full text-center tracking-widest text-2xl py-0 md:py-4 font-bold text-pink-500">NEW FORM</div>
                    <div className="card bg-white">
                        <div className="card-header  text-lg font-semibold text-gray-700">Please select transaction</div>
                        <div className="card-body p-3 flex flex-col md:flex-row md:justify-around">{this.props.id}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Transaction;