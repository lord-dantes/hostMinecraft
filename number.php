<?php
	$name = $_POST["name"];
	$number = $_POST["number"];

	if($name=="" or $number==""){
		echo "Заполните все поля";
    }
	else{
		$it = 'it737@yandex.ru';
        $to = $it;

		$subject = "[Minecraft Hosting] " . $number;
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: <manager@domen.com>\r\n";

		$message .=
		"Имя: " . $name . "<br>".
		"Телефон: ". $number ."<br>";

		$send = mail($to, $subject, $message, $headers);
	}

?>