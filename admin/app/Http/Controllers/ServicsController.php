<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServicesModel;

class ServicsController extends Controller
{
     function  ServicsIndex(){

        return view('Services');
    }




    function getServiceData(){
        $result=json_encode(ServicesModel::all());
        return $result;

    }

     function getServiceDetails(Request $req){

        $id=$req->input('id');
        $result=json_encode(ServicesModel::where('id','=', $id)->get());
        return $result;

    }







      function ServiceDelete(Request $req){
        $id=$req->input('id');
        $result=ServicesModel::where('id','=', $id)->delete();
       
        if($result==true){
            return 1;

        }
        else{
            return 0;
        }

    }


     function ServiceUpdate(Request $req){
        $id=$req->input('id');
        $name=$req->input('name');
        $des=$req->input('des');
        $img=$req->input('img');
        $result=ServicesModel::where('id','=', $id)->update(['service_name'=>$name, 'service_des'=>$des, 'service_img'=>$img]);



       
        if($result==true){
            return 1;

        }
        else{
            return 0;
        }

    }
}

