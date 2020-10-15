<?php
	$name = $_POST["name"];
	$number = $_POST["phone"];

	if($number==""){
		echo "Заполните все поля";
    }
	else{
		$it = 'info@globalhost.top';
    $to = $it;

		$subject = "[Minecraft Hosting] " . $number;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@globalhost.top>\r\n";

		$message .=
		"Имя: " . $name . "<br>".
		"Телефон: ". $number ."<br>";

		$send = mail($to, $subject, $message, $headers);
	}

?>