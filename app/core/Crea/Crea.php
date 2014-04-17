<?php
namespace Crea;

class getInit
{
    private $c;
    
    function __construct($config) {
        
        $this->c = __DIR__;
        if ($handle = opendir(__DIR__)) {
            
            while (false !== ($entry = readdir($handle))) {
                if ($entry !== '.' & $entry !== '..' & $entry !== '.DS_Store') {
                    
                    $check = filetype($this->c . DIRECTORY_SEPARATOR . $entry);
                    if ($check == 'dir') {
                        
                        //echo 'folder';
                        echo "$entry\n";
                    }
                }
            }
            
            while ($entry = readdir($handle)) {
                if ($entry !== '.' & $entry !== '..' & $entry !== '.DS_Store') {
                    echo "$entry\n";
                } else {
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
