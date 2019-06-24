<?php

namespace timetable\controller\error;

use lib\http\StatusCode;
use lib\route\Controller;
use lib\route\Request;
use lib\route\Response;

/**
 * Class ErrorController.
 *
 * @package ceramic\controller\error
 * @author  Daniel Peters
 * @version 1.0
 */
class ErrorController implements Controller {
  public function get401 (Request $request, Response $response): void {
    $response->setStatus(StatusCode::UNAUTHORIZED);
    $response->render('error', [
      'lang' => Config::APP_LOCALE,
      'title' => $response->getStatus() . ' Unauthorized',
      'navigation' => '',
      'css' => '',
      'message' => 'Sie sind nicht autorisiert um auf "' . $request->getUri() . '" zuzugreifen.',
      'scripts' => ''
    ]);
  }

  public function get404 (Request $request, Response $response): void {
    $response->setStatus(StatusCode::NOT_FOUND);
    $response->render('error', [
      'lang' => Config::APP_LOCALE,
      'title' => $response->getStatus() . ' Not Found',
      'navigation' => '',
      'css' => '',
      'message' => 'Hoppla. Die seite "' . $request->getUri() . '" existiert nicht.',
      'scripts' => ''
    ]);
  }
}
