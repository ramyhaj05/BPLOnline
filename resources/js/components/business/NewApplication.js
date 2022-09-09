import React, { useState } from "react";

const NewApplication = () =>{
    const [transactiontype, setTransactionType] = useState(0);
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                    {transactiontype === 0 ? <Select setTransactionType={setTransactionType}/> : ""}
                    {transactiontype === 1 ? <New setTransactionType={setTransactionType} transactiontype={transactiontype}/> : ""}
                    {transactiontype === 2 ? <Renew setTransactionType={setTransactionType} transactiontype={transactiontype}/> : ""}
                    {transactiontype === 3 ? <Change setTransactionType={setTransactionType} transactiontype={transactiontype}/> : ""}
                    {transactiontype === 4 ? <Closure setTransactionType={setTransactionType} transactiontype={transactiontype}/> : ""}
            </div>
        </div>
    );
}


const Select= ({setTransactionType})=>{
    const TranButtons = "border-4 w-full p-2 rounded font-bold text-md tracking-widest text-center ";
    const ButtonContainer = "w-full md:w-1/4 p-3 md:p-2 hover:cursor-pointer";
    return(
    <div className="w-full  ">
        <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-pink-500">ADD NEW TRANSACTION</div>
        <div className="card bg-white">
            <div className="card-header text-lg font-semibold text-gray-700">Please select transaction</div>
            <div className="p-2 md:p-3 flex flex-col md:flex-row md:justify-around">
                <div className={ButtonContainer}>
                    <div className="w-full" onClick={(e)=>{setTransactionType(1);}}><button className={TranButtons +"border-green-400 text-green-500"}>New</button></div>
                </div>
                <div className={ButtonContainer}>
                    <div className="w-full" onClick={(e)=>{setTransactionType(2);}}><button className={TranButtons +"border-teal-500 text-teal-600"}>Re-newal</button></div>
                </div>
                <div className={ButtonContainer}>
                    <div className="w-full" onClick={(e)=>{setTransactionType(3);}}><button className={TranButtons +"border-orange-500 text-orange-600"}>Change</button></div>
                </div>
                <div className={ButtonContainer}>
                    <div className="w-full" onClick={(e)=>{setTransactionType(4);}}><button className={TranButtons +"border-red-500 text-red-600"}>Closure</button></div>
                </div>
            </div>
        </div>
    </div>
    );
}

const New = ({transactiontype, setTransactionType}) =>{
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md"
    const [disclaimer, setDisclaimer] = useState(1)
    return(
        <div className="w-full  ">
            <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-pink-500">NEW BUSINESS</div>
            <div className="card bg-white">
                <div className="card-header  text-lg font-semibold text-gray-700">FILL UP THE INFORMATION NEEDED</div>
                <div className="p-2 md:p-3 flex flex-col w-full ">
                    {disclaimer === 1 ?<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
                        <div className="bg-gray-100 px-20 md:px-10 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                            <div className="text-2xl text-red-400 font-black tracking-widest">DISCLAIMER!</div><br></br>
                            <i>Please be advised that the Business name should be based on the registered name in DTI/SEC unless it is franchise.</i>.
                            <br></br><br></br>
                            <button className="p-1 px-2 bg-gray-200 rounded-md font-medium" onClick={(e)=>{setDisclaimer(0)}}>I understand</button>
                        </div>
                    </div> : ""}
                    <div className="w-full flex flex-col justify-start p-1w   "><button onClick={(e)=>{setTransactionType(0)}} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</button></div>
                    <form action="" method="post" className="w-full py-3 flex md:flex-col p-3 md:p-1">
                        <div className="w-full flex md:flex-row flex-col">
                            <div className="w-full md:w-1/2">
                                <span className="text-gray-400 text-xl underline">Business Information</span>
                                <input type="hidden" name="" value={transactiontype}/>
                                <div className="py-1 block">
                                    <div className={inputLabel}>Business Name</div>
                                    <input type="text" className={inputField} name="" id="" />
                                </div>
                                <div className="py-1">
                                    <div className={inputLabel}>Capital Investment</div>
                                    <input type="number" className={inputField} name="" id="" />
                                </div>
                                <div className="py-1">
                                    <div className={inputLabel}>Business Nature</div>
                                    <input type="TEXT" className={inputField} name="" id="" />
                                </div>
                                <div className="py-1">
                                    <div className={inputLabel}>Description</div>
                                    <textarea shape="square" coords="" href="" alt=""  className={inputField} />
                                </div>
                                <div className="py-1">
                                    <div className={inputLabel}>Franchise</div>
                                    <select name="franchise" id="franchise" className="bg-gray-100 p-1 ring ring-gray-200 rounded-sm w-1/3 text-gray-400 font-bold text-md tracking-widest">
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 pt-4">
                                <span className="text-gray-400 text-xl underline">Owner's Information</span>
                                <input type="hidden" name="" value={transactiontype}/>
                                <div className="py-1">
                                    <div className={inputLabel}>Owner's Name</div>
                                    <input type="text" className={inputField} name="" id="" />
                                </div>
                                <div className="py-1">
                                    <div className={inputLabel}>Contact Number</div>
                                    <input type="number" className={inputField} name="" id="" />
                                </div>
                                <div className="py-1">
                                    <div className={inputLabel}>E-mail Address</div>
                                    <input type="email" name="" id="" className={inputField} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-1 flex flex-col items-end">
                            <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{}}>Proceed</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const Renew = ({transactiontype, setTransactionType}) =>{
    return(
        <div className="w-full  ">
            <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-pink-500">RE-NEWAL OF BUSINESS PERMIT</div>
            <div className="card bg-white">
                <div className="card-header  text-lg font-semibold text-gray-700">FILL UP THE INFORMATION NEEDED</div>
            <div className="card-body p-2 md:p-3 flex flex-col md:flex-row md:justify-around">
                    <div className="w-full flex flex-col justify-start"><button onClick={(e)=>{setTransactionType(0)}} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</button></div>
                    <form action="" method="post">
                        <input type="hidden" name="" value={transactiontype}/>
                        
                    </form>
                </div>
            </div>
        </div>
    )

}

const Change = ({transactiontype, setTransactionType}) =>{
    return(
        <div className="w-full  ">
            <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-pink-500">CHANGE BUSINESS INFO</div>
            <div className="card bg-white">
                <div className="card-header  text-lg font-semibold text-gray-700">FILL UP THE INFORMATION NEEDED</div>
            <div className="card-body p-2 md:p-3 flex flex-col md:flex-row md:justify-around">
                    <div className="w-full flex flex-col justify-start"><button onClick={(e)=>{setTransactionType(0)}} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</button></div>
                    <form action="" method="post">
                        <input type="hidden" name="" value={transactiontype}/>
                        
                    </form>
                </div>
            </div>
        </div>
    )

}

const Closure = ({transactiontype, setTransactionType}) =>{
    return(
        <div className="w-full  ">
            <div className="w-full text-center tracking-widest text-2xl py-1 md:py-4 font-bold text-pink-500">CLOSURE</div>
            <div className="card bg-white">
                <div className="card-header  text-lg font-semibold text-gray-700">FILL UP THE INFORMATION NEEDED</div>
                <div className="card-body p-2 md:p-3 flex flex-col md:flex-row md:justify-around">
                    <div className="w-full flex flex-col justify-start"><button onClick={(e)=>{setTransactionType(0)}} className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Back</button></div>
                    <form action="" method="post">
                        <input type="hidden" name="" value={transactiontype}/>
                        
                    </form>
                </div>
            </div>
        </div>
    )

}

export default NewApplication
