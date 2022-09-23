<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\User;
use App\Models\BusinessApplication;

class BusinessApplicationController extends Controller
{
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'business_name' => ['required', 'string', 'max:255'],
            'capital_investment' => ['required', 'string', 'max:10'],
            'description' => ['required', 'string', 'max:255'],
            'franchise' => ['required', 'string', 'max:1'],
            'business_type' => ['required', 'string', 'max:1'],
            'leasing' => ['required', 'string', 'max:1'],
            'owner_name' => ['required', 'string', 'min:255'],
            'contact' => ['required', 'string', 'max:11'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);
    }
    public function getBusinessApplication(Request $request){
        
        $year = $request->year;
        $user = User::pluck('id');
        $user_id = trim($user,'[]');
        try 
        {
            $businessapplications =  BusinessApplication::where('user_id', $user_id)->whereYear('created_at', $year)->orderBy('created_at', 'desc')->get();
            return response()->json($businessapplications);
        } 
        catch (Exception $e) 
        {
            Log::error($e);
        }
    }

    public function getApplicationDetails(Request $request){
        // dd($request->all());
        $businessname = $request->businessname;
        try 
        {
            $businessapplications =  BusinessApplication::where('business_name', $businessname)->orderBy('id', 'desc')->limit(1)->get();
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
            return response()->json($businessapplications);
        } 
        catch (Exception $e) 
        {
            Log::error($e);
        }
    }

    //store data 
    public function store(Request $request){
        // throw new Exception($request->businessname);

            $businessname = $request->businessname;
            $capital = $request->capital;
            $description = $request->description;
            $ownersname = $request->ownersname;
            $contact = $request->contact;
            $email = $request->email;
            $franchise = $request->franchise;
            $leasing = $request->leasing;
            $bType = $request->bType;
            $user = User::pluck('id');
            $user_id = trim($user,'[]');
            
            
        try {
            
            $insert = BusinessApplication::create([
                'business_name' => $businessname,
                'capital_investment' => $capital,
                'description' => $description,
                'franchise' => $franchise,
                'leasing' => $leasing,
                'business_type' => $bType,
                'owner_name' => $ownersname,
                'contact' => $contact,
                'email' => $email,
                'user_id' => $user_id,
                'status' => '0',
            ])->id;
            return $insert;
        } catch (Exception $e) {
            Log::error($e);
        }
    }


}