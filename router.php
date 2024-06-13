<?php

$url = explode("/", $_SERVER['REQUEST_URI']);
// print "url = ".$url[0]." + ".$url[1];

require_once ("php/db.php");
require_once ("php/classes/user.php");

if ($url[1]=="login") {
    $content = file_get_contents("pages/login.php");
} else if ($url[1]=="register") {
    $content = file_get_contents("pages/register.html");
} else if ($url[1]=="contact") {
    $content = file_get_contents("pages/contact.html");
} else if ($url[1]=="users"){
    require_once("pages/users/index.html"); 
    // $content = file_get_contents("pages/users/index.html"); 
} else if ($url[1]=="addUser") {
    echo User::addUser($_POST["name"],$_POST["lastname"],$_POST["email"], $_POST["pass"]);
    
    // var_dump($mysqli);
} else if ($url[1]=="authUser") {
    echo User::authUser($_POST["email"],$_POST["pass"]);

}else {
    $content = file_get_contents("pages/main.php");
}

if (!empty($content)) require_once("template.php");
