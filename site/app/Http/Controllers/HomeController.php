<?php

namespace App\Http\Controllers;

//use App\Models\User;
use App\Models\VisitorModel;//model worting new style
use App\Models\ServicesModel;
use Illuminate\Http\Request;
//use App\VisitorModel;
class HomeController extends Controller
{
    function  HomeIndex(){

        $UserIP=$_SERVER['REMOTE_ADDR'];//User ip get
        date_default_timezone_set("Asia/Dhaka");//user ip address visiting time get
        $timeDate=date("Y-m-d h:i:sa");

        VisitorModel::insert(['ip_address'=>$UserIP,'visit-time'=>$timeDate]);

        $ServicesData=json_decode(ServicesModel::all());

        return view('Home',['ServicesData'=>$ServicesData]);
    }
}
