<?php
	$phone = $_POST["phone"];

	if($phone==""){
		echo "Заполните все поля";
    }
	else{
		$it = 'info@globalhost.top';
		$to = $it;

		$subject = "[Minecraft Hosting] " . $phone;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@globalhost.top>\r\n";

		$message .= "Номер телефона: " . $phone;

		$send = mail($to, $subject, $message, $headers);
	}

?>