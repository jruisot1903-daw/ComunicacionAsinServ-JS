let info = document.getElementById("info");

//leer el archivo desde el servidor al cliente
document.getElementById("leeTxt").addEventListener("click", () =>{
    let xhr = new XMLHttpRequest(); // creamos el objeto 
    xhr.responseType = "text";
//xhr.responseType = "blob"; para archivos de audio , videos , imagenes , pdf etc...
    xhr.onreadystatechange = function(){
        console.log("Estado: "+xhr.readyState+" . Nivel: "+xhr.status); // ver como cambian esos valores
        if((xhr.readyState == 4) && (xhr.status == 200)){ // condiciones para que se haga 
            document.getElementById("data").value = xhr.response; // lo mostramos por nuestro "data"
        }
    }
// hacemos la conexión ponendo el metodo que vayamos a utilizar y poniendo la direccion a lo que
// queremos acceder del del servidor
    xhr.open("GET","http://www.js.es/server/hello.txt"); 
    xhr.send();
});