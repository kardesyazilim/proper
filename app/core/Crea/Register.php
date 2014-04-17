<?php
class Crea
{
    
    private $type;
    private $config;



    function __construct($config)
	{
		$this->config = '../../local/'.$config.'.php';
		$this->getInit();

	}
    //register Blog
    
    //register library block
    
    //global block
    //local block
    
    //run block
    public function getInit(){
    	Zend\Mvc\Application::init(include $this->config)->run();
    	return;
    }
    
}
