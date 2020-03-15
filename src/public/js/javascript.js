
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;




// funcion para agregar contactos
function add_contactos(){
  //a++;
  var cant= document.getElementById("padre_contactos").children.length//Variable que verifica cuantos contactos hay
  var div = document.createElement('div');
  div.setAttribute('class', 'card bg bg-light');
  div.setAttribute('id', 'contactos_completos');

  
      div.innerHTML = ` 
           
      <label for="div-contacto">contacto ${cant+1}</label>
                                <div class="card" id="div-contacto">
                                    <div class="card-body">
                                        <div class="form-row">
                                            <div class="form-group">
                                                <label for="nombre_codeudor">Nombre</label>
                                                <input class="form-control form-control-sm" type="text" name="contacto_nombre"
                                                    id="nombre_contacto" placeholder="Inserte un Nombre">
                                            </div>

                                            <div class="form-group">
                                                <label for="nombre_codeudor">Cedula</label>
                                                <input class="form-control form-control-sm" type="text" name="contacto_cedula"
                                                    id="cedula_contacto" placeholder="Inserte un No cedula">
                                            </div>

                                            


                                            <div class="form-group">
                                                <label for="nombre_codeudor">email</label>
                                                <input class="form-control form-control-sm" type="email" name="contacto_email"
                                                    id="email_contacto" placeholder="Inserte un email">
                                            </div>
                                            
                                            <div class="form-row" id="padre_celdinamico_contacto${cant}">

                                                    <div class="form-group" >
                                                        <label for="nombre_codeudor">Celular</label>
                                                        <input class="form-control form-control-sm" type="text" name="contacto_celular${cant+1}"
                                                         id="celular_contacto" placeholder="Inserte No Celular">
                                                        </div>
                                            </div>
                                            <div class="form-row" id="padre_celdinamico_contacto${cant}">

                                                    <div class="form-group" >
                                                        <label for="nombre_codeudor">Celular</label>
                                                        <input class="form-control form-control-sm" type="text" name="contacto_celular${cant+1}"
                                                         id="celular_contacto" placeholder="Inserte No Celular">
                                                        </div>
                                            </div>
                                            <div class="form-row" id="padre_celdinamico_contacto${cant}">

                                                    <div class="form-group" >
                                                        <label for="nombre_codeudor">Celular</label>
                                                        <input class="form-control form-control-sm" type="text" name="contacto_celular${cant+1}"
                                                         id="celular_contacto" placeholder="Inserte No Celular">
                                                        </div>
                                            </div>
                                            <div class="form-row" id="padre_celdinamico_contacto${cant}">

                                                    <div class="form-group" >
                                                        <label for="nombre_codeudor">Celular</label>
                                                        <input class="form-control form-control-sm" type="text" name="contacto_celular${cant+1}"
                                                         id="celular_contacto" placeholder="Inserte No Celular">
                                                        </div>
                                            </div>
                                            <div class="form-row" id="padre_celdinamico_contacto${cant}">

                                                    <div class="form-group" >
                                                        <label for="nombre_codeudor">Celular</label>
                                                        <input class="form-control form-control-sm" type="text" name="contacto_celular${cant+1}"
                                                         id="celular_contacto" placeholder="Inserte No Celular">
                                                        </div>
                                            </div>
                                                                              
                                        </div>
                                    </div>
                                </div>
         `     
      document.getElementById('padre_contactos').appendChild(div);
      //document.getElementById("label_numero").innerText=`Observaciones ${a}`;
console.log(` esta es la cant ${cant}`)
     
}
 


function remover_contactos(){
  $("#contactos_completos:last-child").remove()
 
}




/* // funcion para agregar celular dinamico contacto


function add_celulardinamico_contacto(){
var cant= document.getElementById("padre_contactos").children.length//Variable que verifica cuantos contactos hay
  e++;
  var cant= document.getElementById("padre_contactos").children.length//Variable que verifica cuantos contactos hay
  var div = document.createElement('div');
  div.setAttribute('class', 'form-group ');
  div.setAttribute('id', `celdinamico_contacto${cant}`);
  
      div.innerHTML = `
                          <label for="nombre_codeudor">Celular</label>
                          <input class="form-control form-control-sm" type="text" name="contacto_celular${cant}"  placeholder="Inserte No Celular">

                      `
       document.getElementById(`padre_celdinamico_contacto${cant-1}`).appendChild(div);
      //document.getElementById("label_numero").innerText=`Observaciones ${a}`;
      console.log(cant)
}




//funcion para remover celular dinamico contacto
function remover_celulardinamico_contacto(){
  var cant= document.getElementById("padre_contactos").children.length//Variable que verifica cuantos contactos hay
  $(`#celdinamico_contacto${cant}:last-child`).remove()//esta funcion accede a todos los elementos con id celcontacto y borra el que es ultimo hijo de su padre
 console.log(cant)
}




 */


// funcion para agregar medidas
function add_medidas(){
    b++;

    var div = document.createElement('div');
    div.setAttribute('class', 'form-inline');
    div.setAttribute('id', 'div_medidas');
    
        div.innerHTML = `
        
        <label for="textarea_medidas">Medidas Cautelares</label>
        <textarea class="form-control form-control-sm" name="medidas" id="textarea_medidas" cols="50 " rows="3"></textarea>`
       
       
        document.getElementById('medidas').appendChild(div);
        //document.getElementById("label_numero").innerText=`Observaciones ${a}`;
}


// funcion para agregar observaciones
function add_observaciones(){
        a++;

        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline');
        div.setAttribute('id', 'div_observa');

        
            div.innerHTML = `<label for="textarea_medidas">Observaciones</label>
            <textarea class="form-control form-control-sm" name="observaciones" id="textarea_observaciones" cols="50 " rows="3"></textarea>`
           
            document.getElementById('observaciones').appendChild(div);
            //document.getElementById("label_numero").innerText=`Observaciones ${a}`;

}



// funcion para agregar actuaciones
function add_actuacion(){
    b++;

    var div = document.createElement('div');
    div.setAttribute('class', 'form-inline');
    $(div).attr('id','div_actuaciones');
    
        div.innerHTML = `<label for="textarea_actuaciones">Actuacion</label>
        <textarea class="form-control form-control-sm" name="actuaciones" id="textarea_actuaciones" cols="50 " rows="3"></textarea>`
       
        document.getElementById('actuacion').append(div);
        //document.getElementById("label_numero").innerText=`Observaciones ${a}`;
}


// funcion para agregar impulsos
function add_impulso(){
    d++;

    var div = document.createElement('div');
    div.setAttribute('class', 'form-inline');
    $(div).attr('id','div_impulsos')
    
        div.innerHTML = `<label for="textarea_impulso_procesal">
        Impulso Procesal</label><textarea class="form-control form-control-sm" name="impulsos" id="textarea_impulso_procesal" cols="50" rows="3"></textarea>`
       
        document.getElementById('impulso').appendChild(div);
        //document.getElementById("label_numero").innerText=`Observaciones ${a}`;
}



function addattr(){
  var a = document.getElementById('input_etapa');
  a.setAttribute('name', a.value)


}

function pruebaclick(){

  console.log('evento click')
}


// funcion para remover medidas cautelares
function removerMedida(){


  var seleccionados= document.querySelectorAll("#div_medidas");//Este codigo selecciona todos los div con clase div_observa
  var ultimodiv = seleccionados[seleccionados.length-1];//La linea anterior genera un array, con esta linea accedo al ultimo elemento del array.
  ultimodiv.parentNode.removeChild(ultimodiv);//Con este codigo remuevo el div seleccionado.
  
  }
// funcion para remover actuaciones
function removerActuacion(){


  var seleccionados= document.querySelectorAll("#div_actuaciones");//Este codigo selecciona todos los div con clase div_observa
  var ultimodiv = seleccionados[seleccionados.length-1];//La linea anterior genera un array, con esta linea accedo al ultimo elemento del array.
  ultimodiv.parentNode.removeChild(ultimodiv);//Con este codigo remuevo el div seleccionado.
  
  }

  // funcion para remover impulsos
function removerImpulso(){


  var seleccionados= document.querySelectorAll("#div_impulsos");//Este codigo selecciona todos los div con clase div_observa
  var ultimodiv = seleccionados[seleccionados.length-1];//La linea anterior genera un array, con esta linea accedo al ultimo elemento del array.
  ultimodiv.parentNode.removeChild(ultimodiv);//Con este codigo remuevo el div seleccionado.
  
  }
// funcion para remover observaciones
function removerObservacion(){


var seleccionados= document.querySelectorAll("#div_observa");//Este codigo selecciona todos los div con clase div_observa
var ultimodiv = seleccionados[seleccionados.length-1];//La linea anterior genera un array, con esta linea accedo al ultimo elemento del array.
ultimodiv.parentNode.removeChild(ultimodiv);//Con este codigo remuevo el div seleccionado.

}






function verpadre() {
  var x = document.getElementById("div_observa").parentNode.nodeName;
  document.getElementById("demo").innerHTML = x;
}


  function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, j, visible;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      visible = false;
      /* Obtenemos todas las celdas de la fila, no sólo la primera */
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          visible = true;
        }
      }
      if (visible === true) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  

            


// funcion para agregar celular dinamico cliente
function add_celulardinamico_cliente(){
  e++;

  var div = document.createElement('div');
  div.setAttribute('class', 'form-group col-md-2');
  div.setAttribute('id', 'div_teldinamico');

  
      div.innerHTML = `<label for="input_Celular">Celular</label>
      <input type="tel" name="tel" id="input_Celular" cols="90" class="form-control" placeholder="Insert un # telefonico">`
     
      document.getElementById('celdinamico_cliente').appendChild(div);
      //document.getElementById("label_numero").innerText=`Observaciones ${a}`;

}



   $("#Cliente").one("change", function(){
     //let Dato_Cliente= $("#Cliente").val()
  if ($("#Cliente").val() === "FGI" || $("#Cliente").val() === "AvalCrear"  ){
    $("#div_insertar_demandante").after(`<div class="form-group col-md-2">
    <label for="input_Nombre">Demandante</label>
    <input type="text"  name="nombre_demandante" id="input_Nombre" placeholder="Inserte un nombre" class="form-control" >
</div>

<div class="form-group col-md-1,5">
    <label for="input_Cedula">Cedula o Nit</label>
    <input type="text" pattern = "\\d+\\-\\d+" name="cedula_demandante" id="input_Cedula" cols="80" class="form-control" placeholder="Inserte una cedula">
</div>`);
  
   } });
   
  
// funcion para agregar codeudores
function add_codeudores(){
  //a++;
cant= document.getElementById("codeudores").children.length
  var div = document.createElement('div');
  div.setAttribute('class', 'card bg bg-light');
  div.setAttribute('id', 'card1');

  
      div.innerHTML = ` 
           
      <label for="card1">codeudor</label>
          <div class="card-body">
              <div class="form-row">
                  <div class="form-group">
                      <label for="nombre_codeudor">Nombre</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_nombre" id="nombre_codeudor" placeholder="Inserte un Nombre">
                  </div>

                  <div class="form-group">
                      <label for="cedula_codeudor">Cedula</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_cedula" id="cedula_codeudor" placeholder="Inserte un No cedula">
                  </div>

                  

                  <div class="form-group">
                      <label for="direccion_codeudor">Direccion</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_dir" id="direccion_codeudor" placeholder="Inserte direccion">
                  </div>
            
                  <div class="form-group">
                      <label for="nombre_codeudor">email</label>
                      <input class="form-control form-control-sm" type="email" name="codeudor_email" id="email_codeudor" placeholder="Inserte un email">
                  </div>

                  <div class="form-group">
                      <label for="nombre_codeudor">Tel</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_tel${cant}" id="celular_codeudor" placeholder="Inserte No Celular">
                  </div>
                  <div class="form-group">
                      <label for="nombre_codeudor">Tel</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_tel${cant}" id="celular_codeudor" placeholder="Inserte No Celular">
                  </div>
                  <div class="form-group">
                      <label for="nombre_codeudor">Tel</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_tel${cant}" id="celular_codeudor" placeholder="Inserte No Celular">
                  </div>
                  <div class="form-group">
                      <label for="nombre_codeudor">Tel</label>
                      <input class="form-control form-control-sm" type="text" name="codeudor_tel${cant}" id="celular_codeudor" placeholder="Inserte No Celular">
                  </div>
                </div> 
            </div>
         `     
      document.getElementById('codeudores').appendChild(div);
      //document.getElementById("label_numero").innerText=`Observaciones ${a}`;

     
}
 ;
function remover_codeudores(){
  $("#card1:last-child").remove()
 
}



function remover_celulardinamico_cliente(){
  $("#div_teldinamico:last-child").remove()
 
}






function append_observacion_edit(){
  var div =document.createElement('div');
  //div.setAttribute('class','card"')
  div.setAttribute('id','nuevo_div_append_observacion')
  
  div.innerHTML= `<div class="card" style="width: 16rem;" id="hijo_observaciones"><!--ESte es el hijo del padre id="padre_observacion"-->
  <div class="card-header">
          Observacion
        </div>
  <div class="card-body">
          <textarea class="form-control" name="avance_proceso.observaciones"  cols="32" rows="8"></textarea>
    
  </div>
</div>`

document.getElementById('div_padre_observaciones').appendChild(div)

 
}

function remove_observacion_edit(){
  $("#nuevo_div_append_observacion:last-child").remove()

}





function append_medida_edit(){
  var div =document.createElement('div');
  //div.setAttribute('class','card"')
  div.setAttribute('id','nuevo_div_append_medida')
  
  div.innerHTML= `<div class="card" style="width: 16rem;" id="hijo_medidas"><!--ESte es el hijo del padre id="padre_observacion"-->
  <div class="card-header">
          Medidas Cautelares
        </div>
  <div class="card-body">
          <textarea class="form-control" name="avance_proceso.medidas"  cols="32" rows="8"></textarea>
    
  </div>
</div>`

document.getElementById('div_padre_medidas').appendChild(div)

 
}

function remove_medida_edit(){
  $("#nuevo_div_append_medida:last-child").remove()

}





function append_actuacion_edit(){
  var div =document.createElement('div');
  //div.setAttribute('class','card"')
  div.setAttribute('id','nuevo_div_append_actuacion')
  
  div.innerHTML= `<div class="card" style="width: 16rem;" id="hijo_actuaciones"><!--ESte es el hijo del padre id="padre_observacion"-->
  <div class="card-header">
          Actuacion
        </div>
  <div class="card-body">
          <textarea class="form-control" name="avance_proceso.actuaciones"  cols="32" rows="8"></textarea>
    
  </div>
</div>`

document.getElementById('div_padre_actuaciones').appendChild(div)

 
}

function remove_actuacion_edit(){
  $("#nuevo_div_append_actuacion:last-child").remove()

}





function append_impulso_edit(){
  var div =document.createElement('div');
  //div.setAttribute('class','card"')
  div.setAttribute('id','nuevo_div_append_impulso')
  
  div.innerHTML= `<div class="card" style="width: 16rem;" id="hijo_impulsos"><!--ESte es el hijo del padre id="padre_observacion"-->
  <div class="card-header">
          Impulsos procesales ${2-1}
        </div>
  <div class="card-body">
          <textarea class="form-control" name="avance_proceso.impulsos"  cols="32" rows="8"></textarea>
    
  </div>
</div>`

document.getElementById('div_padre_impulsos').appendChild(div)

 
}

function remove_impulso_edit(){
  $("#nuevo_div_append_impulso:last-child").remove()

}



document.getElementById("body").addEventListener("load", sortTable())

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tarea_table");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = new Date(rows[i].getElementsByTagName("td")[2].textContent);
      y = new Date(rows[i + 1].getElementsByTagName("td")[2].textContent);
      // Check if the two rows should switch place:
      if (x > y) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
      switching = true;
    }
  }
}






      function activar_etapas(){

        var a = document.getElementById('div_edit_etapa');
        var b= a.children[a.children.length-2];
        var c= b.children[0];
        var d= c.children[0];

        var etapas= document.getElementById("opciones_etapa");
        var etapasHijos= etapas.children
       

          for (var i = 0; i < etapasHijos.length; i++){

if (d.value ==="Presentación"){
   
var h= etapasHijos[2];
var j= etapasHijos[3]
h.disabled= false;
j.disabled=false

}
else if(d.value === etapasHijos[i].value) {
  var k= etapasHijos[i+1];
  k.disabled= false;
  
}}}


