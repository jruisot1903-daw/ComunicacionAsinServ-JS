let info = document.getElementById("info");

//leer el archivo desde el servidor al cliente
// document.getElementById("btDatos").addEventListener("click", () =>{
//     let xhr = new XMLHttpRequest(); // creamos el objeto 
//     xhr.responseType = "text";
//xhr.responseType = "blob"; para archivos de audio , videos , imagenes , pdf etc...
//     xhr.onreadystatechange = function(){
        // console.log("Estado: "+xhr.readyState+" . Nivel: "+xhr.status); // ver como cambian esos valores
        // if((xhr.readyState == 4) && (xhr.status == 200)){ // condiciones para que se haga 
        //     document.getElementById("data").value = xhr.response; // lo mostramos por nuestro "data"
        // }

//         info.innerHTML = xhr.response;
//     }
// hacemos la conexión ponendo el metodo que vayamos a utilizar y poniendo la direccion a lo que
// queremos acceder del del servidor

    // Para enviar datos al servidor con POST
    // xhr.open("POST","http://www.js.es/server/hello.php"); 
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xhr.send("login=Pepe&pass=1234");

     //EJEMPLO CON GET
//     xhr.open("GET","http://www.js.es/server/hello.php?login=Pepe&pass=1234"); 
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send();
// });

//Leer XML desde el servidor 
// document.getElementById("btDatos").addEventListener("click", () => {
//     let xhr = new XMLHttpRequest();

//     // xhr.responseType = "text";
//     xhr.onreadystatechange = function () {

//        if ((xhr.readyState == 4) && (xhr.status == 200)) {
//         // Procesamos respuesta del server:
//             var alumnos = xhr.responseXML;
//             alumnos = alumnos.getElementsByTagName("Alumnos")[0].getElementsByTagName("alumno");
//             console.dir("Nombre: " + alumnos[1].getElementsByTagName("name")[0].textContent);
//             info.innerHTML = "Nombre: " + alumnos[1].getElementsByTagName("name")[0].textContent;
//        }
//     }

//     xhr.open("GET","http://www.js.es/server/alumnos.xml");
//     xhr.send();

    


// });

//Enviar JSON al  servidor 

var alumno = new Object();

alumno.name = "Pepe";
alumno.edad = 19;
alumno.course = 2;
alumno.fp = "DAW";


console.log(alumno);
console.log(JSON.stringify(alumno));

document.getElementById("btDatos").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    // xhr.responseType = "text";
    xhr.onreadystatechange = function () {

       if ((xhr.readyState == 4) && (xhr.status == 200)) {
        // Procesamos respuesta del server:
            info = xhr.responseXML;
           
       }
    }

    xhr.open("POST","http://www.js.es/server/hello.php"); 
    xhr.send(JSON.stringify(alumno));

    
});