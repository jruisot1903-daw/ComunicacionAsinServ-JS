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

// var alumno = new Object();

// alumno.name = "Pepe";
// alumno.age = 19;
// alumno.course = 2;
// alumno.fp = "DAW";

// console.log(alumno)
// console.log(JSON.stringify(alumno))


// document.getElementById("btDatos").addEventListener("click", () => {
//     let xhr = new XMLHttpRequest();

// // xhr.responseType = "text"; 
// si lo ponemos json en vez de text se auto parsea y el JSON.parse no hace falta ponerlo
//     xhr.onreadystatechange = function () {

//        if ((xhr.readyState == 4) && (xhr.status == 200)) {
//         // Procesamos respuesta del server:
//             info.innerHTML = xhr.response;
//             let respData = JSON.parse(xhr.response);
//             console.log("Usuario: " + respData.name);
//        }
//     }

//     xhr.open("POST","http://www.js.es/server/hello.php");
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send(JSON.stringify(alumno));
// });


//Recibir JSON del  servidor 

// document.getElementById("btDatos").addEventListener("click", () => {
//     let xhr = new XMLHttpRequest();

//      xhr.responseType = "json";
//     xhr.onreadystatechange = function () {

//        if ((xhr.readyState == 4) && (xhr.status == 200)) {
//         // Procesamos respuesta del server:
//             info.innerHTML = xhr.response;
//             let data = xhr.response.animales[3]
//             console.log(data);
//             info.innerHTML = "Nombre: "+data.nombre+" Habitad: "+data.habitat;
//        }
//     }

//     xhr.open("POST","http://www.js.es/server/animales.json");
//     //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send();
// });



//----------------------------- FETCH ------------------------------

//Ejemplo basico , pero siempre es la misma estructura

// document.getElementById("btDatos").addEventListener("click",function(){
//     fetch("http://www.js.es/server/hello.php",
//         {
//             method:"POST",
//             headers: {"Content-Type":"application/x-www-form-urlencoded"},
//             body: "login=Pepe&pass=1234"
//         })
//     .then(function(resp){
//        if(resp.ok){
//             info.innerHTML = "Respuesta: "+resp;
//             console.log(resp);
//             // depende lo que vayamos a recibir tenemos que ponerle en nuestro caso text porque es texto si no json , blob ..
//             resp.text()
//             .then(function(data){
        
//                 info.innerHTML = data;
//             })
//             .catch(function(err){
//                 info.innerHTML = "ERROR: "+err;
//             });
//         }
//     })
//     .catch(function(err){
//         info.innerHTML = "ERROR: "+err;
//     })
// });

//----------------------------- FETCH enviar JSON ------------------------------

// var alumno = new Object();
// alumno.name = "Pepe";
// alumno.age = 19;
// alumno.course = 2;
// alumno.fp = "DAW";

// document.getElementById("btDatos").addEventListener("click",function(){
//     fetch("http://www.js.es/server/hello.php",
//         {
//             method:"POST",
//             headers: {"Content-Type":"application/x-www-form-urlencoded"},
//             body: JSON.stringify({alumno}),
//             cache: "no-cache"
//         })
//     .then(function(resp){
//        if(resp.ok){
//             console.log(resp);
//             resp.text()
//             .then(function(data){
        
//                 info.innerHTML = data.name;
//             })
//             .catch(function(err){
//                 info.innerHTML = "ERROR: "+err;
//             });
//         }
//     })
//     .catch(function(err){
//         info.innerHTML = "ERROR: "+err;
//     })
// });
//----------------------------- FETCH recibir JSON ------------------------------
document.getElementById("btDatos").addEventListener("click",function(){
    fetch("http://www.js.es/server/animales.json",
        {
            method:"POST",
            headers: {"Content-Type":"application/x-www-form-urlencoded"},
            cache: "no-cache"
        })
    .then(function(resp){
       if(resp.ok){
            resp.json()
            .then(function(data){
                console.log(data)
                data = data.animales[1]
                console.log(data)
                info.innerHTML = "El "+data.nombre+" es: "+data.dieta;
            })
            .catch(function(err){
                info.innerHTML = "ERROR: "+err;
            });
        }
    })
    .catch(function(err){
        info.innerHTML = "ERROR: "+err;
    })
});