<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function addNew()
    {
        return view('addNew');
    }
    public function editNew(){
        return view('edit');
    }
    public function dashboard(){
        return view('dashboard');
    }

    public function AuthProceed(Request $request){
        try {
            $user_id = auth('sanctum')->user()->id;
            $email = auth('sanctum')->user()->email;

            $user = User::find($user_id);
            $token = $user->createToken($email.'_Token')->plainTextToken;
            
            return response()->json([
                'username'=>$user->firstname,
                'user_id'=>$user->id,
                'token'=>$token
            ]);
        } catch (Error $error) {
            return response()->json([
                'username'=>$error,
                'token'=>$error
            ]);
        }
    }
}
