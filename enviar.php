<?php

$destino = "m507@live.com.mx";
$nombre = $_POST["name"];
$correo = $_POST["email"];
$telefono = $_POST["cellphone"];
$direccion = $_POST["address"];
$mensaje = $_POST["comment"];


$contenido = "Nombre: ".$nombre . "\nCorreo: ".$correo . "\nTeléfono: " .$telefono. "\nDirección: " . $direccion."\nMensaje: " . $mensaje;

mail($destino,"Contacto", $contenido);
header("Location: contact.html")


?>