<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ServicsController;

 
Route::get('/',[HomeController::class,'HomeIndex']);


Route::get('/visitor',[VisitorController::class,'VisitorIndex']);




//Admin Panel Service Management

Route::get('/service',[ServicsController::class,'ServicsIndex']);

Route::get('/getServiceData',[ServicsController::class,'getServiceData']);

Route::post('/ServiceDelete',[ServicsController::class,'ServiceDelete']);

Route::post('/ServiceDetails',[ServicsController::class,'getServiceDetails']);

Route::post('/ServiceUpdate',[ServicsController::class,'ServiceUpdate']);
