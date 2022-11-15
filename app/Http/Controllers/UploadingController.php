<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Uploading;
use App\Models\BusinessApplication;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class UploadingController extends Controller
{
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'type' => ['required'],
            'leasing' => ['required'],
            'insurance' => ['required'],
            'franchise' => ['required']
        ]);
    }
    public function store(Request $request){
       try {
            $appID = $request->appID;
            $year = $request->year;
            $user_id = $request->user_id;
            $user_id = $request->user_id;
            // Files/Year/01-xxx-xx
            $countappID = Str::length($appID);
            $appIDname = $appID;
            if($countappID === 1){
                $appIDname = "000".$appID;
            }
            else if($countappID === 2){
                $appIDname = "00".$appID;
            }
            else if($countappID === 3){
                $appIDname = "0".$appID;
            }
            else{
                $appIDname = "".$appID;
            }
            $directory = "/Files"."/".$year."/"."new/".$appIDname."-".$year;

            File::makeDirectory($directory, 0777, true, true);
            $dtisec = $request->file('type')->move(public_path($directory), 'DTI-SEC.pdf');
            $brgy = $request->file('brgy') ? $request->file('brgy')->move(public_path($directory), 'brgy.pdf') : "";
            $cleasetaxdec = $request->file('leasing')->move(public_path($directory), 'CLease-TaxDec.pdf');
            $insurance = $request->file('insurance')->move(public_path($directory), 'Insurance.pdf');
            $franchise = $request->file('franchise') ? $request->file('franchise')->move(public_path($directory), 'Franchise.pdf') : "";

            // $dtisec = $request->file('type')->disk('public')->storeAs($directory, 'DTI-SEC.pdf');
            // $brgy = $request->file('brgy')->disk('public')->storeAs($directory, 'brgy.pdf');
            // $cleasetaxdec = $request->file('leasing')->disk('public')->storeAs($directory, 'CLease-TaxDec.pdf');
            // $insurance = $request->file('insurance')->disk('public')->storeAs($directory, 'Insurance.pdf');
            // $franchise = $request->file('franchise')->disk('public')->storeAs($directory, 'franchise.pdf');

            // Storage::storeAs($directory, $request->file('type'), 'DTI-SEC.pdf');
            // $request->file('brgy') ? Storage::putFileAs($directory, $request->file('brgy'), 'brgy.pdf') : "";
            // Storage::putFileAs($directory, $request->file('leasing'), 'CLease-TaxDec.pdf');
            // Storage::putFileAs($directory, $request->file('insurance'), 'Insurance.pdf');
            // $request->file('franchise') ? Storage::putFileAs($directory, $request->file('franchise'), 'franchise.pdf') : "";
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
