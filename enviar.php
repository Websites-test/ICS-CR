<?php

 $destino = $_POST["email"];
 $asunto = "comentario";


 $comentario ="
	email: $_POST[email]
	comentario: $_POST[com]

 ";

 $headers = "from:".$_POST["email"]."\r\n".
 			"Reply-To:" .$_POST["email"]."\r\n".
 			"X-Mailer: PHP/". phpversion();

 mail($destino, $asunto, $comentario, $headers);
 echo "Mensaje enviado";	



?>