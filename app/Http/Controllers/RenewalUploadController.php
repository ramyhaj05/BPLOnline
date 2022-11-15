<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\RenewalUploading;
use App\Models\Renewal;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class RenewalUploadController extends Controller
{
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'gross_income' => ['required'],
            'insurance' => ['required']
        ]);
    }
    public function store(Request $request){
       try {
            $appID = $request->appID;
            $year = $request->year;
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
            $directory = "/Files"."/".$year."/"."renewal/".$appIDname."-".$year;

            File::makeDirectory($directory, 0777, true, true);
            $gross_income = $request->file('gross_income')->move(public_path($directory), 'Gross.pdf');
            $brgy = $request->file('brgy') ? $request->file('brgy')->move(public_path($directory), 'brgy.pdf') : "";
            $ITR = $request->file('itr') ? $request->file('itr')->move(public_path($directory), 'ITR.pdf') : "";
            $insurance = $request->file('insurance')->move(public_path($directory), 'Insurance.pdf');
            
            //updating of status
            $update = Renewal::find($appID);
            $request->file('brgy') ? $update->brgy = "1": "0";
            $request->file('itr') ? $update->itr = "1": "0";
            $update->status = "1";
            $update->trans_id = $request->trans_id;
            $update->update();
            return "Success";
       } catch (Error $e) {
            return $e;
       }
    
    }
}
