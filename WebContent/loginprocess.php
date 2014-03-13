<?php
	session_start();

	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];
	$redirect_from = "http://localhost/vanavani/trustees.php";
	
	$_SESSION['loggedin'] = "true";
	
	if(isset($_SESSION['redirect_from']))
		$redirect_from = $_SESSION['redirect_from'];
	
	echo("Mahesh 1:" +  "," + $password);	
?>

<!--
window.location.href="http://localhost/vanavani/trustees.php";
-->