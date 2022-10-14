<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\User;
use App\Models\BusinessApplication;
use App\Models\Renewal;
use Illuminate\Support\Facades\Storage;
// use Illuminate\Http\File;
use Illuminate\Support\Facades\File;

class BusinessApplicationController extends Controller
{
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'business_name' => ['required', 'string', 'max:255'],
            'capital_investment' => ['required', 'string'],
            'business_address' => ['required', 'string', 'max:255'],
            'barangay' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:255'],
            'franchise' => ['required', 'string', 'max:1'],
            'business_type' => ['required', 'string', 'max:1'],
            'leasing' => ['required', 'string', 'max:1'],
            'owners_name' => ['required', 'string', 'min:255'],
            'owners_address' => ['required', 'string', 'min:255'],
            'contact' => ['required', 'string', 'max:15'],
            'email' => ['required', 'string', 'email', 'max:255'],

        ]);
    }
    public function getBusinessApplication(Request $request){
        
        $year = $request->year;
        $user = User::pluck('id');
        $user_id = trim($user,'[]');
        $mergedData = "";
        try 
        {
            $businessapplications =  BusinessApplication::where('user_id', $user_id)->whereYear('created_at', $year)->orderBy('created_at', 'desc')->get();
            $businessapplications = response()->json($businessapplications);
            // $mergedData = $businessapplications->merge($renewalapplications);
            return $businessapplications;
        } 
        catch (Exception $e) 
        {
            Log::error($e);
        }
    }

    public function getApplicationDetails(Request $request){
        // dd($request->all());
        $businessname = $request->businessname;
        $user = $request->user();
        $user = User::pluck('id');
        $user_id = trim($user,'[]');
        try 
        {
            $businessapplications =  BusinessApplication::where('business_name', $businessname)->where("user_id", $user_id)->orderBy('id', 'desc')->limit(1)->get();
            // dd($businessapplications);
            // throw new Exception($businessapplications);
            
            return response()->json($businessapplications);
        } 
        catch (Exception $e) 
        {
            Log::error($e);
        }
    }

    public function getAppDet(Request $request){
        
        $app_id = $request->app_id;
        $user = User::pluck('id');
        $user_id = trim($user,'[]');
        try 
        {
            $businessapplications =  BusinessApplication::where('id', $app_id)
            ->where('user_id', $user_id)->get();
            // dd($businessapplications);
            $businessapplications = response()->json($businessapplications);
            return $businessapplications;
        } 
        catch (Exception $e) 
        {
            Log::error($e);
        }
    }

    //store data 
    public function store(Request $request){
        $user = $request->user();
        if ($user->tokenCan('server:update')) {
            
            $user = User::pluck('id');
            $user_id = trim($user,'[]');
            try {
                $insert = BusinessApplication::create([
                    'business_name' => $request->businessname,
                    'capital_investment' => $request->capital,
                    'barangay' => $request->barangay,
                    'business_address' => $request->business_address,
                    'description' => $request->description,
                    'franchise' => $request->franchise,
                    'leasing' => $request->leasing,
                    'business_type' => $request->bType,
                    'owners_name' => $request->owners_name,
                    'owners_address' => $request->owners_address,
                    'contact' => $request->contact,
                    'email' => $request->email,
                    'user_id' => $user_id,
                    'status' => '0',
                    'trans_type' => '1',
                ])->id;
                return $insert;
            } catch (Exception $e) {
                Log::error($e);
            }
        }
    }

    public function patch(Request $request){
        try {
            $updateDetails = BusinessApplication::find($request->appID);
            $updateDetails->business_name = $request->businessname;
            $updateDetails->business_address = $request->business_address;
            $updateDetails->barangay = $request->barangay;
            $updateDetails->business_type = $request->type;
            $updateDetails->leasing = $request->leasing;
            $updateDetails->franchise = $request->franchise;
            $updateDetails->description = $request->description;
            $updateDetails->capital_investment = $request->capital;
            $updateDetails->owners_name = $request->owners_name;
            $updateDetails->owners_address = $request->owners_address;
            $updateDetails->contact = $request->contact;
            $updateDetails->email = $request->email;
            $updateDetails->update();
            return "Success";
        } catch (Error $e) {
            return $e;
        }
    }

    


}