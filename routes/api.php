<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusinessApplicationController;
use App\Http\Controllers\UploadingController;
use App\Http\Controllers\RenewalController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    
    //fetch data
    Route::get('/get/appDetails/getdet', [BusinessApplicationController::class, 'getAppDet'])->name('appDetails.getdet');
    Route::get('/get/businessapplication/list', [BusinessApplicationController::class, 'getBusinessApplication'])->name('businessapplication.list');
    Route::get('/get/appDetails/details', [BusinessApplicationController::class, 'getApplicationDetails'])->name('appDetails.details');
    
    //actions new
    Route::post('/add/addNewBusiness', [BusinessApplicationController::class, 'store']);
    Route::post('/upload/requirements/new', [UploadingController::class, 'store'])->name('upload.requirements.new');
    Route::post('/edit/business', [BusinessApplicationController::class, 'patch'])->name('edit.business');
    Route::post('/delete/business', [BusinessApplicationController::class, 'delete'])->name('delete.business');
    
    //fetch data
    Route::get('/get/renewal/list', [RenewalController::class, 'getAllRenewal'])->name('renewal.list');
    Route::get('/get/renewal/details', [RenewalController::class, 'getReview'])->name('get.review.renewal');

    //actions renewal

    Route::post('/add/renewal', [RenewalController::class, 'store'])->name('add.renewal');
    Route::post('/edit/renewal/info', [RenewalController::class, 'patch'])->name('edit.renewal.info');

// });