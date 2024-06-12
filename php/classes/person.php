<?php

class Person
{
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

    function __construct($name, $lastname, $age, $father = null, $mother = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->hp = 100;
    }

    function setHp($hp)
    {
        if ($this->hp + $hp > 100) $this->hp = 100;
        else $this->hp += $hp;
    }

    function getHp()
    {
        return $this->hp;
    }

    function getName()
    {
        return $this->name;
    }
    function getMother()
    {
        return $this->mother;
    }
    function getFather()
    {
        return $this->father;
    }

    function getInfo()
    {
        return "<body style='display:flex; flex-direction: row; justify-content: center; text-align:center;'>" .
            "<div style='width: fit-content; height:fit-content; border: 3px solid red; padding: 10px'>" .
            "<h3>Пара слов о моей семье: </h3>" . "Меня зовут " . $this->getName() .
            "<br><h4>Мои родители: </h4> мама - " . $this->getMother()->getName() . " и папа - " . $this->getFather()->getName() .
            "<br><h4>Мои бабушка и дедушка по папе: </h4>" . $this->getFather()->getMother()->getName() .
            " и " . $this->getFather()->getFather()->getName() .
            "<br><h4>Мои бабушка и дедушка по маме: </h4>" . $this->getMother()->getMother()->getName() .
            " и " . $this->getMother()->getFather()->getName() .
            "</div></body>";
    }

    function sayHi($name)
    {
        return "Hi, $name! I'm " . $this->name;
    }
}

$vasiliy = new Person("Василий", "Моргунов", 87);
$klavdia = new Person("Клавдия", "Моргунова", 82);

$boris = new Person("Борис", "Серков", 69);
$lyudmila = new Person("Людмила", "Серкова", 71);

$michail = new Person("Михаил", "Моргунов", 40, $vasiliy, $klavdia);
$julia = new Person("Юлия", "Моргунова", 37, $boris, $lyudmila);
$petr = new Person("Петр", "Моргунов", 5, $michail, $julia);

echo $petr->getInfo();
