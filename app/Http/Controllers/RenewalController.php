<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\User;
use App\Models\Renewal;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class RenewalController extends Controller
{
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'account_number' => ['required', 'string', 'max:255'],
            'gross_income' => ['required', 'number', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'contact' => ['required', 'number', '11'],
            'email' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'max:255'],
            'user_id' => ['required', 'string', 'max:255'],
        ]);
    }

    public function store(Request $request){
        $user = $request->user();
        if ($user->tokenCan('server:update')) {
            $user = User::pluck('id');
            $user_id = trim($user,'[]');
            try {
                $insert = Renewal::create([
                    'account_number' => $request->account_number,
                    'gross_income' => $request->gross_income,
                    'owners_name' => $request->name,
                    'contact' => $request->contact,
                    'email' => $request->email,
                    'status' => "0",
                    'user_id' => $user_id,
                ])->id;
                return $insert;
            } catch (Exception $e) {
                Log::error($e);
            }
        }
    }

    public function getReview(Request $request){
        $user = $request->user();
            
        $user = User::pluck('id');
        $user_id = trim($user,'[]');
        try 
        {
            $businessapplications =  Renewal::where('account_number', $request->account_number)->where("user_id", $user_id)->orderBy('id', 'desc')->limit(1)->get();
            // dd($businessapplications);
            // throw new Exception($businessapplications);
            
            return response()->json($businessapplications);
        } 
        catch (Exception $e) 
        {
            Log::error($e);
        }
    }

    public function getAllRenewal(Request $request){
        $user = $request->user();
        $user = User::pluck('id');
        $user_id = trim($user,'[]');

        $renewalapplications = Renewal::where('id',$user_id)->whereYear('created_at', $request->year)->orderBy('created_at', 'desc')->get();
        $renewalapplications = response()->json($renewalapplications);
        return $renewalapplications;
    }
}
