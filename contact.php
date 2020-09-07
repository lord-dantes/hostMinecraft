<?php
	$email = $_POST["email"];
	$messageText = $_POST["message"];

	if($email=="" or $messageText==""){
		echo "Заполните все поля";
    }
	else{
		$sb = 'slava.bandura1@gmail.com';
		$to = $sb;

		$subject = "[Minecraft Hosting] " . $email;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@domen.com>\r\n";

		$message .=
		"Почта: " . $email . "<br>".
		"Сообщение: ". $messageText ."<br>";

		$send = mail($to, $subject, $message, $headers);
	}

?>