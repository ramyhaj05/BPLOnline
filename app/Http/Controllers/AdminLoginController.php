<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminLoginController extends Controller
{
    public function index(){
        return view('layouts/admin/admin');
    }

    public function login(){
        return view('layouts/admin/admin');
    }
}
