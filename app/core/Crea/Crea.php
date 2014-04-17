<?php
namespace Crea;

class getInit
{
    private $c;
    
    function __construct($config) {
        
        $this->c = __DIR__;
        if ($handle = opendir($this->c)) {
            
            while (false !== ($entry = readdir($handle))) {
                if ($entry !== '.' & $entry !== '..' & $entry !== '.DS_Store') {
                    
                    $check = filetype($this->c . DIRECTORY_SEPARATOR . $entry);
                    if ($check == 'dir') {
                        
                        if ($crea = opendir($this->c . DIRECTORY_SEPARATOR . $entry . DIRECTORY_SEPARATOR)) {
                            while (false !== ($creaClass = readdir($crea))) {
                                if ($creaClass !== '.' & $creaClass !== '..' & $creaClass !== '.DS_Store') {
                                    $creaClass = $this->c . DIRECTORY_SEPARATOR . $entry . DIRECTORY_SEPARATOR . $creaClass;
                                    
                                    include "$creaClass";
                                }
                            }
                            while ($creaClass = readdir($crea)) {
                                if ($creaClass !== '.' & $creaClass !== '..' & $creaClass !== '.DS_Store') {
                                    $creaClass = $this->c . DIRECTORY_SEPARATOR . $entry . DIRECTORY_SEPARATOR . $creaClass;
                                    
                                    include "$creaClass";
                                }
                            }
                            closedir($crea);
                        }
                    }
                }
            }
            
            while ($entry = readdir($handle)) {
                if ($entry !== '.' & $entry !== '..' & $entry !== '.DS_Store') {
                    
                    $check = filetype($this->c . DIRECTORY_SEPARATOR . $entry);
                    if ($check == 'dir') {
                        
                        if ($crea = opendir($this->c . DIRECTORY_SEPARATOR . $entry . DIRECTORY_SEPARATOR)) {
                            while (false !== ($creaClass = readdir($crea))) {
                                if ($creaClass !== '.' & $creaClass !== '..' & $creaClass !== '.DS_Store') {
                                    $creaClass = $this->c . DIRECTORY_SEPARATOR . $entry . DIRECTORY_SEPARATOR . $creaClass;
                                    
                                    include "$creaClass";
                                }
                            }
                            while ($creaClass = readdir($crea)) {
                                if ($creaClass !== '.' & $creaClass !== '..' & $creaClass !== '.DS_Store') {
                                    $creaClass = $this->c . DIRECTORY_SEPARATOR . $entry . DIRECTORY_SEPARATOR . $creaClass;
                                    
                                    include "$creaClass";
                                }
                            }
                            closedir($crea);
                        }
                    }
                }
            }
            closedir($handle);
        }
        
        if (class_exists('Zend\Loader\AutoloaderFactory')) {
            return;
        }
        $zf2Path = dirname(__DIR__);
        
        if ($zf2Path) {
            if (isset($loader)) {
                $loader->add('Zend', $zf2Path);
                $loader->add('ZendXml', $zf2Path);
            } else {
                
                include $zf2Path . '/Zend/Loader/AutoloaderFactory.php';
                \Zend\Loader\AutoloaderFactory::factory(array('\Zend\Loader\StandardAutoloader' => array('autoregister_zf' => true)));
            }
        }
        
        if (!class_exists('Zend\Loader\AutoloaderFactory')) {
            throw new RuntimeException('!Zend Framework dosyalarını kontrol ediniz.');
        }
    }
}
