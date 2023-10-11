<?php

$time = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'];
$phone = $_POST["phone"];
$mail = $_POST["mail"];
$ref = $_SERVER['HTTP_REFERER'];
$file = "leads.txt";
$message = "Телефон: $phone \n Mail: $mail \n ip: $ip \n Дата и время: $time \n \n ";
$save_order = fopen($file, 'a+');
fwrite($save_order, $message);
fclose($save_order);

$order = array (
    'p1' => date('Y-m-d H:i:s'),
    'p2' => $_POST["phone"],
    'p3' => $_POST["mail"],
    'p4' => $_SERVER['REMOTE_ADDR']
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://script.google.com/macros/s/AKfycbw4XOywWfpTQxMjN9Ke8yV1S4RJ8OuRAo7IOIu6WLnY4FnFa-7GFqg5WcfybrTp21bjKg/exec?p1=$phone&p2=$mail&p3=$ip&p4=$ref" );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     http_build_query($order) );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/x-www-form-urlencoded'));

$result=curl_exec ($ch);
header ('Location: success.php?pixel='.$_POST['pixel'].'&start='.$_POST['start'].'&sub='.$_POST['sub'].'');

?>