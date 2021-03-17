<?php
use Ubiquity\controllers\rest\RestServer;


#[Rest()]
#[Route(path: "/rest/")]
class MyRestController extends \Ubiquity\controllers\rest\api\json\JsonRestController {

    protected function getRestServer(): RestServer {
        $srv=parent::getRestServer();
        $srv->setAllowedOrigin('http://127.0.0.1:4200');
        return $srv;
    }
}
