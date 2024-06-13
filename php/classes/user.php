<?php

class User {

    private$id;
    private $name;
    private $lastname;
    private $email;

    function __construct($id, $name, $lastname, $email)
{   
    $this->id = $id;
    $this->name = $name;
    $this->lastname = $lastname;
    $this->email = $email;

}
    function getId() { return $this->id; }
    function getName() { return $this->name; }
    function getLastname() { return $this->lastname; }
    function getEmail() { return $this->email; }
    
    //Статический метод добавления пользователя в базу данных
    static function addUser($name, $lastname, $email, $pass) {
        // echo "User added";

        global $mysqli;
        
        $email = mb_strtolower(trim($email));
        $pass = trim($pass);
        $pass = password_hash($pass, PASSWORD_DEFAULT);

        $result = $mysqli->query("SELECT * FROM users WHERE email = '$email'");

        if ($result->num_rows != 0) {
            return json_encode(["result" => "exist"]);
        } else {
            $mysqli->query("INSERT INTO users (name, lastName, email, pass) VALUES ('$name','$lastname','$email', '$pass')");
            
            return json_encode(["result" => "success"]);
        }
    }

    //Статический метод авторизации пользователя

    static function authUser($email, $pass) {
        session_start();
        global $mysqli;
        $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
        
        if ($result->num_rows != 0) {
            
            $result = $result->fetch_assoc();
            if (password_verify($pass, $result["pass"])) {
                $_SESSION["user_id"] = $result["id"];
                $_SESSION["name"] = $result["name"];
                $_SESSION["lastname"] = $result["lastName"];
                $_SESSION["email"] = $result["email"];
                return json_encode(["result" => "success"]);
    
            } else {
                return json_encode(["result" => "pass fail"]);
            }
        } else { 
            return json_encode(["result" => "login fail"]);
        }

    }
   
}