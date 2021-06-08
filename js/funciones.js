let usuarios = [];

function usuario(){
    let edad = parseInt(document.getElementById("edad").value);
    let nombre = document.getElementById("nombre").value;
    
    if(usuarios.length >= 3){
        return;
    }

    usuarios.push({edad: edad, nombre: nombre})


    if(edad <= 17){
        alert("El usuario es menor de edad")
    }
    else{
        alert("El usuario es mayor de edad")
    }

    let usuarioMayor = usuarios.sort((a,b)=>b.edad - a.edad)[0];
    alert("El usuario más viejo es: " + usuarioMayor.edad);


  
}