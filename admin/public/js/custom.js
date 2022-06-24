//Visitor Page Table
$(document).ready(function() {
    $('#VisitorDt').DataTable();
    $('.dataTables_length').addClass('bs-select');
});



//For Service Table
function getServiceData() {

    axios.get('/getServiceData')
        .then(function(response) {


            if (response.status == 200) {

                $('#Maindev').removeClass('d-none');
                $('#loaderdev').addClass('d-none');

                $('#service_table').empty();
                var dataJSON = response.data;
                $.each(dataJSON, function(i, item) {
                    $('<tr>').html(

                        "<td><img class='table-img' src=" + dataJSON[i].service_img + "></td>" +
                        "<td>" + dataJSON[i].service_name + "></td>" +
                        "<td>" + dataJSON[i].service_des + "></td>" +
                        "<td> <a  class='serviceeditBtn'  data-id=" + dataJSON[i].id + " ><i class='fas fa-edit'></i></a> </td>" +
                        "<td> <a class='serviceDeleteBtn' data-id=" + dataJSON[i].id + " ><i class='fas fa-trash-alt'></i></a> </td>"
                    ).appendTo('#service_table');
                });



                //Services Table Delete Icon Click

                $('.serviceDeleteBtn').click(function() {

                    var id = $(this).data('id');

                    $('#serviceDeleteId').html(id);
                    $('#deleteModal').modal('show');

                })
                //Services delete Model Yes Button

                $('#serviceDeleteconfirmBtn').click(function() {
                    var id = $('#serviceDeleteId').html();
                    ServiceDelete(id);

                })


                //Services table Edit Icon Click


                 $('.serviceeditBtn').click(function() {


                    var id=$(this).data('id');


                    $('#serviceEditId').html(id);
                    ServiceUpdateDetails(id);
                     
                    $('#editModal').modal('show');

                })


                  //Services edit Model save Button

                $('#serviceeditconfirmBtn').click(function() {
                    var id = $('#serviceEditId').html();
                    var name = $('#serviceNameID').val();
                    var des = $('#serviceDesID').val();
                    var img = $('#serviceImgID').val();
                    ServiceUpdate(id,name,des,img);

                })



                    

                      



            } else {

                $('#loaderdev').addClass('d-none');
                $('#wrongdev').removeClass('d-none');

            }



        }).catch(function(error) {
            $('#loaderdev').addClass('d-none');
            $('#wrongdev').removeClass('d-none');

        });
}


//service Delete

function ServiceDelete(deleteID) {
    axios.post('/ServiceDelete', {
            id: deleteID
        })
        .then(function(response) {
            if (response.data == 1) {
                $('#deleteModal').modal('hide');
                toastr.success('Delete Success');
                getServiceData();
            } else {
                $('#deleteModal').modal('hide');
                toastr.error('Delete Fail');
                getServiceData();

            }



        })
        .catch(function(error) {

        });

}

//each service Update Details

function ServiceUpdateDetails(detailsID) {
    axios.post('/ServiceDetails', {
            id: detailsID
        })
        .then(function(response) {
            if (response.status==200) {


                $('#serviceEditForm').removeClass('d-none');

                $('#serviceEditLoader').addClass('d-none');
                var jsonData=response.data;
                $('#serviceNameID').val(jsonData[0].service_name);

                $('#serviceDesID').val(jsonData[0].service_des);

                $('#serviceImgID').val(jsonData[0].service_img);
            }
            else{
                   $('#serviceEditLoader').addClass('d-none');
                   $('#serviceEditWrong').removeClass('d-none');

            }





        })
        .catch(function(error) {
            $('#serviceEditLoader').addClass('d-none');
            $('#serviceEditWrong').removeClass('d-none');

        });

}



//each service Update Details

function ServiceUpdate(serviceID, serviceName, serviceDes, serviceImg) {
    axios.post('/ServiceUpdate', {
            id: serviceID,
            name: serviceName,
            des: serviceDes,
            img: serviceImg,
        })
        .then(function(response) {

             
 
        })
        .catch(function(error) {

        });

}




  
