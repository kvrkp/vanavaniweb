<html>
<head>
<title>
Vanavani Vidyalaya Matriculation School, Salem - Photo Detail
</title>
<?php
	include("includes.php");
	$filename = $_REQUEST["filename"];
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
You are here: Home > <a href="photo_gallery.php">Photo Gallery</a> > Photo Detail
<hr>
<img src="<?php echo $filename; ?>" width="700px" />
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
