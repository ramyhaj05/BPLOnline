<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BusinessApplicationController;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\AdminLoginController;
Route::get('/', function () {

    return view('welcome');
});

Auth::routes(['verify' => true]);
Route::get('/user-login', [App\Http\Controllers\HomeController::class, 'index'])->name('user-login');
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::middleware(['auth:sanctum', 'verified'])->group (function () {

    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    // new
    Route::get('/addNew', [App\Http\Controllers\HomeController::class, 'index'])->name('addNew');
    Route::get('/new-business', [App\Http\Controllers\HomeController::class, 'index'])->name('new.business');
    Route::get('/new-business/upload/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('new-business.upload');
    Route::get('/edit/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('edit.new');
    Route::get('/cancel/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('cancel.new');
    Route::get('/status/new/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('new.renewal');
    
    // renewal
    Route::get('/renewal', [App\Http\Controllers\HomeController::class, 'index'])->name('renewal');
    Route::get('/upload/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('upload.renewal');
    Route::get('/review/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('review.renewal');
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
    Route::get('/edit/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('edit.renewal');
    Route::get('/cancel/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('cancel.renewal');
    Route::get('/status/renewal/{id}', [App\Http\Controllers\HomeController::class, 'index'])->name('status.renewal');

    //admin
    Route::get('/admin/login', [App\Http\Controllers\AdminLoginController::class, 'loginPage'])->name('admin.login');
    Route::post('/login/admin', [App\Http\Controllers\AdminLoginController::class, 'login'])->name('login.admin');

    Route::middleware(['auth','verified'])->group(function(){
        Route::get('/dashboard/admin', [App\Http\Controllers\AdminLoginController::class, 'index'])->name('dashboard.admin');
        // list
        Route::get('/forverification/admin', [App\Http\Controllers\AdminLoginController::class, 'ForeVerification'])->name('forverification.admin');
        Route::get('/new/verification/{id}', [App\Http\Controllers\AdminLoginController::class, 'VerificationNew'])->name('new.verification');
        Route::get('/renew/verification/{id}', [App\Http\Controllers\AdminLoginController::class, 'VerificationRenew'])->name('renew.verification');
    });
// });

Route::get('/auth/proceed',[App\Http\Controllers\HomeController::class, 'AuthProceed'])->name('auth.proceed');

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);
 
    return ['token' => $token->plainTextToken];
});
