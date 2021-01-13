<?php
include $_SERVER['DOCUMENT_ROOT'] . '/checker.php';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/style.css">
	<script src="/script.js" defer></script>
	<title>AVIABILITY</title>
</head>
<body>
	<div class='wrapper date-block'>
		<div><?=$today . '.' . $month?></div>
	</div>
	<div class='hidden gif-block gif-first'>
		<img src="/gifs/<?=$gif?>_result.gif" alt="">
		<img src="/gifs/<?=$gif?>_result.gif" alt="">
	</div>
	<div class='wrapper top-block'>
		<h2>ХЕЛЬ СЕГОДНЯ...</h2>
		<a href='#' class='link'>нажми чтобы узнать</a>
	</div>
	<div class='hidden result-block <?=$class?>'>
		<h1><?=$job?></h1>
	</div>
	<div class='hidden gif-block gif-second'>
		<img src="/gifs/<?=$gif?>_result.gif" alt="">
		<img src="/gifs/<?=$gif?>_result.gif" alt="">
	</div>
</body>
</html>