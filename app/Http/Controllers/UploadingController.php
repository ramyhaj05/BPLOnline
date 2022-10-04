<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Uploading;
use App\Models\BusinessApplication;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

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
            $directory = "/Files"."/".$year."/".$appID;
            File::makeDirectory($directory, 0777, true, true);
            Storage::putFileAs($directory, $request->file('type'), 'DTI-SEC.pdf');
            $request->file('brgy') ? Storage::putFileAs($directory, $request->file('brgy'), 'brgy.pdf') : "";
            Storage::putFileAs($directory, $request->file('leasing'), 'CLease-TaxDec.pdf');
            Storage::putFileAs($directory, $request->file('insurance'), 'Insurance.pdf');
            $request->file('franchise') ? Storage::putFileAs($directory, $request->file('franchise'), 'franchise.pdf') : "";
            $update = BusinessApplication::find($appID);
            $update->status = "1";
            $update->update();
            return "Success";
       } catch (error $e) {
            return $e;
       }
    
}
}