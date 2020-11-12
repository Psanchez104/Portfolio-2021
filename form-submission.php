<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

// if(isset($name) && isset($email) && isset($message)){
    mail("PabloE94Sanchez@gmail.com", "Form to email message", $message, "From: $email");
// }

// echo($name);
?>