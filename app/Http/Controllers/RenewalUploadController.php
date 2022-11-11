<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RenewalUploadController extends Controller
{
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'gross_income' => ['required'],
            'itr' => ['required'],
            'brgy' => ['required'],
            'franchise' => ['required']
        ]);
    }
    public function store(Request $request){
       try {
            $appID = $request->appID;
            $year = $request->year;
            $user_id = $request->user_id;
            // Files/Year/01-xxx-xx
            $directory = "/Files"."/".$year."/"."new/".$appID.$user_id;

            File::makeDirectory($directory, 0777, true, true);
            $dtisec = $request->file('type')->move(public_path($directory), 'DTI-SEC.pdf');
            $brgy = $request->file('brgy') ? $request->file('brgy')->move(public_path($directory), 'brgy.pdf') : "";
            $cleasetaxdec = $request->file('leasing')->move(public_path($directory), 'CLease-TaxDec.pdf');
            $insurance = $request->file('insurance')->move(public_path($directory), 'Insurance.pdf');
            $franchise = $request->file('franchise') ? $request->file('franchise')->move(public_path($directory), 'Franchise.pdf') : "";
            
            //updating of status
            $update = BusinessApplication::find($appID);
            $request->file('brgy') ? $update->brgyClearance = "1": "0";
            $update->status = "1";
            $update->trans_id = $request->trans_id;
            $update->update();
            return "Success";
       } catch (Error $e) {
            return $e;
       }
    
    }
}
