<?php
	$phone = $_POST["phone"];

	if($phone==""){
		echo "Заполните все поля";
    }
	else{
		$it = 'it737@yandex.ru';
		$to = $it;

		$subject = "[Minecraft Hosting] " . $phone;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@domen.com>\r\n";

		$message .= "Номер телефона: " . $phone;

		$send = mail($to, $subject, $message, $headers);
	}

?>