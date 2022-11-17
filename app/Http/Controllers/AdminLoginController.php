<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BusinessApplication;
use App\Models\Renewal;
use Illuminate\Database\Eloquent\Collection;
class AdminLoginController extends Controller
{
    public function loginPage(){
        return view('layouts/admin/admin-login');
    }

    public function login(Request $request){
        
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $user = Auth::attempt($credentials);
            $newBusiness = BusinessApplication::where('status','=', '1')->get()->toArray();
            // dd($newBusiness);
            // return Auth::user()->usertype === "admin" ? redirect()->intended('dashboard/admin') : dd("Please contact administator!");
            return Auth::user()->usertype === "admin" ? redirect()->intended('dashboard/admin') : "<h1>404 page not found.</h1>";
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function index(){
        return view('layouts/admin/admin-dashboard');
    }

    public function ForeVerification(){
        $newBusiness = BusinessApplication::where('status','=', '1')->get()->toArray();
        $newbusinesscount = BusinessApplication::where('status','=', '1')->count();
        $renewal = Renewal::where('status','=', '1')->get()->toArray();
        $renewalcount = Renewal::where('status','=', '1')->count();
        return view('layouts/admin/admin-list',['newBusiness'=>$newBusiness,'renewal'=>$renewal, 'newbusinesscount'=>$newbusinesscount, 'renewalcount'=>$renewalcount]);
    }

    
    // public function __construct(Request $request)
    // {
    //     if($request->id){
    //         $userid = $request->id;
    //         $user = User::find($userid);
    //         $user->tokens()->where('tokenable_id', $userid)->delete();
    //     }
    //     $this->middleware('guest')->except('logout');
    // }
}

