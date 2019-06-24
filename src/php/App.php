<?php

namespace timetable;

use lib\application\ApplicationWeb;
use lib\database\Configuration;
use lib\http\StatusCode;
use lib\route\Router;
use timetable\controller\error\ErrorController;
use timetable\controller\home\PageController;

/**
 * Class App.
 *
 * @package timetable
 * @author Daniel Peters
 * @version 1.0
 */
class App extends ApplicationWeb {
  protected function configureSettings (): void {
    $this->logDestination = Config::DEFAULT_LOGFILE;
    $this->viewsPath = Config::VIEWS;
    $this->config = new Configuration(
      Config::DB_DRIVER,
      Config::DB_HOST,
      Config::DB_DATABASE_NAME,
      Config::DB_USER,
      Config::DB_PASSWORD,
      Config::DB_PORT,
      Config::DB_CHARSET
    );
  }
  protected function configureRoutes (Router $router): void {
    // Start Render routes block {
    $router->get('', PageController::class . '#index');
    // } End render routes block
    // Start API routes block {
    // } End API routes block
    // Start error routes block {
    $router->setErrorHandler(StatusCode::NOT_FOUND, ErrorController::class . '#get404');
    $router->setErrorHandler(StatusCode::UNAUTHORIZED, ErrorController::class . '#get401');
    // } End error routes block
  }
}
