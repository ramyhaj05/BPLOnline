import axios from "axios";
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const NewForm = ({setLeasing, leasing, transactiontype, setReview, disclaimer, setDisclaimer, newData, setNewData, franchise, bType}) =>{
    const inputField = "bg-gray-100 text-md p-1 ring ring-gray-200 rounded-sm w-2/3 text-gray-600 font-bold";
    const inputLabel = "text-gray-500 text-md";
    const brgy = ["Aplaya","Balibago","Caingin","Dila","Dita","Don Jose","Ibaba","Kanluran","Labas","Macabling","Malitlit","Malusak","Market Area","Pooc","Pulong Santa Cruz","Sinalhan","Sto. Domingo","Tagapo"];
    // const [disabled, setDisabled] = useState("1");
    const proceed = async event =>{
        event.preventDefault();
            setDisclaimer(1);
            const newApplication = new FormData();
            newApplication.append('businessname', newData.businessname)
            newApplication.append('business_address', newData.businessaddress)
            newApplication.append('barangay', newData.barangay)
            newApplication.append('capital', newData.capital)
            newApplication.append('description', newData.description)
            newApplication.append('owners_name', newData.owners_name)
            newApplication.append('owners_address', newData.owners_address)
            newApplication.append('contact', newData.contact)
            newApplication.append('email', newData.email)
            newApplication.append('leasing', leasing)
            newApplication.append('franchise', franchise)
            newApplication.append('bType', bType)
            const addData = await axios({
                method: "post",
                url: "/api/add/addNewBusiness",
                data: newApplication,
                headers: { "Content-Type": "multipart/form-data" },
              }).then(()=>{
                setTimeout(() => {
                    setReview(1);
                    setDisclaimer(0)
                }, 3000);
            }).catch((error)=>{
                console.log(error);
            });
    }
    return(
    <div className="w-full md:p-5 p-1">
        <form method="post" id="newApp" name='newApp' className="w-full py-3 flex md:flex-col p-3 md:p-1" onSubmit={proceed}>
            {disclaimer === 1 ?<div className="fixed left-0 top-0 w-full h-full transparent flex flex-col items-center justify-center bg-white/50 bg-opacity-1">
                <div className="bg-gray-100 rounded ring ring-white w-3/4 md:w-1/2 p-2 text-lg text-center tracking-widest font-medium text-gray-700 mb-32 shadow-lg">
                    <ScaleLoader
                    color="#36d7b7"
                    margin={10}
                    />
                </div>
            </div> : ""}
            
            <div className="w-full flex md:flex-row flex-col flex-wrap">
                <div className="w-full md:w-1/2 pt-4 md:pt-0">
                    <span className="text-gray-400 text-xl underline">Business Information</span>
                    <input type="hidden" name="" value={transactiontype}/>
                    <div className="py-1 block">
                        <div className={inputLabel}>Business Name</div>
                        <input type="text" className={inputField} name="businessname" id="" onChange={(e)=>{setNewData({...newData, businessname: e.target.value})}} required/>
                    </div>
                    <div className="py-1 block">
                        <div className={inputLabel}>Business Address </div>
                        <div className="p-2">
                            <select name="barangay" id="barangay" className={inputField} onChange={(e)=>{setNewData({...newData, barangay: e.target.value})}} required>
                                <option value="">- Select Barangay -</option>
                                {brgy.map(object=>
                                    <option value={object} key={object}>{object}</option>
                                )}
                            </select>
                        </div>
                        <div className="p-2">
                            <input type="text" className={inputField+" tracking-widest"} name="business_address" id="" placeholder="Unit/Sub/Blk/Lot" onChange={(e)=>{setNewData({...newData, businessaddress: e.target.value})}} required/>
                        </div>
                    </div>
                    
                    <div className="py-1">
                        <div className={inputLabel}>Capital Investment</div>
                        <input type="number" className={inputField} name="capital" id="" onChange={(e)=>{setNewData({...newData, capital: e.target.value})}} required/>
                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>Description</div>
                        <textarea shape="square" coords="" href="" alt=""  name="description" className={inputField} onChange={(e)=>{setNewData({...newData, description: e.target.value})}} required/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pt-4 md:pt-0">
                    <span className="text-gray-400 text-xl underline">Owner's Information</span>
                    <input type="hidden" name="" value={transactiontype}/>
                    <div className="py-1">
                        <div className={inputLabel}>Owner's Name</div>
                        <input type="text" className={inputField} name="owners_name" id="" onChange={(e)=>{setNewData({...newData, owners_name: e.target.value})}} required/>
                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>Owner's/Company Address</div>
                        <input type="text" className={inputField+" tracking-widest"} name="owners_address" id="" onChange={(e)=>{setNewData({...newData, owners_address: e.target.value})}} required/>

                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>Contact Number</div>
                        <input type="contact" className={inputField} name="" id="" onChange={(e)=>{setNewData({...newData, contact: e.target.value})}} required/>
                    </div>
                    <div className="py-1">
                        <div className={inputLabel}>E-mail Address</div>
                        <input type="email" name="" id="" className={inputField} onChange={(e)=>{setNewData({...newData, email: e.target.value})}} required/>
                    </div>
                </div>
                <div className="w-full p-1 flex flex-row justify-between">
                    <div className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center" onClick={(e)=>{setLeasing(0)}}>Back</div>
                    <button type="submit" className="bg-gray-200 shadow border-2 border-white shadow-gray-500 p-1 rounded w-20 text-gray-500 font-bold hover:cursor-pointer text-center">Proceed</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default NewForm;