<?php

namespace timetable\controller\home;

use lib\route\Controller;
use lib\route\Request;
use lib\route\Response;
use timetable\Config;

/**
 * Class PageController.
 *
 * @package timetable\controller\home
 * @author Daniel Peters
 */
class PageController implements Controller {
  public function index (Request $request, Response $response) {
    $response->render('layout', [
      'lang' => Config::APP_LOCALE,
      'title' => Config::APP_NAME
    ]);
  }
}
