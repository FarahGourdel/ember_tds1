<?php
use Ubiquity\controllers\Router;

\Ubiquity\cache\CacheManager::startProd($config);
\Ubiquity\orm\DAO::start();
Router::startAll();
//Router::start();
//Router::addRoute("_default", "controllers\\IndexController");
//\Ubiquity\assets\AssetsManager::start($config);
