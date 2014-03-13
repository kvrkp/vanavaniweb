<html>
<head>
<title>
Vanavani Vidyalaya Matriculation School, Salem - Photo Gallery - Show all Photos
</title>
<?php
	include("includes.php");
	$folder = $_REQUEST["folder"];
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
You are here: Home > <a href="photo_gallery.php">Photo Gallery</a> > <?=$folder?>
<hr>
<?php
$fromdir = "images/" . $folder;
$thelist = "<table class='photo_gallery_mini'>";
$thelist .= "<tr>";
$row = 0;
if ($handle = opendir($fromdir)) {
    while (false !== ($file = readdir($handle)))
    {
   	 if ($file != "." && $file != ".." 
   	   && strtolower(substr($file, strpos($file, '.') + 1)) == 'jpg_medium.jpg')
        {
        	$row++;
            $thelist .= '<td><img src="' . $fromdir . "/" . $file . '" /></td>';
            if ($row % 4 == 0) {
               $thelist .= "</tr><tr>";
            }
        }
    }

    closedir($handle);
    $thelist .= '</table>';
}
?>
<?=$thelist?>
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
