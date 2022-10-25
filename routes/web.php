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

    Route::get('/addNew', [App\Http\Controllers\HomeController::class, 'index'])->name('addNew');
    Route::get('/new-business', [App\Http\Controllers\HomeController::class, 'index'])->name('new.business');
    Route::get('/new-business/upload/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('new-business.upload');
    Route::get('/edit/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('edit.new');
    Route::get('/cancel/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('cancel.new');
    
    Route::get('/renewal', [App\Http\Controllers\HomeController::class, 'index'])->name('renewal');
    Route::get('/upload/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('upload.renewal');
    Route::get('/review/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('review.renewal');
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

    
});

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);
 
    return ['token' => $token->plainTextToken];
});

