<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BusinessApplicationController;
use Illuminate\Support\Facades\Request;

Route::get('/', function () {

    return view('welcome');
});

Auth::routes(['verify' => true]);

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/addNew', [App\Http\Controllers\HomeController::class, 'addNew'])->name('addNew');
    Route::get('/new-business', [App\Http\Controllers\HomeController::class, 'index'])->name('new.business');
    Route::get('/new-business/upload/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('new-business.upload');
    Route::get('/edit/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('edit.new');
    Route::get('/renewal', [App\Http\Controllers\HomeController::class, 'index'])->name('renewal');
    // Route::get('/renewal/form', [App\Http\Controllers\HomeController::class, 'index'])->name('renewal.form');
    Route::get('/renewal/upload/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('renewal.upload');

    
});

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);
 
    return ['token' => $token->plainTextToken];
});

