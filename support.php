<?php
	$key = $_POST["key"];
	$messageText = $_POST["message"];

	if($key=="" or $messageText==""){
		echo "Заполните все поля";
    }
	else{
		$it = 'support@globalhost.top';
        $to = $it;

		$subject = "[Minecraft Hosting Support] " . $key;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@domen.com>\r\n";

		$message .=
		"Почта: " . $key . "<br>".
		"Сообщение: ". $messageText ."<br>";

		$send = mail($to, $subject, $message, $headers);
	}

?>