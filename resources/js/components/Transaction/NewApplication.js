import React, { useState } from "react";
import NewBusiness from "../TransactionType/New/NewBusiness";
const NewApplication = () =>{
    const [transactiontype, setTransactionType] = useState(0);
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                {transactiontype === 0 ? <Select setTransactionType={setTransactionType}/> : ""}
                {transactiontype === 1 ? <NewBusiness setTransactionType={setTransactionType} transactiontype={transactiontype} /> : ""}
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
