<?php
$month = date('n');
include $_SERVER['DOCUMENT_ROOT'] . '/data/' . $month . '.php';
$today = date('d');
$job = 'Не работает!';
$class = 'green';
$gif = 'good';
foreach ($workdays as $workday) {
	if ($today == $workday) {
		$job = 'Работает!';
		$class = 'red';
		$gif = 'bad';
		break;
	}
	if ($today == ++$workday && date('G') < 10) {
		$job = 'Приходит со смены';
		$class = 'blue';
		$gif = 'okay';
		break;
	}
}
