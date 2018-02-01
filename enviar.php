<?php

$destino = "digital@seppublicidad.com";

$nombre = $_POST["name"];
$correo = $_POST["email"];
$telefono = $_POST["cellphone"];
$direccion = $_POST["address"];
$mensaje = $_POST["comment"];


$contenido = $nombre . $correo . $telefono . $direccion .$mensaje;

mail($destino, "Contacto", $contenido);

echo "hola $nombre";

?>