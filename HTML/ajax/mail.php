<?php
$connection = mysqli_connect('localhost', 'root', 'panzer161');

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 

if($connection == false) {
     echo '$connection = Нет;'; 
    exit();
} else {
     echo '$connection = Да;';
}

$db=mysqli_select_db($connection, "luck");
mysqli_set_charset($connection,"utf8");

if (!$connection || !$db) {
    exit(mysqli_error());
}


$login = $_POST['login'];
$email = $_POST['email']; 
$date = $_POST['date'];
$password = $_POST['password'];

 echo ($login);
 echo ($email);
 echo ($date);
 echo ($password);


$result = mysqli_query($connection, "INSERT INTO `table1`(`login`, `email`, `date`, `password`) VALUES ('$login','$email','$date', '$password')");
if ($result) {
    echo "Данные успешно сохранены!";
}
else {
    echo "Произошла ошибка, пожалуйста повторите попытку.";
} 

?> 