<html>
<head>
<title>
Vanavani Vidyalaya Matriculation School, Salem - Login
</title>
<?php
	include("includes.php");
?>

</head>
<body>
<table><tr><td>
<?php
	include("header.php");
?>	
<table><tr><td id="leftmenu">
<?php
	include("leftmenu.php");
?>	
</td><td>
<!-- Content starts here -->
<div class="main_content">
You are here: Home > Login
<hr>
<form action="loginprocess.php">
	<table>
		<tr><td>Login:</td>
		<td><input type="text" name="username" value=""/></td>
		</tr>
		<tr><td>Password:</td>
		<td><input type="password" name="password" value=""/></td>
		</tr>
		<tr><td colspan="2"><input type="submit" value="Submit" /></td>
		</tr>
	</table>
</form>
</div>
</td><td id="rightmenu">
<?php
	include("rightmenu.php");
?>
</td></tr></table>
<?php
	include("footer.php");
?>
</td></tr></table>
</body>
</html>
