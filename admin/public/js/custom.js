$(document).ready(function () {
$('#VisitorDt').DataTable();
$('.dataTables_length').addClass('bs-select');
});




function getServiceData(){

axios.get('/getServiceData')
  .then(function (response) {


    if (response.status==200) {

      $('#Maindev').removeClass('d-none');
       $('#loaderdev').addClass('d-none');
          var dataJSON=response.data;
    $.each(dataJSON, function(i, item) {
    $('<tr>').html(

      "<td><img class='table-img' src="+dataJSON[i].service_img +"></td>"+
      "<td>"+dataJSON[i].service_name +"></td>"+
      "<td>"+dataJSON[i].service_des +"></td>"+
      "<td> <a href=''><i class='fas fa-edit'></i></a> </td>"+
       "<td> <a class='serviceDeleteBtn'data-id="+dataJSON[i].id+" ><i class='fas fa-trash-alt'></i></a> </td>"
      ).appendTo('#service_table');
   });

    $('.serviceDeleteBtn').click(function(){

       var id= $(this).data('id');
       $('#serviceDeleteconfirmBtn').attr('data-id',id);
       $('#deleteModal').modal('show');

    })

    $('#serviceDeleteconfirmBtn').click(function(){


      var id= $(this).data('id');
      getServiceDelete(id);

    })

    }
    else{

        $('#loaderdev').addClass('d-none');
       $('#wrongdev').removeClass('d-none');

    }



}).catch(function (error) {
    $('#loaderdev').addClass('d-none');
    $('#wrongdev').removeClass('d-none');

});
}






function getServiceDelete(deleteID){
  axios.post('/ServiceDelete',{id:deleteID})
  .then(function(response){
    if (response.data==1) {
      alert('Success');
    }
    else{
      alert('Not Success');
    }



  })
  .catch(function(error){

  });

}