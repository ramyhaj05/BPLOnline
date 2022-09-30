<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusinessApplicationController;

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

Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
    Route::get('/get/businessapplication/list', [BusinessApplicationController::class, 'getBusinessApplication'])->name('businessapplication.list');
    Route::get('/get/appDetails/details', [BusinessApplicationController::class, 'getApplicationDetails'])->name('appDetails.details');
    Route::post('/add/addNewBusiness', [BusinessApplicationController::class, 'store']);
    Route::get('/get/appDetails/getdet', [BusinessApplicationController::class, 'getAppDet'])->name('appDetails.getdet');
    Route::post('/upload/requirements/new', [BusinessApplicationController::class, 'UploadRequirements'])->name('upload.requirements.new');

});