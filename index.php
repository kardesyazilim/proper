<?php


chdir(dirname(__DIR__));

//crea system status check blok


//system config block

//crea register block
require_once('app/core/Crea/Crea.php');
$crea = new \Crea\Register;
$crea->getInit('config');