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
            'year' => ['required', 'string', 'max:255'],
            'itr' => ['required', 'string', 'max:255'],
            'trans_id' => ['required', 'string', 'max:255'],
            'brgy' => ['required', 'string', 'max:255'],
        ]);
    }

    public function store(Request $request){
            try {
                $check = Renewal::where('account_number', $request->account_number)->
                where('gross_income',$request->gross_income)->
                where('year',$request->year)->first();
                if($check !== null){
                    return response()->json(['status'=>'exsist','message'=>"The Re-Newal application of Account Number $request->account_number for the year $request->year Already Exists!"]);
                }
                else{$insert = Renewal::create([
                    'account_number' => $request->account_number,
                    'gross_income' => $request->gross_income,
                    'owners_name' => $request->name,
                    'contact' => $request->contact,
                    'email' => $request->email,
                    'status' => "0",
                    'trans_id' => "",
                    'brgy' => "",
                    'itr' => "",
                    'year'=>$request->year,
                    'user_id' => $request->user_id,
                ])->id;
                return response()->json(['status'=>'success','message'=>'Success!','result'=>$insert]);}
            } catch (Error $e) {
                return response()->json(['status'=>'error','message'=>$e]);
            }
        // }
    }

    public function patch (Request $request){
        try {
            $updateDetails = Renewal::find($request->id);
            $updateDetails->account_number = $request->account_number;
            $updateDetails->gross_income = $request->gross_income;
            $updateDetails->owners_name = $request->name;
            $updateDetails->contact = $request->contact;
            $updateDetails->email = $request->email;
            $updateDetails->update();
            return response()->json(['status'=>'Success', 'message'=>'Record Successfully updated!']);
        } catch (Error $e) {
            return response()->json(['status'=>'error','message'=>'$e']);
        }
    }

    public function getReview(Request $request){
        try 
        {
            $businessapplications =  Renewal::where('id', $request->id)->where("user_id", $request->user_id)->orderBy('id', 'desc')->limit(1)->get();
            return response()->json(['status'=>'success','message'=>'Success!','result'=>$businessapplications]);
        } 
        catch (Error $e) 
        {
            return response()->json(['status'=>'error','message'=>$e]);
        }
    }

    
    public function getAllRenewal(Request $request){
        try {
            $renewalapplications = Renewal::withTrashed()->where('user_id', $request->user_id)->whereYear('created_at', $request->year)->orderBy('created_at', 'desc')->get();
            $renewalapplications = response()->json($renewalapplications);
            return response()->json(['status'=>'success','message'=>'Success!','result'=>$renewalapplications]);
        } catch (Error $e) {
            return response()->json(['status'=>'error','message'=>$e]);
        }
    }

    public function delete(Request $request){
        try {
            $deleteRenewal = Renewal::find($request->app_id);
            $deleteRenewal->status = "3";
            $deleteRenewal->update();

            $delete = Renewal::find( $request->app_id );
            $delete->delete();
            return response()->json(['status'=>'success', 'message'=>'Successfully Deleted!']);
        } catch (Error $e) {
            return response()->json(['status'=>'error', 'message'=>$e]);
        }
    }
}
