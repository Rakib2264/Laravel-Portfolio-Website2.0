 @extends('Layout.app')

@section('contant')






<div id="Maindev" class="container d-none">
<div class="row">
<div class="col-md-12 p-5">
<table id="" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">Image</th>
      <th class="th-sm">Name</th>
      <th class="th-sm">Description</th>
      <th class="th-sm">Edit</th>
      <th class="th-sm">Delete</th>
    </tr>
  </thead>
  <tbody id="service_table">
  
   
    
    
  </tbody>
</table>

</div>
</div>
</div>








<div id="loaderdev" class="container">
<div class="row">
<div class="col-md-12 p-5 text-center">
<img class="loading-icon m-5" src="{{asset('images/loader.svg')}}">
 
</div>
</div>
</div>


<div id="wrongdev" class="container d-none">
<div class="row">
<div class="col-md-12 p-5 text-center">
<h3>Somthing Went Wrong !</h3>
 
</div>
</div>
</div>

 
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document"> 
    <div class="modal-content">
      <div class="modal-body p-3 text-center">
       
       <h3 class="mt-4">Do You Want Delete ?</h3>


       <h3 id="serviceDeleteId" class="mt-4"></h3>

        


       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-primary" data-mdb-dismiss="modal">No</button>
        <button data-id="" id="serviceDeleteconfirmBtn" type="button" class="btn btn-sm btn-danger">Yes</button>
      </div>
    </div>
  </div>
</div> 






<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document"> 
    <div class="modal-content">
      <div class="modal-body p-5 text-center">
        <h5 id="serviceEditId" class="mt-5"> </h5>




        <div id="serviceEditForm" class="d-none w-100 ">

        <input id="serviceNameID" type="text" id="" class="form-control mb-4" placeholder="Service Name">

        <input id="serviceDesID" type="text" id="" class="form-control mb-4" placeholder="Service Description">

        <input id="serviceImgID" type="text" id="" class="form-control mb-4" placeholder="Service Image Link">
          
        </div>




          <img id="serviceEditLoader" class="loading-icon m-5" src="{{asset('images/loader.svg')}}">
          <h5 id="serviceEditWrong" class="d-none">Somthing Went Wrong !</h5>


       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-primary" data-mdb-dismiss="modal">Cancle</button>
        <button id="serviceeditconfirmBtn" type="button" class="btn btn-sm btn-danger">Save</button>
      </div>
    </div>
  </div>
</div> 



@endsection




@section('script')


<script type="text/javascript">
    
getServiceData();



</script>



@endsection