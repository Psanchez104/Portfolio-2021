<?php
// ini_set('display_errors', '1');
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$to = "form-submit@pablosanchezdeveloper.com";
$subject = "Contact form Submission";
//message already created above
$header = "From: $email";
    $a = mail($to, $subject, $message, $header);
    if ($a){
        print("Message was sent!");
    } else {
        print("Message wasn't sent, please check that you have changed emails in the bottom");
    }
?>

