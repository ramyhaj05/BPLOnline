<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\BusinessApplication;

class BusinessApplicationController extends Controller
{
    // get business data
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
}
