import React,{useState} from "react";

const NewForm = ({setLeasing,transactiontype}) =>{
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md";
    const [disclaimer, setDisclaimer] = useState(1);
    return(
    <div className="w-full">
        <div className="w-full p-1 flex flex-col items-end">
            <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setLeasing(0)}}>Back</div>
        </div>
        <form action="" method="post" className="w-full py-3 flex md:flex-col p-3 md:p-1">
            {disclaimer === 1 ?<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
                <div className="bg-gray-100 px-20 md:px-10 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                    <div className="text-2xl text-red-400 font-black tracking-widest">DISCLAIMER!</div><br></br>
                    <i>Please be advised that the Business name should be based on the registered name in DTI/SEC unless it is franchise.</i>.
                    <br></br><br></br>
                    <button className="p-1 px-2 bg-gray-200 rounded-md font-medium" onClick={(e)=>{setDisclaimer(0)}}>I understand</button>
                </div>
            </div> : ""}
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
        </form>
    </div>
    )
}

export default NewForm;