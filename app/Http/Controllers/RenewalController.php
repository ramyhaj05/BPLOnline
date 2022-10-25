<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\User;
use App\Models\Renewal;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

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
        // $user = $request->user();
        // if ($user->tokenCan('server:update')) {
            // $id = User::id;
            // $user = Auth::user();
            // $id = $user->id;
            
            try {
                $insert = Renewal::create([
                    'account_number' => $request->account_number,
                    'gross_income' => $request->gross_income,
                    'owners_name' => $request->name,
                    'contact' => $request->contact,
                    'email' => $request->email,
                    'status' => "0",
                    'user_id' => auth('sanctum')->user()->id,
                ])->id;
                return $insert;
            } catch (Error $e) {
                Log::error($e);
            }
        // }
    }

    public function getReview(Request $request){
        $user_id = auth('sanctum')->user()->id;
        try 
        {
            $businessapplications =  Renewal::where('account_number', $request->account_number)->where("user_id", $user_id)->orderBy('id', 'desc')->limit(1)->get();
            // dd($businessapplications);
            // throw new Exception($businessapplications);
            
            return response()->json($businessapplications);
        } 
        catch (Error $e) 
        {
            Log::error($e);
        }
    }

    
    public function getAllRenewal(Request $request){
        $year = $request->year;
        $user_id = auth('sanctum')->user()->id;
        try {
            // withTrashed()->where('user_id', $user_id)->whereYear('created_at', $year)->orderBy('created_at', 'desc')->get();
            // where('id',$user_id)->whereYear('created_at', $request->year)->orderBy('created_at', 'desc')->get();
            $renewalapplications = Renewal::withTrashed()->where('user_id', $user_id)->whereYear('created_at', $year)->orderBy('created_at', 'desc')->get();
            $renewalapplications = response()->json($renewalapplications);
            return $renewalapplications;
        } catch (Error $e) {
            Log::error($e);
        }
    }
}
