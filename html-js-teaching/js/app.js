var basePath= "http://146.83.216.162:8080/";

var data = [
    ["Nombre 1", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 2", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 3", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 4", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 5", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 6", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"]
];

var ide = 0;

var addCard = function (firstName,Content, Link, id) {
    var card = '<div  class="col s4" id="'+id+'">' +
        '<div class="card small">' +
        '<div class="card-image">' +
        '<img src="'+ Link +'">' +
        '<span class="card-title" >' + firstName + '</span>' +
        '</div>' +
        '<div class="card-content">' +
        '<p>'+Content + '</p>' +
        '</div>' +
        '<div class="card-action">' +
        '<a class="delete" href="#">Borrar</a>' +
        '<a class="edit" href="#">Editar</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    $('#wrapper').append(card);
    
};

var reset = function () {
    $("#wrapper").html("");
    for (var i = 0; i < data.length; i++) {
            addCard(data[i][0],data[i][1],data[i][2],i);
        }

        $(".delete").click(function () {
            var id = $(this).parent().parent().parent().attr("id");
            $(this).parent().parent().parent().remove();
            data.splice(id,1);
            reset();
        });
        $(".edit").click(function () {
            var id = $(this).parent().parent().parent().attr("id");
            editCard(id,data[id][0],data[id][1],data[id][2]);

        });

        //alert(data);
    
};

var editCard = function (id,Name,Content,Link) {
  var ventana = '<div class="ventana_flotante">'+
                            
                            '<a class="waves-effect waves-light btn" id="save-btn" href="#">Guardar</a>' + 
                            
                            '<div class="rowflot">'+
                            '<div class="input-field col s8">'+
                                '<input value="'+ Name +'" id="name" type="text" class="validate">'+
                                '<label class="active" for="name">Nombre</label>'+
                            '</div>'+
                            '<div class="input-field col s8">'+
                                '<input value="'+Content+'" id="content" type="text" class="validate">'+
                                '<label class="active" for="content">Contenido</label>'+
                            '</div>'+
                            '<div class="input-field col s8">'+
                                '<input value="'+Link+'" id="img" type="text" class="validate">'+
                                '<label class="active" for="img">Link Imagen</label>'
                            '</div>' +                            
                        '</div>'+    

                        '</div>';
            $('#wrapper').append(ventana);

            $("#save-btn").click(function () {
                var name = $("#name").val();
                var content = $("#content").val();
                var link = $("#img").val();
                saveCard(id,name,content,link);

        });

    
};

var saveCard = function (id,Name, Content,Link) {
    data[id][0] = Name;
    data[id][1] = Content;
    data[id][2] = Link;
    reset();

}

$(document).ready(function (){
    
    //$('.modal-trigger').leanModal();

   

    $("#show-btn").click(function () {
        reset();
    });

    $("#clean-btn").click(function () {
        
        $("#wrapper").html("");
        //data.splice(0,data.length);
    })

    $("#add-btn").click(function () {
        var id = data.length + 1;
        data.push(["Nombre ", "Contenido de la carta","http://www.imagen.com.mx/assets/img/imagen_share.png"]);
        addCard(data[data.length-1][0],data[data.length-1][1],data[data.length-1][2]);
    })


    

    

});