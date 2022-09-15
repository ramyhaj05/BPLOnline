<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BusinessApplicationController;
use Illuminate\Support\Facades\Request;

Route::get('/', function () {

    return view('welcome');
});

Auth::routes(['verify' => true]);

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/addNew', [App\Http\Controllers\HomeController::class, 'index'])->name('addNew');
    
});

