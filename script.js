var boton=()=>{
    var tarea = document.getElementById('tarea');
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById('emailHelp');
    //valor de la tarea
    var valor = tarea.value;
    //console.log(tarea.value);

    if (valor == ""){
        texto.innerHTML = "Por favor digite un texto";
        return false;
    }
    else{
        texto.innerHTML = "Ingresa tu tarea";
    }
    //crear elelemnto li
    var nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = valor;

    var nuevoBoton = document.createElement('button');
    nuevoBoton.innerHTML = "Eliminar";

    nuevoBoton.className = "btn btn-warning mb-2 ml-3" ;

    nuevaTarea.appendChild(nuevoBoton);

    contenido.appendChild(nuevaTarea);

    var eliminar =()=>{
        contenido.removeChild(nuevaTarea);
    }

    nuevoBoton.addEventListener('click',eliminar);


    //limpiar input
    tarea.value = "";
}
