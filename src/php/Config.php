<?php

namespace timetable;

/**
 * Application configuration.
 *
 * @package timetable
 * @author Daniel Peters
 * @version 1.0
 */
class Config {
  const APP_NAME = 'Timetable viewer';
  const APP_HOST = 'localhost';
  const APP_ROOT = __DIR__ . '/../../';
  const APP_LOCALE = 'de-ch';
  const SERVER_HTTP_VERSION = 'HTTP/1.1';
  const PUBLIC_DIR = self::APP_ROOT . 'public/';
  const GALLERY_DIR = Config::PUBLIC_DIR . 'img/gallery/';
  const VIEWS = __DIR__ . '/../view';
  const LOGS = self::APP_ROOT . 'logs/';
  const DEFAULT_LOGFILE = self::LOGS . 'application.log';
  const DB_DRIVER = 'mysql';
  const DB_HOST = 'localhost';
  const DB_DATABASE_NAME = 'timetable_viewer';
  const DB_USER = 'root';
  const DB_PASSWORD = '';
  const DB_PORT = 3306;
  const DB_CHARSET = 'utf8mb4';
}
