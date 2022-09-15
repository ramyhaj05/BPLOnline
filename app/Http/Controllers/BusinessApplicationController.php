<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
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
            'leasing' => ['required', 'string', 'max:1'],
            'owner_name' => ['required', 'string', 'min:255'],
            'contact' => ['required', 'string', 'max:11'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);
    }
    public function getBusinessApplication(){
        try 
        {
            $businessapplications =  BusinessApplication::orderBy('id', 'desc')->get();
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
        try {
            
            BusinessApplication::create([
                'business_name' => $businessname,
                'capital_investment' => $capital,
                'description' => $description,
                'franchise' => $franchise,
                'leasing' => $leasing,
                'owner_name' => $ownersname,
                'contact' => $contact,
                'email' => $email,
            ]);
            return "OK";
        } catch (Exception $e) {
            Log::error($e);
        }
    }


}