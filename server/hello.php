<?php

    //  $login = $_POST["login"];
    //  $pass = $_POST["pass"];

    // echo "Recibido Login: <b>".$login."</b> en el servidor. El password <b style='color:red'>".$pass." </b>es poco seguro";
// obtener el objeto de un JSON

$data = file_get_contents('php://input');
$data = json_decode($data,true); // si le ponemos true es un array asociativo

$name = $data['name'];

echo "Recibido name: ".$name;

?>