<?php
	$email = $_POST["email"];
	$messageText = $_POST["message"];

	if($email=="" or $messageText==""){
		echo "Заполните все поля";
    }
	else{
		$it = 'info@globalhost.top';
    $to = $it;

		$subject = "[Minecraft Hosting] " . $email;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@globalhost.top>\r\n";

		$message .=
		"Почта: " . $email . "<br>".
		"Сообщение: ". $messageText ."<br>";

		$send = mail($to, $subject, $message, $headers);
	}

?>