<?php
$fontName = $_GET['fontName'];  // be secure!
if (
	$fontName != 'SourceCodePro-Regular.ttf.woff2' &&
	$fontName != 'SourceCodePro-Regular.eot'
) {
	$fontName = null;
}

if ($fontName == null) {
	header("HTTP/1.0 404 Not Found");
	echo $fontName;
}
else {
	sleep(3);
	
	header('Content-Type: application/font-woff2');
	header('Pragma: no-cache');
	readfile($fontName);
}
